import { NAV_LINKS } from "../config/navLinks";

export const NavLinks = () => (
  <div className="hidden md:flex items-center gap-7">
    {NAV_LINKS.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className="text-sm text-secondary-600 hover:text-secondary-900 transition-colors"
      >
        {label}
      </a>
    ))}
  </div>
);
