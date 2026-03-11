"use client";

import { useState } from "react";
import Image from "next/image";

export function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-crt-bg">
      {!hasError ? (
        <>
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            className="object-cover grayscale brightness-[0.65] contrast-[1.3]"
            onError={() => setHasError(true)}
            priority
            sizes="(max-width: 768px) 100vw, 38vw"
          />
          {/* Cyan CRT tint overlay */}
          <div className="absolute inset-0 bg-crt-glow/[0.15] mix-blend-color" />
          {/* Scanlines on image */}
          <div className="absolute inset-0 scanlines opacity-50" />
          {/* Corner markers */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-crt-border-bright opacity-60" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-crt-border-bright opacity-60" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-crt-border-bright opacity-60" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-crt-border-bright opacity-60" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-crt-bg">
          <div className="text-crt-text-dim text-[10px] tracking-wider uppercase animate-glow-pulse">
            SIGNAL INTERCEPTED
          </div>
          <pre className="text-crt-border-bright text-[9px] leading-tight text-center font-mono select-none">
            {`  ┌─────────────────┐
  │                 │
  │   ▓▓▓▓▓▓▓▓▓▓   │
  │   ▓ PROFILE ▓   │
  │   ▓  IMAGE  ▓   │
  │   ▓▓▓▓▓▓▓▓▓▓   │
  │                 │
  │  [ AWAITING ]   │
  │  [ UPLINK  ]    │
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
