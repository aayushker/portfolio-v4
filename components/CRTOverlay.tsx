export function CRTOverlay() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[100] scanlines"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[100] noise"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[100] vignette"
        aria-hidden="true"
      />
    </>
  );
}
