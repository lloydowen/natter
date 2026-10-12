import Link from "next/link";
import RotatingName from "./rotating-name";

export default function Home() {
  return (
    <div className="holding-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Natter home"><svg className="brand-mark" viewBox="0 0 96 64" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 2h34a18 18 0 0 1 18 18v24a18 18 0 0 1-18 18H18A18 18 0 0 1 0 44V20A18 18 0 0 1 18 2Zm9 21a9 9 0 1 0 0 18 9 9 0 0 0 7.8-4.5H31a4.5 4.5 0 0 1 0-9h3.8A9 9 0 0 0 27 23Zm25 0a9 9 0 1 0 0 18 9 9 0 0 0 7.8-4.5H56a4.5 4.5 0 0 1 0-9h3.8A9 9 0 0 0 52 23Z"/>
<path d="m78 20 10-9c3-2.7 8-.6 8 3.5v35c0 4.1-5 6.2-8 3.5l-10-9a6 6 0 0 1-2-4.5v-15a6 6 0 0 1 2-4.5Z"/></svg>natter</Link>
        <a className="icon-link" href="https://github.com/lloydowen/natter" aria-label="Natter on GitHub" title="Natter on GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"/></svg>
        </a>
      </header>
      <main className="hero">
        <h1>Replace<RotatingName /><span className="closing-line">with natter.</span></h1>
        <p className="intro">Team chat, video calls, and 4K 60fps screen sharing.</p>
        <p className="platforms">Native apps for Windows, macOS, Linux, iOS, and Android.</p>
        <section className="self-hosting" aria-labelledby="self-hosting-title">
          <h2 id="self-hosting-title">Your team. Your server.</h2>
          <p>Self-host Natter on your own infrastructure.</p>
          <a className="self-host-link" href="https://github.com/lloydowen/natter">Explore self-hosting <span aria-hidden="true">↗</span></a>
          <p className="managed-hosting">Prefer us to host it? £30/month per team.</p>
        </section>
      </main>
      <footer className="site-footer">
        <a href="https://livekit.io">Runs on LiveKit <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}
