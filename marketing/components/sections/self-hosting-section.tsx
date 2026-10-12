import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function SelfHostingSection() {
  return (
    <section aria-labelledby="self-hosting-title">
      <a className="self-hosting" href={site.github}>
        <div className="hosting-heading">
          <h2 id="self-hosting-title">
            Got a server?
            <br />
            <span>Give your team a home.</span>
          </h2>
          <span className="hosting-button">Self-host Natter</span>
        </div>
        <ArrowUpRight
          className="hosting-arrow"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
