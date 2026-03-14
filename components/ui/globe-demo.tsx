"use client";

import dynamic from "next/dynamic";

const World = dynamic(
  () => import("@/components/ui/globe").then((module) => module.World),
  {
    ssr: false,
  },
);

interface GlobeDemoProps {
  phase: "searching" | "locking" | "located";
}

export default function GlobeDemo({ phase }: GlobeDemoProps) {
  const shouldRotate = phase === "searching";

  const globeConfig = {
    pointSize: 3.4,
    globeColor: "#0a1017",
    showAtmosphere: true,
    atmosphereColor: "#8fa3ab",
    atmosphereAltitude: 0.11,
    emissive: "#0b1218",
    emissiveIntensity: 0.28,
    shininess: 0.95,
    polygonColor: "rgba(143,163,171,0.52)",
    ambientLight: "#4a8a9e",
    directionalLeftLight: "#e2eaef",
    directionalTopLight: "#c6d0d5",
    pointLight: "#8fa3ab",
    arcTime: 1200,
    arcLength: 0.72,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 28.6139, lng: 77.209 },
    autoRotate: shouldRotate,
    autoRotateSpeed: 0.65,
  };

  const colors = ["#5aadc4", "#8fa3ab", "#4a8a9e"];

  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.22,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.22,
      color: colors[2],
    },
    {
      order: 4,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.28,
      color: colors[0],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.18,
      color: colors[1],
    },
  ];

  return (
    <div className="relative h-full w-full">
      <World data={sampleArcs} globeConfig={globeConfig} phase={phase} />
      <span
        className={`loader-delhi-pin ${phase === "located" ? "loader-delhi-pin-active" : ""}`}
        style={{ left: "50%", top: "50%" }}
      />
    </div>
  );
}
