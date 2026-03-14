"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, Fog, Group, MathUtils, Object3D, Scene, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import countries from "@/data/globe.json";

const RING_PROPAGATION_SPEED = 3;
const CAMERA_Z = 280;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
  phase?: "searching" | "locking" | "located";
}

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<Group | null>(null);
  const isInitializedRef = useRef(false);

  const defaultProps = {
    pointSize: 1.8,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.09,
    polygonColor: "rgba(143,163,171,0.28)",
    globeColor: "#0d1117",
    emissive: "#0a0e11",
    emissiveIntensity: 0.15,
    shininess: 0.7,
    arcTime: 1400,
    arcLength: 0.75,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  const delhiPosition = defaultProps.initialPosition ?? {
    lat: 28.6139,
    lng: 77.209,
  };

  const targetRotationY = MathUtils.degToRad(90 - delhiPosition.lng);
  const targetRotationX = MathUtils.degToRad(-delhiPosition.lat * 0.65);

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current as unknown as Object3D);
      groupRef.current.rotation.x = targetRotationX;
      groupRef.current.rotation.y = targetRotationY - Math.PI * 0.8;
      isInitializedRef.current = true;
    }
  }, [targetRotationX, targetRotationY]);

  useEffect(() => {
    if (!globeRef.current || !isInitializedRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };

    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  }, [
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);

  useEffect(() => {
    if (!globeRef.current || !isInitializedRef.current || data.length === 0)
      return;

    const points = data.flatMap((arc) => [
      {
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      },
      {
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      },
    ]);

    const filteredPoints = points.filter(
      (point, index, list) =>
        list.findIndex(
          (candidate) =>
            candidate.lat === point.lat && candidate.lng === point.lng,
        ) === index,
    );

    globeRef.current
      .hexPolygonsData((countries as { features: object[] }).features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globeRef.current
      .arcsData(data)
      .arcStartLat((entry: object) => (entry as Position).startLat)
      .arcStartLng((entry: object) => (entry as Position).startLng)
      .arcEndLat((entry: object) => (entry as Position).endLat)
      .arcEndLng((entry: object) => (entry as Position).endLng)
      .arcColor((entry: object) => (entry as Position).color)
      .arcAltitude((entry: object) => (entry as Position).arcAlt)
      .arcStroke(() => [0.26, 0.22, 0.28][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((entry: object) => (entry as Position).order)
      .arcDashGap(14)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((entry: object) => (entry as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0)
      .pointRadius(1.6);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
      );
  }, [
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  useEffect(() => {
    if (!globeRef.current || !isInitializedRef.current || data.length === 0)
      return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const selectedIndices = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 3) / 5),
      );

      const ringsData = data
        .filter((_, index) => selectedIndices.includes(index))
        .map((entry) => ({
          lat: entry.startLat,
          lng: entry.startLng,
          color: entry.color,
        }));

      globeRef.current.ringsData(ringsData);
    }, 1800);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (defaultProps.autoRotate) {
      const rotateFactor = (defaultProps.autoRotateSpeed ?? 0.55) * 0.5;
      groupRef.current.rotation.y += delta * rotateFactor;
      groupRef.current.rotation.x = MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotationX,
        2.6,
        delta,
      );

      return;
    }

    groupRef.current.rotation.y = MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotationY,
      4.2,
      delta,
    );
    groupRef.current.rotation.x = MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotationX,
      4.2,
      delta,
    );
  });

  return <group ref={groupRef} />;
}

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x000000, 0);
  }, [gl, size]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0x060a0d, 380, 1600);

  return (
    <Canvas
      scene={scene}
      camera={{
        fov: 43,
        near: 180,
        far: 1800,
        position: [0, 0, CAMERA_Z],
      }}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.55} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 110, 350)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-150, 520, 180)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-180, 350, 240)}
        intensity={0.8}
      />
      <Globe {...props} />
    </Canvas>
  );
}

function genRandomNumbers(min: number, max: number, count: number) {
  const values: number[] = [];
  while (values.length < count) {
    const value = Math.floor(Math.random() * (max - min)) + min;
    if (!values.includes(value)) {
      values.push(value);
    }
  }

  return values;
}
