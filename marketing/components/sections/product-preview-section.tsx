import "@/components/marketing/product-preview.css";
import { AppPreview } from "@/components/molecules/app-preview";

export function ProductPreviewSection() {
  return (
    <figure className="product-preview">
      <AppPreview />
      <figcaption>
        <span>Chat, calls, and screen sharing. One team space.</span>
      </figcaption>
    </figure>
  );
}
