# Natter marketing

The coming-soon page for **Natter** at **natter.talk**.
Built with Next.js and pnpm. The temporary branding uses a purple chat/play mark.

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
pnpm build
```
