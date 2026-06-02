import React from 'react'

const DEFAULT_ITEMS = [
  'Specialized small language models',
  'Entity resolution at scale',
  'Provenance-aware retrieval',
  'Ontology-grounded reasoning',
  'GraphRAG, native',
  'Explainable by default',
]

interface MarqueeProps {
  items?: string[]
}

export const Marquee: React.FC<MarqueeProps> = ({ items = DEFAULT_ITEMS }) => {
  const all = [...items, ...items]

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 38s linear infinite;
        }
          
      `}</style>
      <section
        className="border-t border-b border-secondary-900/70 bg-paper overflow-hidden py-4.5"
        aria-hidden="true"
        style={{
          backgroundColor: 'var(--color-paper)',
          color: 'var(--color-ink)',
          backgroundImage: `radial-gradient(color-mix(in oklab, var(--color-secondary-900), transparent 98%) 1px, transparent 1px), radial-gradient(color-mix(in oklab, var(--color-secondary-900), transparent 99%) 1px, transparent 1px)`,
          backgroundSize: '3px 3px, 7px 7px',
          backgroundPosition: '0 0, 1px 2px',
        }}
      >
        <div className="marquee-track flex gap-15 whitespace-nowrap w-max font-mono text-[12px] tracking-[0.16em] uppercase text-ink-2">
          {all.map((text, i) => (
            <span key={i} className="inline-flex items-center gap-4.5">
              {text}
              <span className="text-[10px] text-sage">✕</span>
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
