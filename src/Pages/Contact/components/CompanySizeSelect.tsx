import { useState, useRef, useEffect, type FC } from 'react'

const COMPANY_SIZES = ['1 — 50', '50 — 250', '250 — 2,500', '2,500 — 10,000', '10,000+']

type Props = {
  value: string
  onChange: (value: string) => void
}

export const CompanySizeSelect: FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (size: string) => {
    onChange(size)
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-ink-4">
        Company size
      </span>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between border-b border-hairline py-2 text-sm outline-none transition-colors"
          style={{ borderColor: open ? 'var(--color-ink)' : undefined }}
        >
          <span className={value ? 'text-ink' : 'text-ink-4'}>{value || 'Select…'}</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className="text-ink-3 transition-transform duration-200 shrink-0"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 bg-paper border border-hairline shadow-sm">
            {COMPANY_SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSelect(size)}
                className="w-full text-left px-4 py-2.5 text-sm text-ink-2 hover:bg-paper-2 hover:text-ink transition-colors font-mono tracking-wide"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
