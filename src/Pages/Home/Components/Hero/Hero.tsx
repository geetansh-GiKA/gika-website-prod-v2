import React from "react";
import { TrendingUp } from "lucide-react";

// ── Gradient bars background ──────────────────────────────────────────────────

export const GradientBars: React.FC = () => {
  const numBars = 15;

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return 30 + 70 * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        {Array.from({ length: numBars }).map((_, index) => (
          <div
            key={index}
            style={{
              flex: "1 0 calc(100% / 15)",
              maxWidth: "calc(100% / 15)",
              height: "100%",
              background: "linear-gradient(to top, #3a4f3a, transparent)",
              transform: `scaleY(${calculateHeight(index, numBars) / 100})`,
              transformOrigin: "bottom",
              boxSizing: "border-box",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ── Analytics dashboard ───────────────────────────────────────────────────────

const Dashboard: React.FC = () => {
  // Fewer groups on mobile — use 6 data points for small screens via slice
  const chartData = [
    { a: 38, b: 52 },
    { a: 71, b: 88 },
    { a: 44, b: 33 },
    { a: 68, b: 75 },
    { a: 55, b: 68 },
    { a: 82, b: 60 },
    { a: 76, b: 91 },
    { a: 48, b: 38 },
    { a: 63, b: 78 },
    { a: 85, b: 72 },
    { a: 91, b: 88 },
    { a: 78, b: 100 },
  ];
  const max = Math.max(...chartData.flatMap((d) => [d.a, d.b]));

  const metrics = [
    { label: "Entities resolved", value: "2.4M", change: "+12%", up: true },
    { label: "Avg confidence", value: "94.2%", change: "+3.1%", up: true },
    { label: "Conflicts flagged", value: "1,847", change: "-8%", up: false },
    { label: "Queries / day", value: "38.5K", change: "+21%", up: true },
  ];

  return (
    <div
      className="w-full max-w-4xl mx-auto flex flex-col overflow-hidden relative"
      style={{
        border: "1px solid var(--color-hairline)",
        boxShadow: "0 2px 40px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        height: "clamp(280px, 52vw, 520px)",
      }}
    >
      {/* Diagonal hatch — full dashboard background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern
            id="hatch-bg"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              stroke="#c8c4b6"
              strokeWidth="0.6"
              strokeOpacity="0.35"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#f3f1ea" />
        <rect width="100%" height="100%" fill="url(#hatch-bg)" />
      </svg>

      {/* Titlebar */}
      <div className="relative z-10 flex items-center gap-3 px-3 md:px-4 py-2.5 border-b border-hairline/70 bg-paper/40 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-hairline-2" />
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-hairline-2" />
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-hairline-2" />
        </div>
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-ink-4 flex-1 text-center truncate">
          Gikagraph — Entity Intelligence Platform
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col gap-2 md:gap-3 p-2 md:p-3 overflow-hidden">
        {/* Metric cards — 2 cols on mobile, 4 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2 shrink-0">
          {metrics.map(({ label, value, change, up }) => (
            <div
              key={label}
              className="border border-hairline/60 p-2 md:p-2.5 flex flex-col gap-0.5 md:gap-1"
            >
              <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-ink-4 leading-tight">
                {label}
              </span>
              <span className="font-sans font-semibold text-ink text-base md:text-lg leading-none tracking-[-0.02em]">
                {value}
              </span>
              <span
                className={`font-mono text-[8px] md:text-[9px] tracking-[0.06em] ${up ? "text-sage" : "text-red-500/70"}`}
              >
                {change} vs last mo.
              </span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex-1 border border-hairline/60 p-2 md:p-3 flex flex-col gap-2 overflow-hidden">
          {/* Legend + label */}
          <div className="flex items-start justify-between shrink-0 gap-2">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-ink-3 leading-tight">
                Entity resolution volume — last 12 weeks
              </span>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="flex items-center gap-1 font-mono text-[7px] md:text-[8px] text-ink-4">
                  <span
                    className="inline-block w-1.5 h-1.5 md:w-2 md:h-2"
                    style={{ background: "#1a2a1a" }}
                  />{" "}
                  frontier
                </span>
                <span className="flex items-center gap-1 font-mono text-[7px] md:text-[8px] text-ink-4">
                  <span
                    className="inline-block w-1.5 h-1.5 md:w-2 md:h-2"
                    style={{ background: "#3a4f3a" }}
                  />{" "}
                  specialist
                </span>
              </div>
            </div>
            <TrendingUp size={10} className="text-sage shrink-0 mt-0.5" />
          </div>

          {/* Bars — show all 12 on md+, 6 on mobile */}
          <div
            className="flex items-end gap-1 md:gap-2"
            style={{ flex: "1 1 0", minHeight: 0, height: 0 }}
          >
            {chartData.map(({ a, b }, i) => (
              <div
                key={i}
                className={`flex-1 h-full flex items-end gap-px md:gap-0.5 ${i >= 6 ? "hidden md:flex" : ""}`}
              >
                <div
                  className="flex-1"
                  style={{
                    height: `${(a / max) * 100}%`,
                    background: "#1a2a1a",
                    minHeight: "3px",
                  }}
                />
                <div
                  className="flex-1"
                  style={{
                    height: `${(b / max) * 100}%`,
                    background: "#3a4f3a",
                    minHeight: "3px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* X labels */}
          <div className="flex shrink-0 pt-1 border-t border-hairline/40">
            {["W1", "", "", "W4", "", "", "W7", "", "", "W10", "", "W12"].map(
              (w, i) => (
                <span
                  key={i}
                  className={`font-mono text-[7px] md:text-[8px] text-ink-4 flex-1 text-center ${i >= 6 ? "hidden md:block" : ""}`}
                >
                  {w}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────

export const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-paper" />
      <GradientBars />

      <div className="relative z-10 flex flex-col flex-1 items-center px-5 md:px-14 pt-16 md:pt-20 pb-8 md:pb-12 text-center">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-ink-3">
            Entity Intelligence
          </span>
          <span className="w-6 md:w-8 h-px bg-hairline-2" />
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-sage">
            Now in Private Beta
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-sans font-semibold text-ink leading-[0.92] tracking-[-0.035em] max-w-[18ch] mb-5 md:mb-6"
          style={{ fontSize: "clamp(36px, 5.6vw, 88px)" }}
        >
          AI That Truly
          <br />
          <span className="text-sage">Understands</span>
          <br />
          Your Data
        </h1>

        {/* Sub-headline */}
        <p
          className="text-ink-3 max-w-[40ch] md:max-w-[48ch] leading-relaxed mb-7 md:mb-8"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}
        >
          An intelligent decision-making platform that delivers better
          responses, reduces analytical burden, and drives measurable business
          outcomes.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center mb-8 md:mb-12">
          <a
            href="https://playground.gikagraph.ai/"
            className="request-access-btn"
          >
            <span>See the platform</span>
          </a>
        </div>

        {/* Dashboard */}
        <Dashboard />
      </div>
    </section>
  );
};
