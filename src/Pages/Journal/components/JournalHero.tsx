import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../config/articles'
import { ArticleCover } from './ArticleCover'

export const JournalHero: FC = () => {
  const featured = articles[0]

  return (
    <header className="w-full px-6 sm:px-10 md:px-14" style={{ paddingTop: 40, paddingBottom: 0 }}>
      {/* Featured article — large two-col layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-0">
        {/* Cover */}
        <Link to={`/journal/${featured.slug}`} className="block">
          <ArticleCover variant={featured.variant} aspectRatio="4/3" CoverSvg={featured.CoverSvg} />
        </Link>

        {/* Copy */}
        <div
          className="flex flex-col justify-between pl-8 pb-8"
          style={{ borderBottom: '1px solid var(--color-hairline)' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase"
                style={{
                  border: '1px solid var(--color-hairline-2)',
                  color: 'var(--color-ink-2)',
                  background: 'var(--color-surface)',
                }}
              >
                {featured.tag}
              </span>
            </div>

            <h2
              className="font-light mb-5 text-wrap-balance"
              style={{
                fontSize: 'clamp(28px,3.2vw,52px)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                color: 'var(--color-ink)',
              }}
            >
              {featured.headline}
            </h2>

            <p
              className="font-light leading-[1.6] mb-8 line-clamp-3"
              style={{
                fontSize: 'clamp(15px,1.2vw,18px)',
                color: 'var(--color-ink-2)',
                maxWidth: '52ch',
              }}
            >
              {featured.summary}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to={`/journal/${featured.slug}`}
              className="inline-flex items-center gap-2 text-[14px] pb-0.75 transition-colors hover:text-(--color-sage) hover:border-(--color-sage)"
              style={{
                color: 'var(--color-ink)',
                borderBottom: '1px solid var(--color-hairline-2)',
              }}
            >
              Read essay →
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
