import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./components/Logo";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full nav-blur border-b border-secondary-900/70">
        <div className="relative mx-auto w-full flex items-center py-3.5 px-[clamp(20px,3vw,48px)]">
          <Logo />

          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <NavLinks />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex request-access-btn">
              <span>Request access</span>
            </Link>

            <button
              className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.25 transition-opacity duration-200 ${mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-5 h-px bg-secondary-900" />
              <span className="w-5 h-px bg-secondary-900" />
              <span className="w-5 h-px bg-secondary-900" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={close} />
    </>
  );
};
