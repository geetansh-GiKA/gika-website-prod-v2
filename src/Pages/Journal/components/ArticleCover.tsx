import type { FC } from 'react'
import type { ArticleVariant } from '../config/articles'

interface Props {
  label?: string
  variant?: ArticleVariant
  aspectRatio?: string
  coverImage?: string
  CoverSvg?: FC
}

const stripeByVariant: Record<ArticleVariant, string> = {
  default:
    'repeating-linear-gradient(135deg,transparent 0,transparent 14px,rgba(20,20,20,0.045) 14px,rgba(20,20,20,0.045) 15px)',
  sage: 'repeating-linear-gradient(135deg,transparent 0,transparent 14px,rgba(58,79,58,0.10) 14px,rgba(58,79,58,0.10) 15px)',
  dark: 'repeating-linear-gradient(135deg,transparent 0,transparent 14px,rgba(255,255,255,0.06) 14px,rgba(255,255,255,0.06) 15px)',
}

const captionByVariant: Record<ArticleVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-paper)',
    border: '1px solid var(--color-hairline)',
    color: 'var(--color-ink-3)',
  },
  sage: {
    background: 'var(--color-paper)',
    border: '1px solid var(--color-hairline)',
    color: 'var(--color-ink-3)',
  },
  dark: {
    background: '#1f2620',
    border: '1px solid rgba(255,255,255,0.16)',
    color: 'rgba(255,255,255,0.65)',
  },
}

export const ArticleCover: FC<Props> = ({
  label,
  variant = 'default',
  aspectRatio = '4/3',
  coverImage,
  CoverSvg,
}) => (
  <div className="relative overflow-hidden" style={{ aspectRatio }}>
    {CoverSvg ? (
      <CoverSvg />
    ) : coverImage ? (
      <img src={coverImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
    ) : (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: stripeByVariant[variant] }}
      />
    )}
    <span
      className="absolute bottom-4 left-4 z-10 font-mono text-[10px] tracking-[0.12em] uppercase px-[2.5] py-[1.5]"
      style={captionByVariant[variant]}
    >
      {label}
    </span>
  </div>
)
