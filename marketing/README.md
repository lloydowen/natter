# Natter marketing

The marketing site for **Natter** at **natter.talk**. Self-hosted team chat,
video calls, 4K 60 fps screen sharing, and performance-first native apps without Electron.

## Structure

- `app/`: route composition, metadata, and the global theme.
- `components/ui/`: shadcn-style Button and Badge primitives with variants and `cn`.
- `components/particles/`: small visual pieces, brand marks, and illustration artwork.
- `components/molecules/`: composed pieces such as Brand, BenefitCard, and the interactive hero.
- `components/sections/`: page sections and header.
- `components/marketing/marketing.css`: styles scoped to `.marketing-site`, including responsive layouts and illustration effects.
- `lib/site.ts`: shared URLs, platforms, managed-hosting price, and metadata copy.

The manual shadcn-compatible setup uses Tailwind CSS v4, Radix Slot, CVA,
and the standard `components.json` aliases. Use `pnpm dlx shadcn@latest add <component>`
to add further primitives. Colours follow [shadcn's semantic tokens](https://ui.shadcn.com/docs/theming)
(`primary`, `secondary`, `muted-foreground`, `border`, `ring`, and so on).
Natter's periwinkle and lime palette lives in `app/globals.css`; specialist
illustration shading stays in the marketing styles and artwork.

Most components render on the server. Only the pointer-responsive hero illustration
uses a client boundary. Motion respects reduced-motion preferences.

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

## Production / Taxiway

Set the build context to `marketing/`, the Dockerfile to `Dockerfile` within
that context, and the service port to **3000**. Attach `natter.talk` as the domain
in Taxiway and configure HTTPS there.

From the repository root:

```sh
docker build -t natter-marketing ./marketing
docker run --rm -p 3000:3000 natter-marketing
```

The multi-stage image runs Next.js standalone output as a non-root user.
It listens on `0.0.0.0:3000`; `PORT` can be overridden at runtime.
No environment variables or external font downloads are required for the page.

## Checks

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm format:check
pnpm build
```

Run `pnpm format` to format source and documentation.
