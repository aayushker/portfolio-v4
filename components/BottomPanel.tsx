import { siteConfig } from "@/lib/config";

export function BottomPanel() {
  return (
    <div className="border-t border-crt-border px-4 py-4">
      <p className="text-xs sm:text-sm leading-relaxed text-crt-text-muted tracking-wide">
        {siteConfig.bio}
      </p>
    </div>
  );
}
