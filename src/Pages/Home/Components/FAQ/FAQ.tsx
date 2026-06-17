import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is Gikagraph?',
    answer:
      'GiKA AI is an intelligent decision agent designed for faster decisions, better traceability, market analysis, and competitive intelligence risk, powered by specialized AI models tailored for enterprise-scale performance.',
  },
  {
    question: 'How can GiKA AI benefit my business?',
    answer:
      'GiKA AI transforms fragmented data into actionable insights, helps detect market and competition shifts, ensures data ownership, and delivers quantifiable business impact with AI-powered decision intelligence.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes. We offer a guided pilot program that allows you to experience the power of entity-aware AI in your own environment. Our deployment team sets everything up, connects your data, and lets your users try GiKA in real-world scenarios—so you can see the value in days, not months.',
  },
  {
    question: 'What type of support GiKA AI provide?',
    answer:
      'With GiKA, you’re never onboarding alone. Our dedicated FDEs partner with your team end-to-end to deliver a seamless, stress-free deployment experience. We guide, configure, fine-tune, and support until everything is running flawlessly and value is flowing',
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
