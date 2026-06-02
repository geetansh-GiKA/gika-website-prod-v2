import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../config/navLinks'
import { Logo } from './Logo'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-tertiary-200 transition-opacity duration-300 md:hidden ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Header row — mirrors the main navbar exactly */}
      <div className="flex items-center justify-between px-[clamp(20px,3vw,48px)] py-3.5 border-b border-secondary-900/70">
        <a href="/" onClick={onClose}>
          <Logo />
        </a>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-8 h-8 flex items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="1" y1="1" x2="15" y2="15" />
            <line x1="15" y1="1" x2="1" y2="15" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col flex-1 px-[clamp(20px,3vw,48px)] pt-6 gap-1">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            to={href}
            onClick={onClose}
            className="py-4 text-2xl font-medium text-ink border-b border-hairline last:border-0 hover:text-ink-2 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-[clamp(20px,3vw,48px)] pb-10">
        <Link to="/contact" onClick={onClose} className="request-access-btn w-full justify-center">
          <span>Request access</span>
        </Link>
      </div>
    </div>
  )
}
