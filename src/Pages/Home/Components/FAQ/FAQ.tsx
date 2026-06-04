import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is Gikagraph?',
    answer:
      'Gikagraph is an AI-powered entity intelligence platform that helps brands, creators, and businesses become discoverable, understandable, and influential in AI-driven ecosystems. We map the connections between entities so your work reaches the right audiences.',
  },
  {
    question: 'How does entity intelligence work?',
    answer:
      'Entity intelligence analyzes the relationships between people, brands, products, and ideas across the web. Gikagraph builds a structured knowledge graph from these connections, making it possible for AI systems to accurately represent and surface your entity when it matters most.',
  },
  {
    question: 'Who is Gikagraph for?',
    answer:
      'Gikagraph is built for brands, artists, creators, and enterprises who want to control their presence in an AI-first world. If your entity exists in the world — a brand, a person, a product — Gikagraph helps ensure it is seen and understood correctly.',
  },
  {
    question: 'How do I get access?',
    answer:
      'We are currently in early access. You can request access directly from our website. We onboard partners in cohorts and work closely with each team to ensure the best results from day one.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Data security and privacy are foundational to how we build. All entity data is encrypted in transit and at rest. We never share your proprietary data with third parties and follow strict data governance practices.',
  },
  {
    question: 'What makes Gikagraph different from SEO tools?',
    answer:
      'Traditional SEO optimizes for keyword rankings in search engines. Gikagraph focuses on entity recognition and relationship mapping — the layer that AI models use to understand and represent the world. It is the infrastructure for the next era of discoverability, beyond links and keywords.',
  },
]

const FAQRow: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b cursor-pointer group "
      style={{ borderColor: 'var(--color-secondary-900)' }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-start justify-between gap-6 py-6 md:py-7">
        {/* Index */}
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase shrink-0 mt-1"
          style={{ color: 'var(--color-ink-4)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Question */}
        <p
          className="flex-1 font-light leading-snug tracking-[-0.015em] transition-colors duration-200"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: open ? 'var(--color-ink)' : 'var(--color-ink-2)',
          }}
        >
          {item.question}
        </p>

        {/* Toggle icon */}
        <span
          className="shrink-0 mt-1 transition-transform duration-300 ease-in-out"
          style={{
            color: 'var(--color-sage)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line
              x1="8"
              y1="1"
              x2="8"
              y2="15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="1"
              y1="8"
              x2="15"
              y2="8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>

      {/* Answer — animated expand */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p
          className="pb-7 font-light leading-relaxed"
          style={{
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            color: 'var(--color-ink-4)',
            maxWidth: '72ch',
            paddingLeft: 'calc(10px + 1.5rem)',
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export const FAQ: React.FC = () => {
  return (
    <section
      id="FAQ"
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
        Frequestly Asked Questions
      </p>
      {/* Top rule */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-secondary-900)' }} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0">
        {/* LEFT — section label */}
        <div
          className="px-6 py-10 sm:px-10 md:px-14 md:py-16 lg:pr-12 lg:pl-0 border-b lg:border-b-0 lg:border-r"
          style={{ borderColor: 'var(--color-secondary-900)' }}
        >
          <p
            className="mt-5 font-light leading-relaxed"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: 'var(--color-ink-4)',
              maxWidth: '32ch',
            }}
          >
            Can't find what you're looking for? Reach out and we'll get back to you.
          </p>

          <a
            href="mailto:hello@gikagraph.ai"
            className="inline-flex items-center gap-2 mt-8 font-medium text-sm transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'var(--color-sage)' }}
          >
            Contact us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* RIGHT — accordion list */}
        <div className="px-6 py-10 sm:px-10 md:px-14 md:py-16 lg:pl-12 lg:pr-0">
          {/* Top hairline inside right column */}
          <div
            className="w-full h-px mb-0"
            style={{ backgroundColor: 'var(--color-secondary-900)' }}
          />
          {faqs.map((item, i) => (
            <FAQRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-secondary-900)' }} />
    </section>
  )
}
