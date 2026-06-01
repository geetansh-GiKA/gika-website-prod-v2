<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gikagraph — Entity Intelligence Platform</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

  <!-- Tailwind (Play CDN) -->
  <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
            mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
          },
          colors: {
            paper:    '#f3f1ea',
            'paper-2':'#ebe8df',
            'paper-3':'#e3dfd2',
            surface:  '#fbfaf6',
            ink:      '#141414',
            'ink-2':  '#3a3a3a',
            'ink-3':  '#6b6b6b',
            'ink-4':  '#8f8f8f',
            hairline: '#d9d5c7',
            'hairline-2':'#c8c4b6',
            sage:     '#3a4f3a',
            'sage-2': '#2c3d2c',
            'sage-tint':'#d9e0d6',
          },
          letterSpacing: {
            mono:   '0.16em',
            edit:   '-0.04em',
          },
          fontSize: {
            mega:    ['clamp(72px,11vw,196px)',{lineHeight:'0.88',letterSpacing:'-0.04em'}],
            display: ['clamp(56px,8vw,140px)', {lineHeight:'0.92',letterSpacing:'-0.035em'}],
            h1:      ['clamp(44px,6.4vw,112px)',{lineHeight:'0.96',letterSpacing:'-0.03em'}],
            h2:      ['clamp(32px,4.4vw,72px)', {lineHeight:'1.02',letterSpacing:'-0.025em'}],
            h3:      ['clamp(24px,2.6vw,40px)', {lineHeight:'1.12',letterSpacing:'-0.018em'}],
            h4:      ['clamp(20px,1.8vw,26px)', {lineHeight:'1.2', letterSpacing:'-0.01em'}],
            'lead':  ['clamp(17px,1.4vw,20px)',{lineHeight:'1.5'}],
            stat:    ['clamp(56px,6.2vw,96px)',{lineHeight:'0.96',letterSpacing:'-0.04em'}],
          },
          animation: {
            marquee: 'marquee 38s linear infinite',
          },
          keyframes: {
            marquee: {
              '0%':   { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          },
        },
      },
    };
  </script>

  <style type="text/tailwindcss">
    @layer base {
      html, body {
        background: #f3f1ea;
        color: #141414;
        font-family: 'DM Sans', system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      body {
        background-image:
          radial-gradient(rgba(20,20,20,0.018) 1px, transparent 1px),
          radial-gradient(rgba(20,20,20,0.012) 1px, transparent 1px);
        background-size: 3px 3px, 7px 7px;
        background-position: 0 0, 1px 2px;
      }
      ::selection { background: #3a4f3a; color: #f3f1ea; }
    }
    @layer utilities {
      .stripes-light {
        background-image: repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(20,20,20,0.045) 14px, rgba(20,20,20,0.045) 15px);
      }
      .stripes-dark {
        background-image: repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(255,255,255,0.06) 14px, rgba(255,255,255,0.06) 15px);
      }
      .stripes-sage {
        background-image: repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(58,79,58,0.10) 14px, rgba(58,79,58,0.10) 15px);
      }
      .nav-blur {
        background: color-mix(in oklab, #f3f1ea, transparent 12%);
        backdrop-filter: saturate(140%) blur(10px);
        -webkit-backdrop-filter: saturate(140%) blur(10px);
      }
    }
  </style>

  <!-- React + Babel (pinned) -->
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
</head>

<body data-screen-label="01 Home (React)">
  <div id="root"></div>

  <script type="text/babel" data-presets="env,react">
    const { useState, useEffect } = React;

    /* =====================================================
       Small primitives
       ===================================================== */

    const Container = ({ className = "", children, ...rest }) => (
      <div
        className={`mx-auto w-full max-w-[1440px] ${className}`}
        style={{ paddingLeft: 'clamp(20px,3vw,40px)', paddingRight: 'clamp(20px,3vw,40px)' }}
        {...rest}
      >
        {children}
      </div>
    );

    const Mono = ({ className = "", children, as: As = "span" }) => (
      <As className={`font-mono text-[11px] tracking-[0.16em] uppercase text-ink-3 ${className}`}>
        {children}
      </As>
    );

    const Eyebrow = ({ children, className = "" }) => (
      <span className={`inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-3 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
        {children}
      </span>
    );

    const Index = ({ children, className = "" }) => (
      <span className={`font-mono text-[11px] tracking-[0.16em] uppercase text-ink-3 ${className}`}>
        {children}
      </span>
    );

    const Btn = ({ as: As = "a", variant = "solid", className = "", children, ...rest }) => {
      const variants = {
        solid:
          "border border-ink bg-ink text-paper hover:bg-sage hover:border-sage",
        ghost:
          "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
        sage:
          "border border-sage bg-sage text-paper hover:bg-sage-2 hover:border-sage-2",
        ghostDark:
          "border border-white/30 bg-transparent text-paper hover:bg-white/10",
      };
      return (
        <As
          className={`group inline-flex items-center gap-2.5 px-[18px] py-3 text-sm font-medium tracking-[-0.005em] rounded-full whitespace-nowrap transition ${variants[variant]} ${className}`}
          {...rest}
        >
          {children}
          <Arrow />
        </As>
      );
    };

    const Arrow = () => (
      <span className="relative inline-block w-3.5 h-3.5 transition-transform group-hover:translate-x-[3px]">
        <span className="absolute top-1/2 left-0 w-full h-px bg-current -translate-y-1/2" />
        <span
          className="absolute top-1/2 right-0 w-[7px] h-[7px] -translate-y-1/2 rotate-45"
          style={{ borderTop: '1px solid currentColor', borderRight: '1px solid currentColor' }}
        />
      </span>
    );

    const LinkArrow = ({ href = "#", className = "", children }) => (
      <a
        href={href}
        className={`inline-flex items-center gap-2 text-sm text-ink border-b border-hairline-2 pb-[3px] hover:text-sage hover:border-sage transition ${className}`}
      >
        {children}
      </a>
    );

    const Chip = ({ children, tone = "default", className = "" }) => {
      const tones = {
        default: "border-hairline-2 text-ink-2 bg-surface",
        sage:    "border-sage text-sage bg-sage/[0.08]",
      };
      return (
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full font-mono text-[11px] tracking-[0.12em] uppercase ${tones[tone]} ${className}`}>
          {children}
        </span>
      );
    };

    const Placeholder = ({ tone = "light", caption, className = "", children, style }) => {
      const tones = {
        light: { bg: "bg-paper-2 border-hairline text-ink-3", stripes: "stripes-light",
                 cap: "bg-paper border-hairline text-ink-3" },
        dark:  { bg: "bg-[#1f2620] border-[#2c3328] text-white/55",  stripes: "stripes-dark",
                 cap: "bg-[#1f2620] border-white/15 text-white/65" },
        sage:  { bg: "bg-sage-tint border-[#c4cdc0] text-ink-3",     stripes: "stripes-sage",
                 cap: "bg-paper border-hairline text-ink-3" },
      };
      const t = tones[tone];
      return (
        <div
          className={`relative overflow-hidden border flex items-end p-4 ${t.bg} ${className}`}
          style={style}
        >
          <div className={`absolute inset-0 pointer-events-none ${t.stripes}`} />
          {children}
          {caption && (
            <span className={`relative z-[1] px-2.5 py-1.5 border font-mono text-[10px] tracking-[0.12em] uppercase ${t.cap}`}>
              {caption}
            </span>
          )}
        </div>
      );
    };

    const SectionHead = ({ index, kicker, title, right }) => (
      <div className="flex justify-between items-start gap-10 pt-7 pb-7 border-t border-hairline">
        <div className="flex gap-7 items-start">
          <Index>{index}</Index>
          <div>
            <Mono className="block mb-1.5">{kicker}</Mono>
            <h2 className="font-light text-h2 max-w-[22ch]">{title}</h2>
          </div>
        </div>
        <div className="text-right shrink-0">{right}</div>
      </div>
    );

    /* =====================================================
       Sections
       ===================================================== */

    const Nav = () => (
      <nav className="sticky top-0 z-50 nav-blur border-b border-hairline">
        <Container className="flex items-center justify-between gap-6 py-3.5">
          <a href="#" className="flex items-center gap-2.5 font-medium tracking-[-0.02em] text-[17px]">
            <span className="relative inline-block w-[22px] h-[22px]">
              <span className="absolute inset-0 rounded-full border-[1.4px] border-ink" />
              <span
                className="absolute inset-0 rounded-full border-[1.4px] border-sage bg-sage/[0.12]"
                style={{ transform: 'translateX(7px) scale(0.86)' }}
              />
            </span>
            <span>Gikagraph</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            <a className="text-sm text-ink-2 hover:text-ink transition" href="#platform">Platform</a>
            <a className="text-sm text-ink-2 hover:text-ink transition" href="#manifesto">Manifesto</a>
            <a className="text-sm text-ink-2 hover:text-ink transition" href="#journal">Journal</a>
            <a className="text-sm text-ink-2 hover:text-ink transition" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="hidden md:inline font-mono text-[11px] tracking-[0.12em] uppercase text-ink-3">Vol. 01 · 2026</span>
            <Btn variant="ghost" href="#contact">Request access</Btn>
          </div>
        </Container>
      </nav>
    );

    const Hero = () => (
      <header>
        <Container className="pt-14 pb-20">
          <div className="flex justify-between items-end pb-[18px] border-b border-hairline gap-6 flex-wrap">
            <Mono>Entity Intelligence Platform — New York · Bengaluru</Mono>
            <Mono className="tabular-nums">Issue 01 / May 27, 2026</Mono>
          </div>

          <div className="mt-14">
            <Eyebrow className="mb-7">A new tier of grounded reasoning</Eyebrow>
            <h1 className="font-light text-mega text-balance">
              Turn fragmented data <br />
              into <em className="italic font-light">grounded</em>,<br />
              actionable insight.
            </h1>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-lead text-ink-2 max-w-[56ch] text-pretty">
                Gikagraph builds specialized small language models around your entity graph — so every answer
                carries its citations, its provenance, and the relationships it was reasoned through. Built for
                analysts who refuse to guess.
              </p>
              <div className="flex flex-wrap gap-3.5 mt-8">
                <Btn href="#contact">Request a demo</Btn>
                <Btn variant="ghost" href="#platform">Read the platform</Btn>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="flex justify-between items-end gap-6 mb-[18px]">
                <Index>Fig. 001 — Entity resolution, in motion</Index>
                <Mono className="tabular-nums">004,219 nodes / sec</Mono>
              </div>
              <Placeholder
                tone="light"
                caption="Graph render · drop replacement here"
                style={{ aspectRatio: '4 / 3' }}
              >
                <svg
                  viewBox="0 0 600 450"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full opacity-90"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="g1" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#3a4f3a" stopOpacity="0.18"/>
                      <stop offset="60%" stopColor="#3a4f3a" stopOpacity="0.04"/>
                      <stop offset="100%" stopColor="#3a4f3a" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="600" height="450" fill="url(#g1)"/>
                  <g stroke="#141414" strokeOpacity="0.45" strokeWidth="0.6" fill="none">
                    <path d="M120,90 L300,200 L210,330 L420,260 L500,140 L300,200 L150,260 L210,330 M420,260 L380,380 M500,140 L560,300 L420,260" />
                    <path d="M80,200 L150,260 M150,260 L120,90 M380,380 L560,300" />
                  </g>
                  <g fill="#141414">
                    <circle cx="120" cy="90" r="4"/>
                    <circle cx="300" cy="200" r="6"/>
                    <circle cx="210" cy="330" r="3.5"/>
                    <circle cx="420" cy="260" r="5"/>
                    <circle cx="500" cy="140" r="3.5"/>
                    <circle cx="150" cy="260" r="3"/>
                    <circle cx="80" cy="200" r="2.5"/>
                    <circle cx="380" cy="380" r="3"/>
                    <circle cx="560" cy="300" r="3.5"/>
                  </g>
                  <g fill="#3a4f3a">
                    <circle cx="300" cy="200" r="10" fillOpacity="0.18"/>
                    <circle cx="420" cy="260" r="9"  fillOpacity="0.18"/>
                  </g>
                  <g fontFamily="Space Mono, monospace" fontSize="9" fill="#141414" fillOpacity="0.6">
                    <text x="130" y="85">acme.corp</text>
                    <text x="310" y="195">contract_2718</text>
                    <text x="218" y="346">vendor_a</text>
                    <text x="430" y="255">obligation</text>
                    <text x="508" y="135">jurisdiction</text>
                  </g>
                </svg>
              </Placeholder>
            </div>
          </div>
        </Container>
      </header>
    );

    const Marquee = () => {
      const items = [
        "Specialized small language models",
        "Entity resolution at scale",
        "Provenance-aware retrieval",
        "Ontology-grounded reasoning",
        "GraphRAG, native",
        "Explainable by default",
      ];
      const all = [...items, ...items];
      return (
        <section className="border-t border-b border-hairline bg-paper overflow-hidden py-[18px]" aria-hidden="true">
          <div className="flex gap-[60px] whitespace-nowrap w-max animate-marquee font-mono text-[12px] tracking-[0.16em] uppercase text-ink-2">
            {all.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-[18px]">
                {t}
                <span className="text-[10px] text-sage">✕</span>
              </span>
            ))}
          </div>
        </section>
      );
    };

    const Logos = () => {
      const logos = ["Northwind","Halberd Capital","Atrium Bio","Verity Public","Cordova Insurance","Mercer & Pratt"];
      return (
        <Container className="pt-[72px]">
          <div className="flex justify-between items-baseline mb-7 gap-6">
            <Mono>Operating in production at</Mono>
            <Mono className="tabular-nums">§ 02</Mono>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 border-t border-b border-hairline">
            {logos.map((name, i) => (
              <div
                key={name}
                className={`flex items-center justify-center px-6 py-7 italic font-medium text-base text-ink-3 saturate-0 hover:text-ink transition ${
                  i < logos.length - 1 ? "md:border-r border-hairline" : ""
                } ${(i+1) % 3 !== 0 ? "border-r" : ""} md:[&:nth-child(3n)]:border-r`}
              >
                {name}
              </div>
            ))}
          </div>
        </Container>
      );
    };

    const FeatureCard = ({ index, label, title, body, tone = "light", art, href = "#" }) => {
      const tones = {
        light: "bg-surface border-hairline text-ink",
        ink:   "bg-ink border-ink text-paper",
        quiet: "bg-transparent border-hairline text-ink",
      };
      const monoTone = tone === "ink" ? "text-white/55" : "text-ink-3";
      const proseTone = tone === "ink" ? "text-white/70" : "text-ink-2";
      const linkClass = tone === "ink" ? "text-paper border-white/25 hover:text-paper hover:border-paper" : "";

      return (
        <article className={`border p-7 flex flex-col min-h-[460px] ${tones[tone]}`}>
          <div className="flex justify-between items-baseline">
            <span className={`font-mono text-[11px] tracking-[0.16em] uppercase ${monoTone}`}>{index}</span>
            <span className={`font-mono text-[11px] tracking-[0.16em] uppercase ${monoTone}`}>{label}</span>
          </div>
          <div className="mt-6 mb-7" style={{ height: 200 }}>{art}</div>
          <h3 className="font-normal text-h3 mb-3.5">{title}</h3>
          <p className={`flex-1 leading-[1.65] text-pretty max-w-[56ch] ${proseTone}`} style={{ fontSize: 16 }}>
            {body}
          </p>
          <LinkArrow href={href} className={`self-start mt-6 ${linkClass}`}>Read more →</LinkArrow>
        </article>
      );
    };

    const Triptych = () => (
      <Container className="mt-[var(--sec)] mt-[clamp(80px,10vw,160px)]">
        <SectionHead
          index="§ 03"
          kicker="The platform"
          title={<>Three primitives. <em className="italic font-light">One coherent answer.</em></>}
          right={<LinkArrow href="#platform">All capabilities →</LinkArrow>}
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          <FeatureCard
            index="001"
            label="Resolve"
            tone="light"
            title="Entity resolution that survives messy data."
            body="Match records across systems using fuzzy text, relationships, types and attributes — not just keys. Every cluster carries an audit trail back to the rows that produced it."
            href="#resolve"
            art={
              <Placeholder tone="sage" caption="Cluster · Acme Corp ⇢ 7 sources" className="h-full">
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <g stroke="#3a4f3a" strokeWidth="0.8" fill="none" strokeOpacity="0.55">
                    <path d="M60,100 L180,60 L180,140 L60,100 Z"/>
                    <path d="M180,60 L300,40 M180,140 L300,160 M180,100 L300,100"/>
                    <path d="M300,40 L340,100 L300,160 Z"/>
                  </g>
                  <g fill="#3a4f3a">
                    <circle cx="60"  cy="100" r="3.5"/>
                    <circle cx="180" cy="60"  r="3"/>
                    <circle cx="180" cy="140" r="3"/>
                    <circle cx="180" cy="100" r="6"/>
                    <circle cx="300" cy="40"  r="2.5"/>
                    <circle cx="300" cy="100" r="2.5"/>
                    <circle cx="300" cy="160" r="2.5"/>
                    <circle cx="340" cy="100" r="4"/>
                  </g>
                </svg>
              </Placeholder>
            }
            className="lg:col-span-5"
          />
          {/* col controls via wrappers since FeatureCard already returns article */}
        </div>
      </Container>
    );

    // The above Triptych helper version is replaced by a direct layout below to keep grid spans explicit.
    const TriptychLayout = () => (
      <Container className="mt-[clamp(80px,10vw,160px)]">
        <SectionHead
          index="§ 03"
          kicker="The platform"
          title={<>Three primitives. <em className="italic font-light">One coherent answer.</em></>}
          right={<LinkArrow href="#platform">All capabilities →</LinkArrow>}
        />

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <FeatureCard
              index="001"
              label="Resolve"
              tone="light"
              title="Entity resolution that survives messy data."
              body="Match records across systems using fuzzy text, relationships, types and attributes — not just keys. Every cluster carries an audit trail back to the rows that produced it."
              href="#resolve"
              art={
                <Placeholder tone="sage" caption="Cluster · Acme Corp ⇢ 7 sources" className="h-full">
                  <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
                    <g stroke="#3a4f3a" strokeWidth="0.8" fill="none" strokeOpacity="0.55">
                      <path d="M60,100 L180,60 L180,140 L60,100 Z"/>
                      <path d="M180,60 L300,40 M180,140 L300,160 M180,100 L300,100"/>
                      <path d="M300,40 L340,100 L300,160 Z"/>
                    </g>
                    <g fill="#3a4f3a">
                      <circle cx="60"  cy="100" r="3.5"/>
                      <circle cx="180" cy="60"  r="3"/>
                      <circle cx="180" cy="140" r="3"/>
                      <circle cx="180" cy="100" r="6"/>
                      <circle cx="300" cy="40"  r="2.5"/>
                      <circle cx="300" cy="100" r="2.5"/>
                      <circle cx="300" cy="160" r="2.5"/>
                      <circle cx="340" cy="100" r="4"/>
                    </g>
                  </svg>
                </Placeholder>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <FeatureCard
              index="002"
              label="Reason"
              tone="ink"
              title={<>Specialized small models <em className="italic font-light">grounded</em> in your graph.</>}
              body="Fine-tuned 4B–8B SLMs reason over your ontology with citations baked into every span. Cheaper, faster and far easier to audit than a frontier black box."
              href="#reason"
              art={
                <Placeholder tone="dark" caption="SLM trace · 3 hops" className="h-full">
                  <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
                    <g stroke="#d6dccf" strokeOpacity="0.4" strokeWidth="0.6" fill="none">
                      <path d="M40,40 L120,80 L80,140 L200,160 L260,90 L340,140 L380,60 L260,90 L120,80"/>
                    </g>
                    <g fill="#d6dccf" fillOpacity="0.7">
                      <circle cx="40" cy="40" r="2.5"/>
                      <circle cx="120" cy="80" r="3"/>
                      <circle cx="80" cy="140" r="2.5"/>
                      <circle cx="200" cy="160" r="3"/>
                      <circle cx="260" cy="90" r="4"/>
                      <circle cx="340" cy="140" r="2.5"/>
                      <circle cx="380" cy="60" r="2.5"/>
                    </g>
                    <circle cx="260" cy="90" r="14" fill="#d0a872" fillOpacity="0.25" stroke="#d0a872" strokeOpacity="0.5"/>
                  </svg>
                </Placeholder>
              }
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <FeatureCard
              index="003"
              label="Reveal"
              tone="quiet"
              title="Every answer, fully traced."
              body="Inspect the rows, edges and tokens behind any output. Reproducible, defensible, regulator-ready."
              href="#reveal"
              art={<Placeholder tone="light" caption="Trace view" className="h-full" />}
            />
          </div>
        </div>
      </Container>
    );

    const ManifestoExcerpt = () => (
      <Container className="mt-[clamp(80px,10vw,160px)]" id="manifesto">
        <SectionHead
          index="§ 04"
          kicker="A short manifesto"
          title="On grounded machines."
          right={<LinkArrow href="#">Read in full →</LinkArrow>}
        />

        <div className="mt-14 grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-1">
            <Mono className="tabular-nums">Vol. 01</Mono>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-2">
            <p className="font-light text-h2 leading-[1.04] tracking-[-0.025em] text-balance">
              <em className="italic">&ldquo;A model that cannot show its work is a rumour with confidence.&rdquo;</em>{" "}
              We build Gikagraph because the enterprise cannot run on rumours — it runs on entities, on relationships, and on records that earn their citations. Our wager is that the next decade of AI belongs to systems small enough to be specialized and structured enough to be trusted.
            </p>
            <div className="flex gap-[18px] mt-8 items-center">
              <Placeholder tone="light" className="w-9 h-9 rounded-full p-0" />
              <div>
                <div className="font-medium">Priya Iyer</div>
                <Mono>Co-founder &amp; CEO</Mono>
              </div>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="bg-surface border border-hairline p-8">
              <Mono className="block mb-[18px]">From the journal</Mono>
              <a href="#" className="block">
                <Placeholder tone="light" caption="Issue cover" className="h-[140px] mb-4" />
                <Index className="block mb-2">Essay · 12 min read</Index>
                <h4 className="font-medium text-h4 mb-2.5">Against the black box: a defense of small, specialized models.</h4>
                <Mono>Priya Iyer · May 04, 2026</Mono>
              </a>
            </div>
          </aside>
        </div>
      </Container>
    );

    const Stats = () => {
      const items = [
        { value: "94", sup: "%", label: "Precision lift on entity matching\nvs. embedding-only baselines" },
        { value: "8×", sup: "",  label: "Cheaper than a frontier-model\nGraphRAG pipeline at parity" },
        { value: "1.4", sup: "B", label: "Resolved entities under management\nacross customer deployments" },
        { value: "100", sup: "%", label: "Of answers carry a traceable\nprovenance graph back to source" },
      ];
      return (
        <Container className="mt-[clamp(80px,10vw,160px)]">
          <SectionHead
            index="§ 05"
            kicker="By the numbers"
            title="What grounded reasoning looks like in production."
            right={null}
          />
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6">
            {items.map((s, i) => (
              <div key={i}>
                <div className="font-extralight text-stat">
                  {s.value}
                  {s.sup && (
                    <sup className="font-mono align-super text-[0.35em] text-sage font-normal">{s.sup}</sup>
                  )}
                </div>
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink-3 mt-3.5 whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      );
    };

    const CaseStudy = () => (
      <Container className="mt-[clamp(80px,10vw,160px)]">
        <SectionHead
          index="§ 06"
          kicker="Field notes"
          title="A reading from the field."
          right={<LinkArrow href="#">Open the journal →</LinkArrow>}
        />

        <div className="mt-12 grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-12 lg:col-span-7">
            <Placeholder tone="light" caption="Northwind · 18-month ROI curve" style={{ aspectRatio: '16 / 10' }}>
              <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full opacity-85" aria-hidden="true">
                <defs>
                  <linearGradient id="case" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3a4f3a" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#3a4f3a" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect width="800" height="500" fill="url(#case)"/>
                <g stroke="#141414" strokeOpacity="0.4" strokeWidth="0.7" fill="none">
                  <path d="M50,420 C 220,260 400,360 540,200 S 740,80 780,40"/>
                  <path d="M50,440 C 220,330 400,400 540,260 S 740,160 780,120"/>
                  <path d="M50,460 C 220,400 400,440 540,340 S 740,260 780,210"/>
                </g>
                <g fontFamily="Space Mono, monospace" fontSize="10" fill="#141414" fillOpacity="0.55">
                  <text x="60" y="60">Q1</text>
                  <text x="260" y="60">Q2</text>
                  <text x="460" y="60">Q3</text>
                  <text x="660" y="60">Q4</text>
                </g>
              </svg>
            </Placeholder>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div>
              <Chip tone="sage">Case study</Chip>
              <h3 className="font-normal text-h3 mt-6 max-w-[18ch]">
                Northwind retired four data-reconciliation pipelines in 90 days.
              </h3>
              <p className="leading-[1.65] text-ink-2 mt-4.5 max-w-[64ch] text-pretty" style={{ marginTop: 18 }}>
                A $14B logistics operator replaced a hand-built entity-matching stack with Gikagraph — cutting reconciliation latency from 36 hours to 11 minutes and giving analysts a graph they can actually defend in audit.
              </p>
            </div>
            <ul className="flex flex-col gap-[18px] list-none p-0 m-0">
              {[
                ["Reconciliation latency", "36h → 11min"],
                ["Pipelines retired", "4"],
                ["Time to first answer", "28 days"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between items-baseline pt-[18px] border-t border-hairline">
                  <Mono>{k}</Mono>
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
            <LinkArrow href="#" className="self-start">Read the dispatch →</LinkArrow>
          </div>
        </div>
      </Container>
    );

    const FAQ = () => {
      const items = [
        {
          q: "How is this different from frontier-model GraphRAG?",
          a: "Frontier models read your graph through a straw. We fine-tune specialized 4–8B SLMs on the ontology itself, so reasoning happens in the shape of your data. The result: lower cost, higher precision, and citations that point at rows, not paragraphs.",
        },
        {
          q: "Where does the data live?",
          a: "In your environment. Gikagraph deploys into a customer-managed VPC or on-prem cluster. Source records never leave your perimeter; only embeddings, indices and model artefacts ever touch our managed control plane — and only when you opt in.",
        },
        {
          q: "What does the integration look like?",
          a: "Connectors for Snowflake, Databricks, Postgres, S3 and the usual suspects. Bring an ontology or let us infer one. Most teams have a working graph and their first SLM specialization inside three weeks.",
        },
        {
          q: "How is provenance enforced?",
          a: "Every generated span is bound at decode time to the subgraph that supported it. If a span has no support, the model is required to abstain. Every answer ships with a re-runnable trace.",
        },
      ];
      const [open, setOpen] = useState(0);
      return (
        <Container className="mt-[clamp(80px,10vw,160px)]">
          <SectionHead
            index="§ 07"
            kicker="Common questions"
            title="For the technically curious."
            right={null}
          />
          <div className="mt-8">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`border-t border-hairline py-7 cursor-pointer ${i === items.length - 1 ? "border-b" : ""}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="flex justify-between items-center gap-5">
                    <div className="font-light text-[clamp(22px,2.2vw,28px)] tracking-[-0.018em] leading-[1.15]">{item.q}</div>
                    <div className={`relative w-7 h-7 rounded-full border transition ${isOpen ? "bg-ink border-ink" : "border-hairline-2"} shrink-0`}>
                      <span className={`absolute top-1/2 left-1/2 w-[11px] h-px -translate-x-1/2 -translate-y-1/2 ${isOpen ? "bg-paper" : "bg-ink"}`} />
                      <span
                        className={`absolute top-1/2 left-1/2 w-px h-[11px] transition-transform ${isOpen ? "bg-paper rotate-90" : "bg-ink"}`}
                        style={{ transform: `translate(-50%, -50%) rotate(${isOpen ? 90 : 0}deg)` }}
                      />
                    </div>
                  </div>
                  <div
                    className="overflow-hidden transition-[max-height,margin-top] duration-300 text-ink-2 leading-[1.6] max-w-[64ch]"
                    style={{ maxHeight: isOpen ? 400 : 0, marginTop: isOpen ? 18 : 0 }}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      );
    };

    const CTA = () => (
      <Container className="mt-[clamp(80px,10vw,160px)]">
        <div className="bg-ink text-paper border border-ink grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 items-end" style={{ padding: 'clamp(40px,6vw,88px)' }}>
          <div>
            <Mono className="block mb-6 text-white/55">§ 08 — Begin</Mono>
            <h2 className="font-light text-display text-balance text-paper">
              Bring your <em className="italic font-light">entities</em>. <br/>
              We&rsquo;ll bring the model.
            </h2>
          </div>
          <div>
            <p className="text-white/70 leading-[1.65] max-w-[38ch]">
              A 45-minute call with an applied scientist. We&rsquo;ll show you a working specialized SLM grounded on a sample of your graph — before you sign anything.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-7">
              <Btn variant="sage" href="#contact">Request a demo</Btn>
              <Btn variant="ghostDark" href="#manifesto">Read the manifesto</Btn>
            </div>
          </div>
        </div>
      </Container>
    );

    const Footer = () => (
      <footer className="bg-ink text-paper mt-[clamp(80px,10vw,160px)] pt-20 pb-8">
        <Container>
          <h2 className="font-light text-mega text-paper text-balance">
            Grounded <em className="italic font-light text-sage-tint">machines</em>, <br />
            for serious work.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mt-16 pt-12 border-t border-white/10">
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-normal">Gikagraph</h5>
              <p className="text-white/70 text-sm max-w-[38ch]">
                Entity intelligence built around specialized small language models. Operated by analysts, scientists and engineers between New York and Bengaluru.
              </p>
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-normal">Platform</h5>
              {["Capabilities","Entity resolution","Specialized SLMs","Provenance"].map(x => (
                <a key={x} href="#" className="block py-1 text-white/78 text-sm hover:text-white">{x}</a>
              ))}
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-normal">Company</h5>
              {["Manifesto","Journal","Contact","Security"].map(x => (
                <a key={x} href="#" className="block py-1 text-white/78 text-sm hover:text-white">{x}</a>
              ))}
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-normal">Connect</h5>
              {["hello@gikagraph.ai","LinkedIn","arXiv","GitHub"].map(x => (
                <a key={x} href="#" className="block py-1 text-white/78 text-sm hover:text-white">{x}</a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pt-10 mt-16 border-t border-white/10 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50">
            <span>© 2026 Gikagraph, Inc. · All rights reserved.</span>
            <span>v. 1.0 · Vol. 01 / May 27, 2026</span>
          </div>
        </Container>
      </footer>
    );

    /* =====================================================
       App
       ===================================================== */

    function Home() {
      return (
        <div>
          <Nav />
          <Hero />
          <Marquee />
          <Logos />
          <TriptychLayout />
          <ManifestoExcerpt />
          <Stats />
          <CaseStudy />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
  </script>
</body>
</html>
