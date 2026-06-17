import React from 'react'

export const CTA: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'clamp(240px, 40vw, 520px)' }}
    >
      {/* Background image */}
      <img
        src="/CTA/earth.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.72)' }}
      />

      {/* Dark gradient overlay — heavier at bottom where text lives */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,12,10,0.35) 0%, rgba(10,12,10,0.72) 65%, rgba(10,12,10,0.88) 100%)',
        }}
      />

      {/* Content — pinned to the bottom of the section */}
      <div
        className="relative z-10 flex flex-col justify-between h-full"
        style={{
          minHeight: 'inherit',
          padding: 'clamp(32px, 5vw, 72px)',
        }}
      >
        {/* Bottom row — headline left, body+cta right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end mt-auto pt-16">
          {/* LEFT — large headline */}
          <h2
            className="font-light leading-[0.92] tracking-[-0.035em] text-balance"
            style={{
              fontSize: 'clamp(36px, 5vw, 88px)',
              color: 'var(--color-paper)',
            }}
          >
            Bring your Data. <br />
            We'll bring the Intelligence.
          </h2>

          {/* RIGHT — body + buttons, aligned to bottom */}
          <div className="flex flex-col gap-7">
            <p
              className="leading-[1.65] text-pretty"
              style={{
                fontSize: 'clamp(0.875rem, 1.1vw, 1.0625rem)',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '38ch',
              }}
            >
              A 45-minute call with an applied engineer. We'll show you a working specialized SLM
              grounded on a sample of your data — before you sign anything.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <a href="/contact" className="request-access-btn-dark">
                <span>Request a demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
