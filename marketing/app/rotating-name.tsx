"use client";

import { useState } from "react";

const names = ["Discord", "Slack", "Teams", "Mattermost"];

export default function RotatingName() {
  const [paused, setPaused] = useState(false);

  return (
    <span className="rotating-heading">
      <span className="sr-only">Discord, Slack, Teams, or Mattermost.</span>
      <span className={`rotating-name${paused ? " is-paused" : ""}`} aria-hidden="true">
        {names.map((name, index) => <span key={name} style={{ animationDelay: `${index * 4}s` }}>{name}<span className="hero-period">.</span></span>)}
      </span>
      <button className="rotation-toggle" type="button" aria-label={paused ? "Resume headline animation" : "Pause headline animation"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play" : "Pause"}<span aria-hidden="true">{paused ? " ▷" : " Ⅱ"}</span></button>
    </span>
  );
}
