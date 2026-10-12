import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BenefitCardProps = {
  tone: "quality" | "native" | "cost";
  metric: ReactNode;
  title: string;
  description: ReactNode;
  children: ReactNode;
};

export function BenefitCard({
  tone,
  metric,
  title,
  description,
  children,
}: BenefitCardProps) {
  return (
    <article className={cn("benefit", `benefit-${tone}`)}>
      <p className="benefit-number">{metric}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  );
}
