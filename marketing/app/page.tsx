import Link from "next/link";

export default function Home() {
  return (
    <div className="holding-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="SFW home">
          <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M10 5h28a5 5 0 0 1 5 5v23a5 5 0 0 1-5 5H22L9 45V38a5 5 0 0 1-4-5V10a5 5 0 0 1 5-5Z" fill="currentColor" />
            <path d="m20 15 13 8-13 8V15Z" fill="#faf9f6" />
          </svg>
          <span>sfw<span className="wordmark-dot">.</span></span>
        </Link>
        <span className="header-note">Safe for work. Room for fun.</span>
      </header>

      <main className="hero">
        <div className="status"><span className="status-dot" /> In the making</div>
        <h1>Good work.<br /><span>Great company.</span></h1>
        <p className="intro">
          A new home for your team. Chat, channels, and crystal-clear live streaming.
          Open source. A little more human.
        </p>
        <div className="coming-soon">Coming soon<span aria-hidden="true">↗</span></div>
        <p className="domain">sfw.team</p>
      </main>

      <footer className="site-footer">
        <span>SFW — Safe For Work</span>
        <span>Made for teams with a little personality.</span>
      </footer>
    </div>
  );
}
