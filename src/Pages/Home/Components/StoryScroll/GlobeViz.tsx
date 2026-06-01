import React from "react";

const W = 800;
const H = 500;
const cx = W / 2;
const cy = H / 2 + 30;

// Project a point on a given ellipse ring at an angle
function ellipsePoint(rx: number, ry: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + rx * Math.cos(rad),
    y: cy + ry * Math.sin(rad),
  };
}

const RINGS = [
  { rx: 340, ry: 170 },
  { rx: 240, ry: 120 },
  { rx: 130, ry: 65 },
];

const CONNECTORS = [
  {
    label: "Google Drive",
    ring: 0,
    angle: -38,
    sublabel: "Cloud Storage",
    logo: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png",
  },
  {
    label: "Dropbox",
    ring: 0,
    angle: 145,
    sublabel: "File Sync",
    logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg",
  },
  {
    label: "Notion",
    ring: 1,
    angle: 28,
    sublabel: "Workspace",
    logo: "https://www.notion.so/images/logo-ios.png",
  },
  {
    label: "Salesforce",
    ring: 1,
    angle: -155,
    sublabel: "CRM",
    logo: "https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg",
  },
  {
    label: "Slack",
    ring: 2,
    angle: 72,
    sublabel: "Messaging",
    logo: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
  },
  {
    label: "HubSpot",
    ring: 2,
    angle: -110,
    sublabel: "Marketing",
    logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
  },
  {
    label: "Amazon S3",
    ring: 0,
    angle: 210,
    sublabel: "Object Store",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg",
  },
];

const stroke = "#3a4f3a";
const strokeMuted = "rgba(58,79,58,0.3)";
const textColor = "#3a3a3a";
const mutedText = "#8f8f8f";

export const GlobeViz: React.FC = () => {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: "#edeae3" }}
    >
      {/* Diagonal hatch background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="globe-hatch"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="12"
              stroke="#c8c4b6"
              strokeWidth="0.7"
              strokeOpacity="0.45"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#globe-hatch)" />
      </svg>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crosshair lines */}
        <line
          x1={cx}
          y1={20}
          x2={cx}
          y2={H - 20}
          stroke={strokeMuted}
          strokeWidth="0.6"
        />
        <line
          x1={20}
          y1={cy}
          x2={W - 20}
          y2={cy}
          stroke={strokeMuted}
          strokeWidth="0.6"
        />

        {/* Concentric ellipse rings */}
        {RINGS.map(({ rx, ry }, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke={stroke}
            strokeWidth="0.7"
            strokeOpacity={0.25 + i * 0.07}
          />
        ))}

        {/* Connector points with label lines */}
        {CONNECTORS.map(({ label, ring, angle, sublabel, logo }) => {
          const { rx, ry } = RINGS[ring];
          const pt = ellipsePoint(rx, ry, angle);

          const rad = (angle * Math.PI) / 180;
          // Pull label inward toward center so it never overflows the outer ring
          const labelDist = 45;
          const lx = pt.x - labelDist * Math.cos(rad);
          const ly = pt.y - labelDist * Math.sin(rad);

          // Text anchor based on which side of center the label ends up
          const anchor = lx > cx ? "start" : "end";
          const textOffsetX = lx > cx ? 6 : -6;

          const clipId = `clip-${label.replace(/\s+/g, "-").toLowerCase()}`;

          return (
            <g key={label}>
              {/* Tick line from ring point inward */}
              <line
                x1={pt.x}
                y1={pt.y}
                x2={lx}
                y2={ly}
                stroke={stroke}
                strokeWidth="0.6"
                strokeOpacity="0.45"
              />

              {/* Logo node */}
              <defs>
                <clipPath id={clipId}>
                  <circle cx={pt.x} cy={pt.y} r={14} />
                </clipPath>
              </defs>
              {/* White bg circle */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={15}
                fill="#f3f1ea"
                stroke={stroke}
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
              {/* Logo image clipped to circle */}
              <image
                href={logo}
                x={pt.x - 10}
                y={pt.y - 10}
                width={20}
                height={20}
                clipPath={`url(#${clipId})`}
                preserveAspectRatio="xMidYMid meet"
              />

              {/* Label */}
              <text
                x={lx + textOffsetX}
                y={ly - 2}
                textAnchor={anchor}
                fontFamily="Space Mono, monospace"
                fontSize="9"
                fontWeight="400"
                fill={textColor}
                letterSpacing="0.05em"
              >
                {label}
              </text>
              <text
                x={lx + textOffsetX}
                y={ly + 10}
                textAnchor={anchor}
                fontFamily="Space Mono, monospace"
                fontSize="7"
                fill={mutedText}
                letterSpacing="0.04em"
              >
                {sublabel}
              </text>
            </g>
          );
        })}

        {/* Center hub dot */}
        <circle cx={cx} cy={cy} r={8} fill={stroke} opacity="0.15" />
        <circle cx={cx} cy={cy} r={4} fill={stroke} opacity="0.6" />
        <circle cx={cx} cy={cy} r={1.5} fill="#edeae3" />

        {/* Center label */}
        <text
          x={cx}
          y={cy - 14}
          textAnchor="middle"
          fontFamily="Space Mono, monospace"
          fontSize="8"
          fill={mutedText}
          letterSpacing="0.12em"
        >
          GIKAGRAPH
        </text>
      </svg>

      <div className="absolute bottom-6 right-6">
        <span className="inline-block px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] bg-paper/80 text-ink-2">
          FIG. 02 · CONNECTORS, MAPPED
        </span>
      </div>
    </div>
  );
};
