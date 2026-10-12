import Link from "next/link";
import { BrandMark } from "@/components/particles/brand-mark";

export function Brand() {
  return (
    <Link className="wordmark" href="/" aria-label="Natter home">
      <BrandMark />
      natter
    </Link>
  );
}
