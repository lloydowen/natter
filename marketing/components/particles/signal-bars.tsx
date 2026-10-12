export function SignalBars() {
  return (
    <div className="signal-bars" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}
