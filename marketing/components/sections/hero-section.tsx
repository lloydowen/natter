import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import HeroIllustration from "@/components/molecules/hero-illustration";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Your team.
          <br />
          Your servers.
          <br />
          <span>Your rules.</span>
        </h1>
        <p className="intro">
          Team chat, video calls, and 4K screen sharing. Self-hosted, with your
          data on your infrastructure.
        </p>
        <Button asChild size="lg">
          <a className="primary-link" href={site.github}>
            Explore self-hosting{" "}
            <ArrowUpRight className="link-arrow" size={18} aria-hidden="true" />
          </a>
        </Button>
      </div>
      <HeroIllustration />
    </section>
  );
}
