import React from 'react'

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
      'GikaGraph transformed how we handle product search and recommendations. The improved data quality and entity matching led to substantially better discovery rates for niche product searches.',
    highlight: 'Divya Manjari',
    name: 'Drezily',
    role: 'Fashion Brand',
    logo: '/Customers/Drezily.png',
  },
]

export const Customers: React.FC = () => {
  const active = 0
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
          className="relative flex flex-col justify-between px-6 py-10 sm:px-10 md:px-14 md:py-16 lg:border-r"
          style={{ borderColor: 'var(--color-secondary-900)' }}
        >
          {/* Highlighted pull-quote */}
          <div className="my-auto pt-6 pb-6 md:pt-10">
            <p
              className="font-light leading-[1.15] tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                color: 'var(--color-ink)',
              }}
            >
              {t.highlight}
            </p>

            {/* Full quote below */}
            <p
              className="mt-4 md:mt-5 font-light leading-relaxed"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--color-ink-4)',
                maxWidth: '48ch',
              }}
            >
              {t.quote}
            </p>
          </div>
        </div>

        {/* RIGHT — logo display */}
        <div
          className="relative flex items-center justify-center px-8 py-12 md:px-14 md:py-16 min-h-55 sm:min-h-65 lg:min-h-0 border-t lg:border-t-0"
          style={{ borderColor: 'var(--color-secondary-900)' }}
        >
          <img
            src={t.logo}
            alt={t.name}
            className="w-[55%] max-w-50 sm:w-[45%] sm:max-w-60 object-contain opacity-80"
          />
        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-secondary-900)' }} />
    </section>
  )
}
