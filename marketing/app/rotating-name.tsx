const names = ["Discord", "Slack", "Teams", "Mattermost"];

export default function RotatingName() {
  return (
    <span className="rotating-heading">
      <span className="sr-only">Discord, Slack, Teams, or Mattermost.</span>
      <span className="rotating-name" aria-hidden="true">
        {names.map((name, index) => <span key={name} style={{ animationDelay: `${index === 0 ? 0 : index * 4 - 16}s` }}>{name}<span className="hero-period">.</span></span>)}
      </span>
    </span>
  );
}
