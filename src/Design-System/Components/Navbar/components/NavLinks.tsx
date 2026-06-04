import { Link, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../config/navLinks'

const linkClass =
  'relative text-sm text-secondary-600 hover:text-secondary-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-secondary-900 after:transition-all after:duration-300 hover:after:w-full'

export const NavLinks = () => {
  const navigate = useNavigate()

  const handleHashLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <div className="hidden md:flex items-center gap-7">
      {NAV_LINKS.map(({ label, href }) =>
        href.startsWith('#') ? (
          <a key={label} href={href} onClick={(e) => handleHashLink(e, href)} className={linkClass}>
            {label}
          </a>
        ) : (
          <Link key={label} to={href} className={linkClass}>
            {label}
          </Link>
        )
      )}
    </div>
  )
}
