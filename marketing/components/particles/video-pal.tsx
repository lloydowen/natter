export function VideoPal() {
  return (
    <svg className="hero-pal" viewBox="-6 -6 110 82">
      <defs>
        <linearGradient id="pal-face" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#363d55" />
          <stop offset=".45" stopColor="#1c2233" />
          <stop offset="1" stopColor="#10121c" />
        </linearGradient>
        <linearGradient id="pal-eyes" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#c4d5ff" />
          <stop offset="1" stopColor="#8aaaf5" />
        </linearGradient>
      </defs>
      <g className="pal-depth" fill="#080a12">
        <rect y="8" width="70" height="60" rx="18" />
        <path d="m78 26 10-9c3-2.7 8-.6 8 3.5v35c0 4.1-5 6.2-8 3.5l-10-9a6 6 0 0 1-2-4.5v-15a6 6 0 0 1 2-4.5Z" />
      </g>
      <g fill="url(#pal-face)" stroke="#56617d" strokeWidth=".5">
        <rect y="2" width="70" height="60" rx="18" />
        <path d="m78 20 10-9c3-2.7 8-.6 8 3.5v35c0 4.1-5 6.2-8 3.5l-10-9a6 6 0 0 1-2-4.5v-15a6 6 0 0 1 2-4.5Z" />
      </g>
      <g className="pal-gaze" fill="url(#pal-eyes)">
        <path
          className="pal-eye"
          d="M27 23a9 9 0 1 0 0 18 9 9 0 0 0 7.8-4.5H31a4.5 4.5 0 0 1 0-9h3.8A9 9 0 0 0 27 23Z"
        />
        <path
          className="pal-eye"
          d="M52 23a9 9 0 1 0 0 18 9 9 0 0 0 7.8-4.5H56a4.5 4.5 0 0 1 0-9h3.8A9 9 0 0 0 52 23Z"
        />
      </g>
      <path
        d="M18 5h32"
        stroke="#7181a4"
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}
