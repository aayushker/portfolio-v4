import { siteConfig } from "@/lib/config";

export function BottomPanel() {
  return (
    <div className="relative z-30 border-t border-crt-border px-3.5 sm:px-4 py-3 sm:py-3.5 bg-[linear-gradient(to_bottom,rgba(10,14,18,0.55),rgba(7,11,15,0.95))]">
      <p className="text-[11px] sm:text-[13px] leading-[1.65] text-crt-text tracking-[0.06em]">
        {siteConfig.bio}
      </p>
    </div>
  );
}
