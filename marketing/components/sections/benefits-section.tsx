import { BenefitCard } from "@/components/molecules/benefit-card";
import { SignalBars } from "@/components/particles/signal-bars";
import { DeviceFamily } from "@/components/particles/device-family";
import { site } from "@/lib/site";

export function BenefitsSection() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="benefits-heading">
        <h2 id="benefits-title">Better calls. Smaller bills.</h2>
      </div>
      <div className="benefits-grid">
        <BenefitCard
          tone="quality"
          metric={
            <>
              4K<span className="fps-stamp">60 fps</span>
            </>
          }
          title="Screen sharing that keeps up."
          description={
            <>Sharp text. Smooth motion. Video powered by LiveKit.</>
          }
        >
          <SignalBars />
        </BenefitCard>
        <BenefitCard
          tone="native"
          metric={
            <>
              Native<span className="native-period">.</span>
            </>
          }
          title="Native apps. No Electron."
          description={<>{site.platforms.join(", ")}. Performance first.</>}
        >
          <DeviceFamily />
        </BenefitCard>
        <BenefitCard
          tone="cost"
          metric={
            <>
              {site.hostingPrice}
              <span className="price-unit">/month</span>
            </>
          }
          title="Per team. Not per person."
          description={<>Can’t be bothered to self-host? We’ll do it.</>}
        >
          <span className="team-stamp" aria-hidden="true">
            THE WHOLE TEAM ↗
          </span>
        </BenefitCard>
      </div>
    </section>
  );
}
