import Link from "next/link";
import RotatingName from "./rotating-name";

export default function Home() {
  return (
    <div className="holding-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Natter home">natter<span aria-hidden="true">*</span></Link>
        <span className="launch-status">Coming soon</span>
      </header>
      <main className="hero">
        <h1>Replace<RotatingName /><span className="closing-line">with natter.</span></h1>
        <p className="intro">Team chat, voice calls, and 4K 60fps screen sharing.</p>
        <p className="platforms">Native apps for Windows, macOS, Linux, iOS, and Android.</p>
        <p className="hosting">Host it yourself. Or we host it for <strong>£30/month per team.</strong></p>
      </main>
      <footer className="site-footer">
        <span>In development.</span>
        <a href="https://github.com/lloydowen/natter">Follow on GitHub</a>
      </footer>
    </div>
  );
}
