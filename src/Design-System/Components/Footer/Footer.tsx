import { footerColumns } from "./config/footerLinks";
import { FooterColumn } from "./components/FooterColumn";
import { FooterWordmark } from "./components/FooterWordmark";

export const Footer = () => (
  <footer className="bg-ink text-paper pt-20 pb-8">
    <div className="mx-auto w-full max-w-360 px-[clamp(10px,2vw,20px)]">
      <h2 className="font-light text-mega text-paper text-balance uppercase">
        GROUNDED{" "}
        <span className="font-light text-sage-tint italic">MACHINES</span>,{" "}
        <br />
        for serious work.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mt-16 pt-12 border-t border-white/10">
        <FooterWordmark />
        {footerColumns.map((col) => (
          <FooterColumn
            key={col.heading}
            heading={col.heading}
            links={col.links}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pt-10 mt-16 border-t border-white/10 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50">
        <span>© 2026 Gikagraph, Inc. · All rights reserved.</span>
        <span>v. 1.0 · Vol. 01 / May 27, 2026</span>
      </div>
    </div>
  </footer>
);
