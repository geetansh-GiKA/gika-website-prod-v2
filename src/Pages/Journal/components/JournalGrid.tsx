import type { FC } from 'react'
import { articles } from '../config/articles'
import { ArticleCard } from './ArticleCard'

export const JournalGrid: FC = () => {
  // Everything except the featured (first) article
  const rest = articles.slice(1)

  return (
    <section
      className="w-full px-6 sm:px-10 md:px-14"
      style={{ marginTop: 'clamp(56px,7vw,96px)' }}
    >
      {/* Section label */}
      <div
        className="flex items-center gap-5 pb-5 mb-8"
        style={{ borderBottom: '1px solid var(--color-hairline)' }}
      >
        <span
          className="font-mono text-[11px] tracking-[0.16em] uppercase"
          style={{ color: 'var(--color-ink-3)' }}
        >
          Other Articles
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 items-stretch">
        {rest.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
