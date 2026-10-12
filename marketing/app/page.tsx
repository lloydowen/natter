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
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A little less corporate. A lot more connected.</p>
            <h1 id="hero-title">Big ideas.<br />Good company.<br /><span>More natter.</span></h1>
            <p className="intro">Bring your team together with video calls, chat, and ridiculously crisp screen sharing.</p>
            <a className="primary-link" href="https://github.com/lloydowen/natter">Make it yours <span aria-hidden="true">↗</span></a>
            <p className="cta-note">Self-host it. Run it your way.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span className="art-label">HEY, YOU.</span>
            <div className="video-frame">
              <span className="call-label"><span /> The team’s all here</span>
              <svg className="hero-pal" viewBox="0 0 96 64" fill="currentColor">
                <path fillRule="evenodd" d="M18 2h34a18 18 0 0 1 18 18v24a18 18 0 0 1-18 18H18A18 18 0 0 1 0 44V20A18 18 0 0 1 18 2Zm9 21a9 9 0 1 0 0 18 9 9 0 0 0 7.8-4.5H31a4.5 4.5 0 0 1 0-9h3.8A9 9 0 0 0 27 23Zm25 0a9 9 0 1 0 0 18 9 9 0 0 0 7.8-4.5H56a4.5 4.5 0 0 1 0-9h3.8A9 9 0 0 0 52 23Z" />
                <path d="m78 20 10-9c3-2.7 8-.6 8 3.5v35c0 4.1-5 6.2-8 3.5l-10-9a6 6 0 0 1-2-4.5v-15a6 6 0 0 1 2-4.5Z" />
              </svg>
              <span className="frame-caption">Small talk. Big energy.</span>
            </div>
            <span className="quality-sticker">4K <span>60 fps</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 17 10-10M7 7h10v10" /></svg></span>
          </div>
        </section>
        <div className="feature-strip" aria-label="Features">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="2" y="5" width="13" height="14" rx="4"/><path d="m15 9 7-4v14l-7-4"/></svg>Face-to-face, from anywhere</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="3"/><path d="M8 21h8m-4-4v4"/></svg>Screen sharing in 4K · 60 fps</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M21 11a9 9 0 0 1-9 9H3l1.5-4A9 9 0 1 1 21 11Z"/><path d="M8 11h8"/></svg>Keep the conversation going</span>
        </div>
        <section className="self-hosting" aria-labelledby="self-hosting-title">
          <div>
            <p className="eyebrow">SELF-HOSTED. SELF-DETERMINED.</p>
            <h2 id="self-hosting-title">Your team.<br /><span>Your turf.</span></h2>
          </div>
          <div className="hosting-copy">
            <p>Give your conversations a home on your own infrastructure. Natter runs on LiveKit, with native apps for Windows, macOS, Linux, iOS, and Android.</p>
            <a className="self-host-link" href="https://github.com/lloydowen/natter">Explore self-hosting <span aria-hidden="true">↗</span></a>
            <p className="managed-hosting">Or let us host it. <strong>£30/month per team.</strong></p>
          </div>
        </section>
        <p className="replacement">Less time in <RotatingName />. More time together.</p>
      </main>
      <footer className="site-footer">
        <a href="https://livekit.io">Runs on LiveKit <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}
