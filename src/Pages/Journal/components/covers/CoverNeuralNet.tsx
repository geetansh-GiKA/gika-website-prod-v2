import type { FC } from 'react'

// Hand-drawn illustration style: lightbulb with a layered reasoning diagram inside
export const CoverNeuralNet: FC = () => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="400" height="300" fill="#ebe8df" />

    <rect width="400" height="300" fill="url(#nn-bulb-glow)" />

    {/* ── Lightbulb glass ── */}
    <path
      d="
        M200,54
        C164,54 138,78 138,112
        C138,136 150,152 158,166
        C162,174 164,182 164,190
        L236,190
        C236,182 238,174 242,166
        C250,152 262,136 262,112
        C262,78 236,54 200,54
        Z
      "
      fill="#2c3d2c"
      stroke="rgba(255,255,255,0.55)"
      strokeWidth="2.8"
      strokeLinejoin="round"
    />

    {/* Inner light fill — bright patch top */}
    <path
      d="
        M200,64
        C172,64 152,84 152,112
        C152,130 160,145 167,158
        L233,158
        C240,145 248,130 248,112
        C248,84 228,64 200,64
        Z
      "
      fill="rgba(255,255,255,0.07)"
    />

    {/* Highlight glint */}
    <path
      d="M172,80 Q178,72 190,70"
      fill="none"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* ── Layered reasoning lines inside bulb ── */}
    {/* Layer 1 — input dots */}
    <g fill="rgba(255,255,255,0.5)" stroke="none">
      <circle cx="176" cy="108" r="4" />
      <circle cx="200" cy="100" r="4" />
      <circle cx="224" cy="108" r="4" />
    </g>

    {/* Connections layer 1 → 2 */}
    <g stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" fill="none">
      <line x1="176" y1="108" x2="186" y2="128" />
      <line x1="176" y1="108" x2="200" y2="128" />
      <line x1="176" y1="108" x2="214" y2="128" />
      <line x1="200" y1="100" x2="186" y2="128" />
      <line x1="200" y1="100" x2="200" y2="128" />
      <line x1="200" y1="100" x2="214" y2="128" />
      <line x1="224" y1="108" x2="186" y2="128" />
      <line x1="224" y1="108" x2="200" y2="128" />
      <line x1="224" y1="108" x2="214" y2="128" />
    </g>

    {/* Layer 2 — hidden nodes */}
    <g fill="rgba(255,255,255,0.6)" stroke="none">
      <circle cx="186" cy="128" r="4.5" />
      <circle cx="200" cy="128" r="4.5" />
      <circle cx="214" cy="128" r="4.5" />
    </g>

    {/* Connections layer 2 → 3 */}
    <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" fill="none">
      <line x1="186" y1="128" x2="192" y2="150" />
      <line x1="186" y1="128" x2="208" y2="150" />
      <line x1="200" y1="128" x2="192" y2="150" />
      <line x1="200" y1="128" x2="208" y2="150" />
      <line x1="214" y1="128" x2="192" y2="150" />
      <line x1="214" y1="128" x2="208" y2="150" />
    </g>

    {/* Layer 3 — output nodes (brighter) */}
    <g fill="rgba(255,255,255,0.9)" stroke="none">
      <circle cx="192" cy="150" r="5" />
      <circle cx="208" cy="150" r="5" />
    </g>

    {/* ── Bulb base / collar ── */}
    <rect
      x="170"
      y="190"
      width="60"
      height="12"
      rx="3"
      fill="#2c3d2c"
      stroke="rgba(255,255,255,0.45)"
      strokeWidth="2.2"
    />
    <rect
      x="174"
      y="202"
      width="52"
      height="10"
      rx="2"
      fill="#2c3d2c"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
    />
    <rect
      x="180"
      y="212"
      width="40"
      height="10"
      rx="2"
      fill="#2c3d2c"
      stroke="rgba(255,255,255,0.28)"
      strokeWidth="1.8"
    />
  </svg>
)
