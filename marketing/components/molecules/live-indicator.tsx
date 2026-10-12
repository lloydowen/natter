import { Badge } from "@/components/ui/badge";

export function LiveIndicator() {
  return (
    <Badge className="call-label">
      <span className="live-dot" aria-hidden="true" />
      Live
    </Badge>
  );
}
