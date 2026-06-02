import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { Article } from '../config/articles'
import { ArticleCover } from './ArticleCover'

interface Props {
  article: Article
}

export const ArticleCard: FC<Props> = ({ article }) => (
  <article className="flex flex-col">
    <Link to={`/journal/${article.slug}`} className="block mb-5">
      <ArticleCover variant={article.variant} aspectRatio="4/3" CoverSvg={article.CoverSvg} />
    </Link>

    <div className="flex justify-between items-center mb-3">
      <span
        className="inline-flex items-center px-3 py-[1.5] font-mono text-[11px] tracking-[0.12em] uppercase"
        style={{
          border: '1px solid var(--color-hairline-2)',
          color: 'var(--color-ink-2)',
          background: 'var(--color-surface)',
        }}
      >
        {article.tag}
      </span>
      <span
        className="font-mono text-[11px] tracking-[0.04em] uppercase"
        style={{ color: 'var(--color-ink-3)' }}
      >
        {article.readTime}
      </span>
    </div>

    <h3
      className="font-normal leading-[1.12] mb-2 line-clamp-2"
      style={{
        fontSize: 'clamp(20px,2vw,28px)',
        letterSpacing: '-0.018em',
        color: 'var(--color-ink)',
      }}
    >
      <Link to={`/journal/${article.slug}`} className="hover:opacity-70 transition-opacity">
        {article.headline}
      </Link>
    </h3>

    <p
      className="font-light leading-[1.65] mb-4 line-clamp-3"
      style={{ fontSize: 14, color: 'var(--color-ink-2)' }}
    >
      {article.summary}
    </p>

    <Link
      to={`/journal/${article.slug}`}
      className="mt-auto mb-6 inline-flex items-center gap-2 text-[14px] pb-0.75 transition-colors hover:text-(--color-sage) hover:border-(--color-sage)"
      style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-hairline-2)' }}
    >
      Read →
    </Link>
  </article>
)
