import "@/components/marketing/product-preview.css";
import { AppPreview } from "@/components/molecules/app-preview";

export function ProductPreviewSection() {
  return (
    <figure
      className="product-preview"
      aria-label="Natter interface preview with video, screen sharing, and room chat"
    >
      <AppPreview />
    </figure>
  );
}
