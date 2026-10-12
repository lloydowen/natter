import { cn } from "@/lib/utils";

export function CallCharacter({
  variant = "one",
}: {
  variant?: "one" | "two" | "three";
}) {
  return (
    <svg
      className={cn("call-character", `character-${variant}`)}
      viewBox="0 0 160 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="character-shirt"
        d="M26 120c0-25 21-39 54-39s54 14 54 39"
      />
      <rect
        className="character-neck"
        x="68"
        y="65"
        width="24"
        height="31"
        rx="10"
      />
      <rect
        className="character-face"
        x="48"
        y="20"
        width="64"
        height="61"
        rx="28"
      />
      <path
        className="character-hair"
        d={
          variant === "two"
            ? "M43 57V35C43 10 60 4 81 4s37 12 37 37v24h-10V38c-16 4-30-4-35-12-4 11-12 16-24 18v13Z"
            : variant === "three"
              ? "M48 43C37 16 58 4 81 8c24-8 40 14 29 39l-7-20c-16 9-30 4-41-2l-8 20Z"
              : "M47 47V31C47 9 61 3 79 3c25 0 38 10 35 36l-9-9c-21 10-31-8-44-1l-7 19Z"
        }
      />
      <g
        className="character-eyes"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M65 51v3m29-3v3" />
      </g>
      <path
        d="m79 55-3 9h6m-9 7c5 4 11 4 16-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {variant === "two" && (
        <g stroke="currentColor" strokeWidth="2">
          <rect x="57" y="44" width="17" height="14" rx="5" />
          <rect x="87" y="44" width="17" height="14" rx="5" />
          <path d="M74 49h13" />
        </g>
      )}
    </svg>
  );
}
