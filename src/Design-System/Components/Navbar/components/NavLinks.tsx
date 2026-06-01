import { NAV_LINKS } from "../config/navLinks";

export const NavLinks = () => (
  <div className="hidden md:flex items-center gap-7">
    {NAV_LINKS.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className="relative text-sm text-secondary-600 hover:text-secondary-900 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-secondary-900 after:transition-all after:duration-300 hover:after:w-full"
      >
        {label}
      </a>
    ))}
  </div>
);
