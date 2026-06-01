import { useState } from "react";
import { Logo } from "./components/Logo";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 nav-blur border-b border-secondary-900/70">
      <div
        className="relative mx-auto w-full flex items-center py-3.5 px-[clamp(20px,3vw,48px)]"
      >
        <Logo />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <NavLinks />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:request-access-btn"
          >
            <span>Request access</span>
          </a>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.25"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-secondary-900 transition-transform duration-200 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`w-5 h-px bg-secondary-900 transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-px bg-secondary-900 transition-transform duration-200 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} />
    </nav>
  );
};
