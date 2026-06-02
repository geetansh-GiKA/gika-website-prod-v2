import type { FC } from 'react'

export const CoverKnowledgeGraph: FC = () => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="400" height="300" fill="#ebe8df" />

    {/* Centered group — brain was drawn at x=162, true center is x=200, shift +38 */}
    <g transform="translate(38, 0)">
      {/* Light glow patch behind brain */}
      <ellipse cx="160" cy="148" rx="72" ry="62" fill="#f3f1ea" opacity="0.85" />

      {/* ── Brain shape (hand-drawn feel via path) ── */}
      <path
        d="
          M160,90
          C148,88 136,92 130,102
          C122,100 112,106 112,118
          C104,120 100,130 106,140
          C100,148 102,162 112,166
          C114,178 124,184 136,180
          C140,188 152,192 162,186
          C172,192 184,188 188,180
          C200,184 210,178 212,166
          C222,162 224,148 218,140
          C224,130 220,120 212,118
          C212,106 202,100 194,102
          C188,92 176,88 164,90
          Z
        "
        fill="#d9d5c7"
        stroke="#141414"
        strokeWidth="2.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Brain center crease */}
      <path
        d="M162,92 C162,120 162,150 162,184"
        fill="none"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Brain fold lines — left */}
      <path
        d="M130,118 C136,124 132,134 138,140"
        fill="none"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M118,136 C126,138 124,150 130,154"
        fill="none"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Brain fold lines — right */}
      <path
        d="M194,118 C188,124 192,134 186,140"
        fill="none"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M206,136 C198,138 200,150 194,154"
        fill="none"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* ── Network nodes radiating out ── */}
      {/* Top */}
      <line
        x1="162"
        y1="92"
        x2="162"
        y2="52"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="162" cy="44" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Top-right */}
      <line
        x1="210"
        y1="108"
        x2="248"
        y2="76"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="255" cy="70" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Right */}
      <line
        x1="220"
        y1="148"
        x2="268"
        y2="148"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="276" cy="148" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Bottom-right */}
      <line
        x1="210"
        y1="174"
        x2="244"
        y2="210"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="250" cy="218" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Bottom */}
      <line
        x1="162"
        y1="186"
        x2="162"
        y2="228"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="162" cy="236" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Bottom-left */}
      <line
        x1="114"
        y1="174"
        x2="80"
        y2="210"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="74" cy="218" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Left */}
      <line
        x1="104"
        y1="148"
        x2="56"
        y2="148"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="48" cy="148" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Top-left */}
      <line
        x1="114"
        y1="108"
        x2="76"
        y2="76"
        stroke="#141414"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="69" cy="70" r="8" fill="#f3f1ea" stroke="#141414" strokeWidth="2.2" />

      {/* Second-ring connections (lighter) */}
      <line
        x1="162"
        y1="44"
        x2="255"
        y2="70"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="255"
        y1="70"
        x2="276"
        y2="148"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="276"
        y1="148"
        x2="250"
        y2="218"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="250"
        y1="218"
        x2="162"
        y2="236"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="162"
        y1="236"
        x2="74"
        y2="218"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="74"
        y1="218"
        x2="48"
        y2="148"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="48"
        y1="148"
        x2="69"
        y2="70"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <line
        x1="69"
        y1="70"
        x2="162"
        y2="44"
        stroke="#141414"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Small inner dots on nodes */}
      <g fill="#3a4f3a">
        <circle cx="162" cy="44" r="3" />
        <circle cx="255" cy="70" r="3" />
        <circle cx="276" cy="148" r="3" />
        <circle cx="250" cy="218" r="3" />
        <circle cx="162" cy="236" r="3" />
        <circle cx="74" cy="218" r="3" />
        <circle cx="48" cy="148" r="3" />
        <circle cx="69" cy="70" r="3" />
      </g>
    </g>
  </svg>
)
