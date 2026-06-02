import type { FC } from 'react'
import { articles } from '../config/articles'

export const JournalMasthead: FC = () => {
  const latest = articles[0]

  return (
    <div
      className="w-full px-6 sm:px-10 md:px-14 pt-16 pb-0"
      style={{ borderBottom: '1px solid var(--color-hairline)' }}
    >
      {/* Big spaced-out title */}
      <h1
        className="w-full text-center font-light tracking-[0.22em] uppercase leading-none"
        style={{
          fontSize: 'clamp(36px, 7.5vw, 116px)',
          color: 'var(--color-ink)',
          letterSpacing: '0.22em',
        }}
      >
        NEwsletter
      </h1>

      {/* Hairline rule */}
      <div
        className="w-full mt-6 mb-5"
        style={{ borderTop: '1px solid var(--color-hairline-2)' }}
      />

      {/* Tagline row */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-7">
        <p
          className="font-light text-[14px] leading-normal"
          style={{ color: 'var(--color-ink-3)', maxWidth: '60ch' }}
        >
          Thought leadership on AI, data, and enterprise decision-making
        </p>
        <span
          className="font-mono text-[11px] tracking-[0.12em] uppercase"
          style={{ color: 'var(--color-ink-4)' }}
        >
          Latest — {latest.date}
        </span>
      </div>
    </div>
  )
}
