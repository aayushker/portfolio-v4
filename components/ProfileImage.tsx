"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function getUtcTimeStamp(): string {
  const now = new Date();
  return now.toISOString().slice(11, 19) + " UTC";
}

export function ProfileImage() {
  const [hasError, setHasError] = useState(false);
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    setUtcTime(getUtcTimeStamp());
    const interval = setInterval(() => {
      setUtcTime(getUtcTimeStamp());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-crt-bg">
      {!hasError ? (
        <>
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            className="object-cover profile-crt-main profile-glitch-base"
            onError={() => setHasError(true)}
            priority
            sizes="(max-width: 768px) 100vw, 38vw"
          />
          <Image
            src="/images/profile.png"
            alt=""
            fill
            aria-hidden="true"
            className="pointer-events-none object-cover profile-crt-main mix-blend-screen opacity-0 profile-glitch-layer-cyan"
            priority
            sizes="(max-width: 768px) 100vw, 38vw"
          />
          <Image
            src="/images/profile.png"
            alt=""
            fill
            aria-hidden="true"
            className="pointer-events-none object-cover profile-crt-main mix-blend-screen opacity-0 profile-glitch-layer-magenta"
            priority
            sizes="(max-width: 768px) 100vw, 38vw"
          />
          <div className="absolute inset-0 bg-crt-glow/[0.22] mix-blend-color" />
          <div className="absolute inset-0 profile-rgb-mask opacity-55" />
          <div className="absolute inset-0 profile-pixel-grid opacity-65" />
          <div className="absolute inset-0 scanlines opacity-80" />
          <div className="absolute inset-0 profile-static-noise opacity-20" />
          <div className="absolute inset-0 profile-edge-vignette" />

          <div className="pointer-events-none absolute inset-0">
            <div className="font-display absolute top-11 left-7 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-crt-text-bright text-glow-sm">
              CAM 1
            </div>

            <div className="absolute top-11 right-7 flex items-center gap-2">
              <span className="font-display text-[10px] sm:text-xs tracking-[0.15em] uppercase text-crt-text-bright text-glow-sm">
                REC
              </span>
              <span className="inline-block h-3.5 w-3.5 rounded-full bg-crt-rec animate-rec-pulse shadow-[0_0_10px_rgba(255,90,90,0.95)]" />
            </div>

            <div className="absolute top-5 left-4 h-[2px] w-20 bg-crt-text-bright/88" />
            <div className="absolute top-5 right-4 h-[2px] w-20 bg-crt-text-bright/88" />
            <div className="absolute bottom-5 left-4 h-[2px] w-20 bg-crt-text-bright/82" />
            <div className="absolute bottom-5 right-4 h-[2px] w-20 bg-crt-text-bright/82" />

            <div className="absolute top-5 left-4 w-[2px] h-12 bg-crt-text-bright/88" />
            <div className="absolute top-5 right-4 w-[2px] h-12 bg-crt-text-bright/88" />
            <div className="absolute bottom-5 left-4 w-[2px] h-12 bg-crt-text-bright/82" />
            <div className="absolute bottom-5 right-4 w-[2px] h-12 bg-crt-text-bright/82" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
              <div className="relative h-7 w-7">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-crt-text-bright/70" />
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-crt-text-bright/70" />
              </div>
            </div>

            <div className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 bg-crt-email-bg/70 px-3 py-1 text-[10px] sm:text-xs tracking-[0.14em] text-crt-email-text border border-crt-border-bright/70">
              {utcTime}
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-crt-bg">
          <div className="text-crt-text-dim text-[10px] tracking-wider uppercase animate-glow-pulse">
            SIGNAL INTERCEPTED
          </div>
          <pre className="text-crt-border-bright text-[9px] leading-tight text-center font-mono select-none">
            {`  
  ┌─────────────────┐
  │                 │
  │   ▓▓▓▓▓▓▓▓▓▓▓   │
  │   ▓ PROFILE ▓   │
  │   ▓  IMAGE  ▓   │
  │   ▓▓▓▓▓▓▓▓▓▓▓   │
  │                 │
  │  [ AWAITING ]   │
  │  [  UPLINK  ]   │
  │                 │
  └─────────────────┘`}
          </pre>
          <div className="text-crt-text-dim text-[8px] tracking-widest">
            /public/images/profile.jpg
          </div>
        </div>
      )}
    </div>
  );
}
