import {
  ChevronDown,
  Hash,
  Headphones,
  LockKeyhole,
  MessageCircle,
  Mic,
  MonitorUp,
  MoreHorizontal,
  Phone,
  Plus,
  Send,
  Settings,
  Video,
  Volume2,
} from "lucide-react";
import { BrandMark } from "@/components/particles/brand-mark";
import { CallCharacter } from "@/components/particles/call-character";

const people = [
  { name: "Alex", variant: "one" },
  { name: "Jo", variant: "two" },
  { name: "You", variant: "three" },
] as const;

export function AppPreview() {
  return (
    <div className="app-preview" aria-hidden="true">
      <div className="preview-titlebar">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <span>
          <BrandMark /> natter
        </span>
        <LockKeyhole size={12} />
      </div>
      <div className="preview-body">
        <div className="preview-sidebar">
          <div className="preview-workspace">
            <span className="workspace-icon">g.</span>
            <strong>Good company</strong>
            <ChevronDown size={13} />
          </div>
          <div className="preview-nav-item">
            <MessageCircle size={14} /> Messages <span>2</span>
          </div>
          <div className="preview-nav-heading">
            Team spaces <Plus size={12} />
          </div>
          <div className="preview-nav-item">
            <Hash size={14} /> general
          </div>
          <div className="preview-nav-item">
            <Hash size={14} /> design
          </div>
          <div className="preview-nav-item">
            <Hash size={14} /> little-wins
          </div>
          <div className="preview-nav-heading">
            Get together <Plus size={12} />
          </div>
          <div className="preview-nav-item is-selected">
            <Volume2 size={14} /> The studio
          </div>
          <div className="preview-people">
            <span className="mini-person person-one">A</span>
            <span className="mini-person person-two">J</span>
            <span className="mini-person person-three">Y</span>
            <span>3 hanging out</span>
          </div>
          <div className="preview-connection">
            <span className="connection-dot" />
            <span>Connected to your server</span>
          </div>
          <div className="preview-profile">
            <span className="mini-person person-three">Y</span>
            <span>
              You <small>Ready to natter</small>
            </span>
            <Headphones size={14} />
            <Settings size={14} />
          </div>
        </div>
        <div className="preview-call">
          <div className="preview-room-heading">
            <span>
              <Volume2 size={16} />
              <strong>The studio</strong>
            </span>
            <span className="preview-live">
              <span /> Live
            </span>
          </div>
          <div className="preview-video-grid">
            {people.map(({ name, variant }) => (
              <div key={name} className={`preview-video video-${variant}`}>
                <CallCharacter variant={variant} />
                <span className="participant-name">
                  {name}
                  <Mic size={10} />
                </span>
              </div>
            ))}
          </div>
          <div className="preview-screen">
            <div className="screen-toolbar">
              <span>
                <MonitorUp size={12} /> Jo’s screen
              </span>
              <span>
                4K <span className="screen-fps">60 fps</span>
              </span>
            </div>
            <div className="shared-canvas">
              <span className="canvas-project">
                Brand refresh <MoreHorizontal size={14} />
              </span>
              <div className="canvas-composition">
                <div>
                  <p>
                    Make room
                    <br />
                    for good ideas.
                  </p>
                  <span>Made together.</span>
                </div>
                <div className="canvas-mark">
                  <BrandMark />
                </div>
              </div>
              <div className="canvas-swatches">
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="collaborator-cursor">
                <svg viewBox="0 0 20 24" fill="currentColor">
                  <path d="M2 1v19l5-5 5 8 4-2-5-8h8Z" />
                </svg>
                <span>Jo</span>
              </span>
            </div>
          </div>
          <div className="preview-call-controls">
            <span>
              <Mic size={16} />
            </span>
            <span>
              <Video size={17} />
            </span>
            <span className="is-sharing">
              <MonitorUp size={16} />
            </span>
            <span className="hang-up">
              <Phone size={16} />
            </span>
          </div>
        </div>
        <div className="preview-chat">
          <div className="preview-chat-heading">
            <strong>Room chat</strong>
            <MessageCircle size={14} />
          </div>
          <span className="preview-chat-date">Today</span>
          <div className="preview-message">
            <span className="mini-person person-two">J</span>
            <div>
              <strong>
                Jo <small>10:42</small>
              </strong>
              <p>Okay, new direction. Thoughts?</p>
            </div>
          </div>
          <div className="preview-message">
            <span className="mini-person person-one">A</span>
            <div>
              <strong>
                Alex <small>10:43</small>
              </strong>
              <p>That’s the one. Big fan of the little guy.</p>
              <span className="preview-reaction">✦ 2</span>
            </div>
          </div>
          <div className="preview-message">
            <span className="mini-person person-three">Y</span>
            <div>
              <strong>
                You <small>10:43</small>
              </strong>
              <p>Looks even better in 4K.</p>
            </div>
          </div>
          <div className="preview-composer">
            <span>Send a little natter...</span>
            <Send size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}
