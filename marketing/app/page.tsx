import Link from "next/link";
import RotatingName from "./rotating-name";

export default function Home() {
  return (
    <div className="holding-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Natter home">
          <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <rect width="40" height="40" rx="10" fill="currentColor" />
            <path d="M11 29V12h6v3c2-4 12-5 12 4v10h-6V19c0-4-6-3-6 1v9h-6Z" fill="#151714" />
          </svg>
          <span>natter</span>
        </Link>
        <span className="launch-status"><span /> Coming soon</span>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Your team. Your space.</p>
          <h1 id="hero-title">Replace<RotatingName /></h1>
          <p className="intro">Get everyone together. Chat, talk, and share your screen.<br className="desktop-break" /> All in one place. On your terms.</p>
          <a className="hero-link" href="#hosting">Make yourself at home <span aria-hidden="true">↘</span></a>
          <div className="hero-caption"><span className="caption-line" /> Less friction. More natter.</div>
        </section>

        <section className="features" aria-label="What’s coming">
          <div className="feature"><span className="feature-number">01 / SCREEN SHARING</span><h2>Every pixel.<br />Every frame.</h2><p>4K at 60fps. Share the details,<br />without the slideshow.</p><span className="feature-spec">4K <span>/</span> 60fps</span></div>
          <div className="feature"><span className="feature-number">02 / NATIVE APPS</span><h2>At home on<br />your device.</h2><p>Proper native apps.<br />Wherever your team works.</p><span className="platforms">Windows · macOS · Linux<br />iOS · Android</span></div>
          <div className="feature" id="hosting"><span className="feature-number">03 / YOUR CALL</span><h2>Your server.<br />Or ours.</h2><p>Host Natter yourself.<br />Or let us handle the hosting.</p><span className="feature-spec">£30<span> / month per team</span></span></div>
        </section>
        <div className="launch-note"><span>We’re building Natter. Everything above is coming soon.</span><a href="https://github.com/lloydowen/natter">Follow the build <span aria-hidden="true">↗</span></a></div>
      </main>
      <footer className="site-footer"><span>natter.talk</span><span>A place for your people.</span></footer>
    </div>
  );
}
