import type { FC } from 'react'

// Hand-drawn illustration style: AI copilot / pilot at a control panel
export const CoverStructuredGrid: FC = () => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="400" height="300" fill="#ebe8df" />

    {/* ── Desk surface ── */}
    <path
      d="M60,230 Q200,218 340,230 L340,248 Q200,238 60,248 Z"
      fill="#b8c4b4"
      stroke="#141414"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    {/* ── Monitor stand ── */}
    <rect
      x="185"
      y="198"
      width="30"
      height="32"
      rx="3"
      fill="#c4cdc0"
      stroke="#141414"
      strokeWidth="2.5"
    />
    <path
      d="M168,228 Q200,224 232,228"
      fill="none"
      stroke="#141414"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* ── Monitor body ── */}
    <rect
      x="100"
      y="88"
      width="200"
      height="114"
      rx="8"
      fill="#e8ede6"
      stroke="#141414"
      strokeWidth="3"
    />
    {/* screen bezel inset */}
    <rect
      x="112"
      y="98"
      width="176"
      height="94"
      rx="4"
      fill="#d9e0d6"
      stroke="#141414"
      strokeWidth="1.8"
    />

    {/* Screen glow — light wash */}
    <rect x="114" y="100" width="90" height="90" rx="3" fill="#f3f1ea" opacity="0.6" />

    {/* ── Screen content: graph bars ── */}
    <g fill="#3a4f3a" opacity="0.75">
      <rect x="122" y="158" width="14" height="24" rx="2" />
      <rect x="142" y="146" width="14" height="36" rx="2" />
      <rect x="162" y="134" width="14" height="48" rx="2" />
      <rect x="182" y="140" width="14" height="42" rx="2" />
    </g>
    {/* baseline */}
    <line x1="118" y1="182" x2="200" y2="182" stroke="#3a4f3a" strokeWidth="1.5" opacity="0.5" />

    {/* ── Screen content: right side text lines ── */}
    <g stroke="#3a4f3a" strokeWidth="2" strokeLinecap="round" opacity="0.5">
      <line x1="210" y1="112" x2="278" y2="112" />
      <line x1="210" y1="122" x2="268" y2="122" />
      <line x1="210" y1="132" x2="274" y2="132" />
      <line x1="210" y1="148" x2="270" y2="148" />
      <line x1="210" y1="158" x2="264" y2="158" />
      <line x1="210" y1="168" x2="272" y2="168" />
    </g>

    {/* ── Keyboard ── */}
    <rect
      x="140"
      y="234"
      width="120"
      height="22"
      rx="4"
      fill="#c4cdc0"
      stroke="#141414"
      strokeWidth="2.5"
    />
    {/* key rows */}
    <g stroke="#141414" strokeWidth="1.2" opacity="0.4">
      <line x1="152" y1="240" x2="248" y2="240" />
      <line x1="148" y1="248" x2="252" y2="248" />
    </g>
    {/* individual key hints */}
    <g fill="#141414" opacity="0.15">
      {[154, 166, 178, 190, 202, 214, 226, 238].map((x) => (
        <rect key={x} x={x} y="241" width="9" height="6" rx="1" />
      ))}
    </g>

    {/* ── Cursor / pointer on screen ── */}
    <path
      d="M196,154 L196,170 L200,166 L203,174 L206,173 L203,165 L208,165 Z"
      fill="#141414"
      opacity="0.7"
    />

    {/* ── Small plant on desk (deco) ── */}
    <rect
      x="302"
      y="210"
      width="14"
      height="20"
      rx="2"
      fill="#b8c4b4"
      stroke="#141414"
      strokeWidth="2"
    />
    <ellipse cx="309" cy="208" rx="12" ry="10" fill="#8fa88a" stroke="#141414" strokeWidth="2.2" />
    <ellipse cx="302" cy="204" rx="8" ry="7" fill="#8fa88a" stroke="#141414" strokeWidth="2" />
    <ellipse cx="317" cy="205" rx="8" ry="7" fill="#8fa88a" stroke="#141414" strokeWidth="2" />

    {/* ── Coffee mug on desk ── */}
    <rect
      x="68"
      y="216"
      width="22"
      height="18"
      rx="3"
      fill="#e8ede6"
      stroke="#141414"
      strokeWidth="2.2"
    />
    <path
      d="M90,221 Q98,221 98,228 Q98,235 90,235"
      fill="none"
      stroke="#141414"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* steam */}
    <path
      d="M74,213 Q76,208 74,203"
      fill="none"
      stroke="#141414"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M82,212 Q84,207 82,202"
      fill="none"
      stroke="#141414"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
)
