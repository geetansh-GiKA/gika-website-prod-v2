interface FooterColumnProps {
  heading: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}

export const FooterColumn = ({ heading, links }: FooterColumnProps) => (
  <div>
    <h5 className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-normal">
      {heading}
    </h5>
    {links.map(({ label, href }) => (
      <a key={label} href={href} className="block py-1 text-white/78 text-sm hover:text-white transition-colors">
        {label}
      </a>
    ))}
  </div>
);
