export function CRTOverlay() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-20 scanlines"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 noise"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 vignette"
        aria-hidden="true"
      />
    </>
  );
}
