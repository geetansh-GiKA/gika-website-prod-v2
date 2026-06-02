import { useState } from 'react'
import type { FC } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Navbar } from '../../Design-System/Components/Navbar/Navbar'
import { Footer } from '../../Design-System/Components/Footer/Footer'
import { articles } from '../Journal/config/articles'
import { ArticleCover } from '../Journal/components/ArticleCover'

const toId = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const extractHeadings = (content: string) =>
  content
    .split('\n')
    .filter((l) => /^## /.test(l))
    .map((l) => l.replace(/^## /, '').trim())

const splitSections = (content: string): { heading: string | null; body: string }[] => {
  const lines = content.split('\n')
  const sections: { heading: string | null; body: string }[] = []
  let current: { heading: string | null; lines: string[] } = { heading: null, lines: [] }

  for (const line of lines) {
    if (/^## /.test(line)) {
      if (current.lines.join('\n').trim() || current.heading !== null) {
        sections.push({ heading: current.heading, body: current.lines.join('\n') })
      }
      current = { heading: line.replace(/^## /, '').trim(), lines: [] }
    } else {
      current.lines.push(line)
    }
  }
  if (current.heading !== null || current.lines.join('\n').trim()) {
    sections.push({ heading: current.heading, body: current.lines.join('\n') })
  }
  return sections
}

export const JournalPost: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [copied, setCopied] = useState(false)
  const article = articles.find((a) => a.slug === slug)

  if (!article) return <Navigate to="/newsletter" replace />

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3)
  const headings = extractHeadings(article.content)
  const sections = splitSections(article.content)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full overflow-x-clip">
      <Navbar />

      <div className="px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60">
        <div className="border-x border-secondary-900/70">
          {/* ── MASTHEAD ── */}
          <header style={{ paddingTop: 40, paddingBottom: 64 }} className="px-5 sm:px-10">
            <div className="grid grid-cols-12 gap-10 items-center">
              {/* Left: heading */}
              <div className="col-span-12 md:col-span-7 flex flex-col gap-5">
                {/* Tag + read time */}
                <div className="flex items-center gap-4">
                  <span
                    className="inline-flex items-center px-3 py-[2px] font-mono text-[11px] tracking-[0.12em] uppercase"
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
                    {article.date}
                  </span>
                  <span
                    className="font-mono text-[11px] tracking-[0.04em] uppercase"
                    style={{ color: 'var(--color-ink-3)' }}
                  >
                    {article.readTime} read
                  </span>
                </div>

                <h1
                  className="font-light leading-[0.92]"
                  style={{
                    fontSize: 'clamp(36px, 4.5vw, 60px)',
                    letterSpacing: '-0.035em',
                    color: 'var(--color-ink)',
                    textWrap: 'balance',
                  }}
                >
                  {article.headline}
                </h1>

                <p
                  className="font-light leading-[1.55]"
                  style={{
                    fontSize: 'clamp(15px, 1.2vw, 18px)',
                    color: 'var(--color-ink-4)',
                    textWrap: 'pretty',
                  }}
                >
                  {article.summary}
                </p>
              </div>

              {/* Right: cover image */}
              <div className="hidden md:block col-span-5 overflow-hidden rounded-sm">
                <ArticleCover
                  variant={article.variant}
                  aspectRatio="4/3"
                  CoverSvg={article.CoverSvg}
                />
              </div>
            </div>
          </header>

          {/* Divider */}
          <div className="mx-5 sm:mx-10" style={{ borderTop: '1px solid var(--color-hairline)' }} />

          {/* Mobile TOC */}
          {headings.length > 0 && (
            <div
              className="md:hidden px-5 sm:px-10 py-6"
              style={{ borderBottom: '1px solid var(--color-hairline)' }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.04em] uppercase block mb-3"
                style={{ color: 'var(--color-ink-3)' }}
              >
                In this article
              </span>
              <div className="flex flex-col gap-2">
                {headings.map((h, i) => {
                  const match = h.match(/^\d+\.\s+(.+)/)
                  const num = String(i + 1).padStart(2, '0')
                  const label = match ? match[1] : h
                  return (
                    <a
                      key={h}
                      href={`#${toId(h)}`}
                      className="text-[13px] leading-[1.4] transition-opacity hover:opacity-70"
                      style={{ color: 'var(--color-ink-2)' }}
                    >
                      {num} · {label}
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── ARTICLE BODY ── */}
          <article className="px-5 sm:px-10 pt-8">
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Sidebar */}
              <aside className="hidden md:block col-span-2 sticky top-24 self-start">
                {headings.length > 0 && (
                  <div className="mb-8">
                    <span
                      className="font-mono text-[11px] tracking-[0.04em] uppercase block mb-3"
                      style={{ color: 'var(--color-ink-3)' }}
                    >
                      Sections
                    </span>
                    <div className="flex flex-col gap-2">
                      {headings.map((h, i) => {
                        const match = h.match(/^\d+\.\s+(.+)/)
                        const num = String(i + 1).padStart(2, '0')
                        const label = match ? match[1] : h
                        return (
                          <a
                            key={h}
                            href={`#${toId(h)}`}
                            className="text-[13px] leading-[1.4] line-clamp-1 transition-opacity hover:opacity-70"
                            style={{ color: 'var(--color-ink-2)' }}
                          >
                            {num} · {label}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div>
                  <span
                    className="font-mono text-[11px] tracking-[0.04em] uppercase block mb-3"
                    style={{ color: 'var(--color-ink-3)' }}
                  >
                    Share
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.headline)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] transition-opacity hover:opacity-70"
                      style={{ color: 'var(--color-ink-2)' }}
                    >
                      ↗ X
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] transition-opacity hover:opacity-70"
                      style={{ color: 'var(--color-ink-2)' }}
                    >
                      ↗ LinkedIn
                    </a>
                    <button
                      onClick={handleCopy}
                      className="text-[13px] text-left transition-opacity hover:opacity-70"
                      style={{ color: copied ? 'var(--color-sage)' : 'var(--color-ink-2)' }}
                    >
                      {copied ? '✓ Copied' : '↗ Copy link'}
                    </button>
                  </div>
                </div>
              </aside>

              {/* Body */}
              <div className="col-span-12 md:col-span-10 md:col-start-3 prose-article flex flex-col gap-4">
                {sections.map((section, idx) => {
                  const mdComponents = {
                    h3: ({ children }: { children?: React.ReactNode }) => (
                      <h3
                        className="font-normal mb-3 mt-7"
                        style={{
                          fontSize: 'clamp(15px, 1.3vw, 18px)',
                          letterSpacing: '-0.015em',
                          color: 'var(--color-ink)',
                        }}
                      >
                        {children}
                      </h3>
                    ),
                    p: ({ children }: { children?: React.ReactNode }) => (
                      <p
                        className="mb-5 leading-[1.55]"
                        style={{
                          fontSize: 'clamp(14px, 1.05vw, 16px)',
                          color: 'var(--color-ink-2)',
                          textWrap: 'pretty',
                          textAlign: 'justify',
                        }}
                      >
                        {children}
                      </p>
                    ),
                    strong: ({ children }: { children?: React.ReactNode }) => (
                      <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
                        {children}
                      </strong>
                    ),
                    em: ({ children }: { children?: React.ReactNode }) => (
                      <em style={{ fontWeight: 300, fontStyle: 'italic' }}>{children}</em>
                    ),
                    ul: ({ children }: { children?: React.ReactNode }) => (
                      <ul
                        className="mb-5 pl-5 leading-normal"
                        style={{ fontSize: 14, color: 'var(--color-ink-2)', listStyleType: 'disc' }}
                      >
                        {children}
                      </ul>
                    ),
                    ol: ({ children }: { children?: React.ReactNode }) => (
                      <ol
                        className="mb-5 pl-5 leading-normal"
                        style={{
                          fontSize: 14,
                          color: 'var(--color-ink-2)',
                          listStyleType: 'decimal',
                        }}
                      >
                        {children}
                      </ol>
                    ),
                    li: ({ children }: { children?: React.ReactNode }) => (
                      <li className="mb-2">{children}</li>
                    ),
                    blockquote: ({ children }: { children?: React.ReactNode }) => (
                      <blockquote
                        className="my-7 leading-[1.35] font-light italic"
                        style={{
                          padding: '4px 0 4px 20px',
                          borderLeft: '2px solid var(--color-sage)',
                          fontSize: 'clamp(15px, 1.3vw, 18px)',
                          letterSpacing: '-0.018em',
                          color: 'var(--color-ink)',
                          textWrap: 'balance',
                        }}
                      >
                        {children}
                      </blockquote>
                    ),
                    table: ({ children }: { children?: React.ReactNode }) => (
                      <div className="overflow-x-auto mb-7">
                        <table
                          className="w-full border-collapse text-[15px]"
                          style={{ color: 'var(--color-ink-2)' }}
                        >
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }: { children?: React.ReactNode }) => (
                      <thead style={{ borderBottom: '2px solid var(--color-hairline)' }}>
                        {children}
                      </thead>
                    ),
                    th: ({ children }: { children?: React.ReactNode }) => (
                      <th
                        className="text-left py-3 px-4 font-medium"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--color-ink-3)',
                        }}
                      >
                        {children}
                      </th>
                    ),
                    td: ({ children }: { children?: React.ReactNode }) => (
                      <td
                        className="py-3 px-4"
                        style={{ borderBottom: '1px solid var(--color-hairline)' }}
                      >
                        {children}
                      </td>
                    ),
                    hr: () => (
                      <hr
                        className="my-8"
                        style={{ border: 'none', borderTop: '1px solid var(--color-hairline)' }}
                      />
                    ),
                    code: ({ children }: { children?: React.ReactNode }) => (
                      <code
                        className="px-1.5 py-0.5 rounded text-[13px]"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          background: 'var(--color-paper-2)',
                          color: 'var(--color-sage)',
                        }}
                      >
                        {children}
                      </code>
                    ),
                  }

                  return (
                    <div
                      key={idx}
                      className="p-6"
                      style={{
                        border: '1px solid var(--color-hairline)',
                        background: 'var(--color-paper-2)',
                      }}
                    >
                      {section.heading && (
                        <h2
                          id={toId(section.heading)}
                          className="font-light mb-4 scroll-mt-28"
                          style={{
                            fontSize: 'clamp(19px, 1.8vw, 24px)',
                            letterSpacing: '-0.02em',
                            color: 'var(--color-ink)',
                          }}
                        >
                          {section.heading}
                        </h2>
                      )}
                      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                        {section.body}
                      </ReactMarkdown>
                    </div>
                  )
                })}
              </div>
            </div>
          </article>

          {/* ── RELATED ── */}
          {related.length > 0 && (
            <section className="px-5 sm:px-10 mt-12">
              <div className="pb-3" style={{ borderTop: '1px solid var(--color-hairline)' }}></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {related.map((rel) => (
                  <article key={rel.slug} className="flex flex-col">
                    <Link to={`/journal/${rel.slug}`} className="block mb-5">
                      <ArticleCover
                        variant={rel.variant}
                        aspectRatio="4/3"
                        CoverSvg={rel.CoverSvg}
                      />
                    </Link>
                    <div className="flex justify-between items-center mb-3">
                      <span
                        className="inline-flex items-center px-3 py-[1.5px] font-mono text-[11px] tracking-[0.12em] uppercase"
                        style={{
                          border: '1px solid var(--color-hairline-2)',
                          color: 'var(--color-ink-2)',
                          background: 'var(--color-surface)',
                        }}
                      >
                        {rel.tag}
                      </span>
                      <span
                        className="font-mono text-[11px] tracking-[0.04em] uppercase"
                        style={{ color: 'var(--color-ink-3)' }}
                      >
                        {rel.readTime}
                      </span>
                    </div>
                    <h3
                      className="font-normal leading-[1.12] mb-2 line-clamp-2"
                      style={{
                        fontSize: 'clamp(18px, 1.8vw, 24px)',
                        letterSpacing: '-0.018em',
                        color: 'var(--color-ink)',
                      }}
                    >
                      <Link
                        to={`/journal/${rel.slug}`}
                        className="hover:opacity-70 transition-opacity"
                      >
                        {rel.headline}
                      </Link>
                    </h3>
                    <p
                      className="font-light leading-[1.65] mb-4 line-clamp-3 text-[14px]"
                      style={{ color: 'var(--color-ink-2)' }}
                    >
                      {rel.summary}
                    </p>
                    <Link
                      to={`/journal/${rel.slug}`}
                      className="mt-auto mb-6 inline-flex items-center gap-2 text-[14px] pb-0.5 transition-colors hover:opacity-70"
                      style={{
                        color: 'var(--color-ink)',
                        borderBottom: '1px solid var(--color-hairline-2)',
                      }}
                    >
                      Read →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
