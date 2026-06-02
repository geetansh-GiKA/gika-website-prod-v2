import React, { useState } from 'react'

interface Testimonial {
  quote: string
  highlight: string
  name: string
  role: string
  logo: string
  stat?: string
  statLabel?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A platform that cannot show your work is a gallery with the lights off. We joined Gikagraph because every artist deserves to be seen — not buried by an algorithm that doesn't understand what beauty means.",
    highlight: 'Every artist deserves to be seen.',
    name: 'Drezily',
    role: 'Fashion Brand',
    logo: '/Customers/Drezily.png',
  },
]

export const Customers: React.FC = () => {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--color-paper)',
        backgroundImage: `radial-gradient(color-mix(in oklab, var(--color-secondary-900), transparent 98%) 1px, transparent 1px), radial-gradient(color-mix(in oklab, var(--color-secondary-900), transparent 99%) 1px, transparent 1px)`,
        backgroundSize: '3px 3px, 7px 7px',
        backgroundPosition: '0 0, 1px 2px',
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-8 mt-8"
        style={{ color: 'var(--color-ink-4)' }}
      >
        What are customers say about us ?
      </p>

      {/* Top rule */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-secondary-900)' }} />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — editorial quote panel */}
        <div
          className="relative flex flex-col justify-between py-12 md:py-16"
          style={{ borderRight: '1px solid var(--color-secondary-900)' }}
        >
          {/* Highlighted pull-quote */}
          <div className="my-auto pt-10 pb-6">
            <p
              className="font-light leading-[1.15] tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                color: 'var(--color-ink)',
              }}
            >
              {t.highlight}
            </p>

            {/* Full quote below */}
            <p
              className="mt-5 font-light leading-relaxed"
              style={{
                fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                color: 'var(--color-ink-4)',
                maxWidth: '48ch',
              }}
            >
              {t.quote}
            </p>
          </div>
        </div>

        {/* RIGHT — logo display + stat */}
        <div className="relative flex flex-col items-center justify-center gap-10 px-8 py-12 md:px-14 md:py-16 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <img src={t.logo} alt="" className="w-[70%] max-w-xs object-contain" />
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-secondary-900)' }} />
    </section>
  )
}
