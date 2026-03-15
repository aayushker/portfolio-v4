import GlobeDemo from "@/components/ui/globe-demo";

interface StartupLoaderProps {
  phase: "searching" | "locking" | "located";
  visible: boolean;
}

export function StartupLoader({ phase, visible }: StartupLoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[220] flex items-center justify-center bg-crt-black/95 transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="loader-backdrop-scan absolute inset-0" />

      <div className="relative z-10 h-full w-full">
        {/* <GlobeDemo phase={phase} /> */}

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-crt-text text-glow-sm">
            Neural Geolocation Uplink
          </div>

          <div className="mt-8 w-full max-w-[700px] space-y-2">
            <div className="text-sm sm:text-base md:text-lg tracking-[0.14em] uppercase text-crt-text-bright text-glow-sm">
              {phase === "searching"
                ? "Locating Aayushker Singh..."
                : phase === "locking"
                  ? "Signal Locking: India..."
                  : "Located: India"}
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-crt-text-muted">
              {phase === "searching"
                ? "Scanning Coordinates — Verifying Signal"
                : phase === "locking"
                  ? "Aligning Hemisphere — Establishing Pinpoint"
                  : "Coordinates Locked — Routing Interface"}
            </div>
          </div>

          <div className="mt-5 w-full max-w-[360px]">
            <div className="loader-progress-track mx-auto">
              <span
                className={`loader-progress-fill ${
                  phase === "located" ? "loader-progress-fill-done" : ""
                }`}
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.22em] text-crt-text-dim/80">
          Geo Relay — Secure Channel
        </div>
      </div>
    </div>
  );
}
