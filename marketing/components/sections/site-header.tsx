import { GitHubIcon } from "@/components/particles/github-icon";
import { Brand } from "@/components/molecules/brand";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <Button asChild variant="outline" size="icon" className="icon-link">
        <a
          href={site.github}
          aria-label="Natter on GitHub"
          title="Natter on GitHub"
        >
          <GitHubIcon />
        </a>
      </Button>
    </header>
  );
}
