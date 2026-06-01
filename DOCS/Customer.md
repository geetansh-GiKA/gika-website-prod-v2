import React, { useState } from "react";

interface Testimonial {
  quote: string;
  continuation: string;
  name: string;
  role: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A platform that cannot show your work is a gallery with the lights off.",
    continuation:
      " We joined Gikagraph because every artist deserves to be seen — not buried by an algorithm that doesn't understand what beauty means.",
    name: "Drezily",
    role: "Customer",
    img: "/Customers/MainDrezily.png",
  },
];

export const Customers: React.FC = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      className="relative w-full overflow-hidden mt-16"
      style={{
        backgroundColor: "var(--color-paper)",
        color: "var(--color-ink)",
        backgroundImage: `radial-gradient(color-mix(in oklab, var(--color-secondary-900), transparent 98%) 1px, transparent 1px), radial-gradient(color-mix(in oklab, var(--color-secondary-900), transparent 99%) 1px, transparent 1px)`,
        backgroundSize: "3px 3px, 7px 7px",
        backgroundPosition: "0 0, 1px 2px",
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center"
        style={{ color: "var(--color-ink-4)" }}
      >
        What are customers say about us ?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0 items-center py-12">
        {/* LEFT — portrait */}
        <div className="flex flex-col gap-6">
          {/* label */}

          {/* photo */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{ width: "220px", height: "290px" }}
            >
              <img
                key={t.img}
                src={t.img}
                alt={t.name}
                className="h-full w-full object-cover object-top transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — quote */}
        <div className="flex flex-col justify-center">
          <p
            className="font-light leading-normal tracking-[-0.01em]"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
              color: "var(--color-ink)",
            }}
          >
            <span style={{ fontStyle: "normal", color: "var(--color-ink-2)" }}>
              {t.quote}
              {t.continuation}"
            </span>
          </p>

          {/* bottom rule + counter */}
          <div className="mt-16 flex items-center gap-6">
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "var(--color-hairline)" }}
            />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.2em] tabular-nums"
              style={{ color: "var(--color-ink-4)" }}
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
