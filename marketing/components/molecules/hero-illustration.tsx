"use client";

import { useRef, type PointerEvent } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { VideoPal } from "@/components/particles/video-pal";
import { LiveIndicator } from "@/components/molecules/live-indicator";

export default function HeroIllustration() {
  const art = useRef<HTMLDivElement>(null);

  function lookAtPointer(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(
      -1,
      Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
    );
    const y = Math.max(
      -1,
      Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
    );
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 9}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 12}deg`);
    event.currentTarget.style.setProperty("--gaze", `${x * 2}px`);
    event.currentTarget.style.setProperty("--light-x", `${50 + x * 25}%`);
    event.currentTarget.style.setProperty("--light-y", `${35 + y * 20}%`);
  }

  function reset() {
    for (const name of [
      "--tilt-x",
      "--tilt-y",
      "--gaze",
      "--light-x",
      "--light-y",
    ]) {
      art.current?.style.removeProperty(name);
    }
  }

  return (
    <div
      ref={art}
      className="hero-art"
      onPointerMove={lookAtPointer}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <span className="art-label">HEY, YOU.</span>
      <div className="video-frame">
        <LiveIndicator />
        <VideoPal />
        <span className="frame-caption">
          <LockKeyhole size={16} />
          Privacy-focused team spaces
        </span>
      </div>
      <span className="quality-sticker">
        4K <span>60 fps</span>
        <ArrowUpRight size={26} />
      </span>
    </div>
  );
}
