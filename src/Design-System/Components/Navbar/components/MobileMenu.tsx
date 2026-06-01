import { NAV_LINKS } from "../config/navLinks";

type MobileMenuProps = {
  open: boolean;
};

export const MobileMenu = ({ open }: MobileMenuProps) => (
  <div
    className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t border-tertiary-500 ${
      open ? "max-h-64" : "max-h-0"
    }`}
  >
    <div className="flex flex-col py-4 gap-1">
      {NAV_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="px-5 py-2.5 text-sm text-secondary-600 hover:text-secondary-900 hover:bg-tertiary-300 transition-colors"
        >
          {label}
        </a>
      ))}
      <div className="px-5 pt-3 mt-1 border-t border-tertiary-500">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-secondary-900 rounded-full text-secondary-900 hover:bg-secondary-900 hover:text-tertiary-200 transition-colors"
        >
          Request access
        </a>
      </div>
    </div>
  </div>
);
