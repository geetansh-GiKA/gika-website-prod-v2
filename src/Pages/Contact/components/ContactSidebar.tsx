import type { FC } from 'react'

export const ContactSidebar: FC = () => (
  <div className="flex flex-col px-8 md:px-12 py-16 lg:border-r border-secondary-900/70">
    <div>
      <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-ink-3 mb-8">
        Request Access
      </p>
      <p className="text-ink-3 text-[15px] leading-relaxed max-w-sm mb-10">
        Fill in the form and we'll reach out within 48 hours to schedule a working session with one
        of our applied scientists.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12">
      <div>
        <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-ink-4 mb-8">
          Schedule a call
        </p>
        <p className="text-sm font-medium text-ink mb-4">Book a 30-min session</p>
        <a
          href="https://cal.com/gikagraph/30-mins"
          target="_blank"
          rel="noopener noreferrer"
          className="request-access-btn"
        >
          <span>Book now →</span>
        </a>
      </div>

      <div>
        <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-ink-4 mb-8">Offices</p>
        <p className="text-sm font-medium text-ink mb-0.5">Bengaluru</p>
        <p className="text-xs text-ink-3 mb-1">IST · UTC+5:30</p>
        <p className="text-xs text-ink-3 leading-relaxed">
          Indiqube Edge
          <br />
          Bengaluru 560102
        </p>
      </div>
    </div>
  </div>
)
