<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Against the black box — Gikagraph Journal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/styles.css" />
  <style>
    .prose p {
      margin: 0 0 28px;
      font-size: clamp(18px, 1.4vw, 21px);
      line-height: 1.62;
      color: var(--ink-2);
      text-wrap: pretty;
    }
    .prose p strong { color: var(--ink); font-weight: 600; }
    .prose p em { font-weight: 300; font-style: italic; }
    .prose h3 {
      margin: 56px 0 20px;
      font-weight: 400;
      font-size: clamp(22px, 2.1vw, 28px);
      letter-spacing: -0.02em;
      color: var(--ink);
    }
    .prose blockquote {
      margin: 40px 0;
      padding: 4px 0 4px 28px;
      border-left: 2px solid var(--sage);
      font-weight: 300;
      font-size: clamp(20px, 1.9vw, 26px);
      line-height: 1.35;
      letter-spacing: -0.018em;
      color: var(--ink);
      font-style: italic;
      text-wrap: balance;
    }
    .prose blockquote cite {
      display: block;
      margin-top: 14px;
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-3);
      font-style: normal;
    }
    .prose figure { margin: 40px 0; }
    .prose figcaption {
      margin-top: 12px;
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-3);
      display: flex;
      justify-content: space-between;
      gap: 24px;
    }
    .prose ul {
      margin: 0 0 28px;
      padding-left: 22px;
      font-size: 17px;
      color: var(--ink-2);
      line-height: 1.6;
    }
    .prose ul li { margin-bottom: 8px; }
    .prose-dropcap::first-letter {
      font-weight: 200;
      font-size: clamp(80px, 7vw, 132px);
      line-height: 0.86;
      float: left;
      padding: 8px 16px 0 0;
      color: var(--ink);
      letter-spacing: -0.04em;
    }
  </style>
</head>
<body data-screen-label="04 Journal post">

  <!-- ============ NAV ============ -->
  <nav class="nav">
    <div class="container nav__inner">
      <a class="nav__brand" href="index.html">
        <span class="nav__mark" aria-hidden="true"></span>
        <span>Gikagraph</span>
      </a>
      <div class="nav__links">
        <a href="product.html">Platform</a>
        <a href="manifesto.html">Manifesto</a>
        <a href="journal.html">Journal</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="nav__right">
        <span class="nav__meta">Vol. 01 · 2026</span>
        <a class="btn btn--ghost" href="contact.html">
          Request access
          <span class="arrow"></span>
        </a>
      </div>
    </div>
  </nav>

  <!-- ============ MASTHEAD ============ -->
  <header class="container" style="padding-top: 40px; padding-bottom: 64px;">
    <div class="row hairline-b" style="justify-content: space-between; align-items: flex-end; padding-bottom: 18px; gap: 24px; flex-wrap: wrap;">
      <a href="journal.html" class="mono" style="color: var(--ink-2);">← Gikagraph Journal · Issue 03</a>
      <span class="mono num-mono">Essay · 12 min read · May 04, 2026</span>
    </div>

    <div class="edit-grid" style="margin-top: 56px;">
      <div style="grid-column: 1 / span 12;">
        <span class="eyebrow" style="margin-bottom: 28px;">
          <span class="dot"></span>
          Essay
        </span>
        <h1 class="display" style="text-wrap: balance;">
          Against the <em class="italic">black box</em>:<br/>
          a defense of small, <br/>
          specialized models.
        </h1>
      </div>
    </div>

    <div class="edit-grid" style="margin-top: 56px;">
      <div style="grid-column: 1 / span 6;">
        <p class="lead">
          Frontier models are extraordinary general instruments. They are also the wrong tool for the question your CFO is going to ask on Friday. A practitioner&rsquo;s case for fine-tuned specialists that you can hand to an auditor.
        </p>
      </div>
      <div style="grid-column: 8 / span 5;">
        <div class="row" style="gap: 32px;">
          <div class="row" style="gap: 12px; align-items: center;">
            <span class="placeholder" style="width: 44px; height: 44px; border-radius: 50%; padding: 0;"></span>
            <div>
              <div style="font-weight: 500;">Priya Iyer</div>
              <div class="mono">Co-founder &amp; CEO</div>
            </div>
          </div>
          <div>
            <div class="mono" style="margin-bottom: 4px;">Filed</div>
            <div style="font-weight: 500;">May 4, 2026</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- ============ HERO IMAGE ============ -->
  <section class="container" style="margin-bottom: 80px;">
    <div class="placeholder" style="aspect-ratio: 21/9;">
      <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" style="position:absolute; inset:0; width:100%; height:100%; opacity: 0.92;" aria-hidden="true">
        <defs>
          <radialGradient id="hg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#3a4f3a" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#3a4f3a" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="hl" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#141414" stop-opacity="0.0"/>
            <stop offset="50%" stop-color="#141414" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#141414" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <rect width="1400" height="600" fill="url(#hg)"/>
        <g stroke="#141414" stroke-opacity="0.32" stroke-width="0.6" fill="none">
          <path d="M0,500 C 200,420 300,460 460,360 C 620,260 740,300 900,220 C 1060,140 1180,160 1400,80"/>
          <path d="M0,520 C 200,460 300,490 460,400 C 620,310 740,340 900,260 C 1060,180 1180,200 1400,120"/>
          <path d="M0,540 C 200,500 300,520 460,440 C 620,360 740,380 900,300 C 1060,220 1180,240 1400,160"/>
          <path d="M0,560 C 200,540 300,550 460,480 C 620,410 740,420 900,340 C 1060,260 1180,280 1400,200"/>
        </g>
        <g stroke="#3a4f3a" stroke-width="1.2" fill="none" stroke-opacity="0.85">
          <path d="M0,480 C 200,380 300,420 460,300 C 620,180 740,220 900,140 C 1060,60 1180,100 1400,40"/>
        </g>
        <g fill="#141414" opacity="0.55">
          <circle cx="220" cy="396" r="2.5"/>
          <circle cx="460" cy="300" r="3.5"/>
          <circle cx="700" cy="220" r="3"/>
          <circle cx="900" cy="140" r="4"/>
          <circle cx="1180" cy="80" r="3"/>
        </g>
        <g font-family="Space Mono, monospace" font-size="10" fill="#141414" fill-opacity="0.45">
          <text x="40" y="40">Fig. 003 — Precision @ k by model class</text>
          <text x="1240" y="40">y = answer accuracy</text>
          <text x="40" y="585">2024</text>
          <text x="350" y="585">Q2</text>
          <text x="660" y="585">Q4</text>
          <text x="970" y="585">2025</text>
          <text x="1340" y="585">Q2</text>
        </g>
      </svg>
      <span class="placeholder__caption">Fig. 003 — Specialist 4B vs. frontier 175B, 18-month tracking</span>
    </div>
  </section>

  <!-- ============ ARTICLE ============ -->
  <article class="container">
    <div class="edit-grid" style="align-items: start;">
      <!-- Sidebar -->
      <aside style="grid-column: 1 / span 2; position: sticky; top: 100px;">
        <div style="margin-bottom: 32px;">
          <span class="mono" style="display:block; margin-bottom: 12px;">Sections</span>
          <ol style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
            <li><a href="#part-1" style="font-size: 13px; color: var(--ink-2);">01 · The bet</a></li>
            <li><a href="#part-2" style="font-size: 13px; color: var(--ink-2);">02 · The evidence</a></li>
            <li><a href="#part-3" style="font-size: 13px; color: var(--ink-2);">03 · What changes</a></li>
            <li><a href="#part-4" style="font-size: 13px; color: var(--ink-2);">04 · A worked example</a></li>
          </ol>
        </div>
        <div>
          <span class="mono" style="display:block; margin-bottom: 12px;">Share</span>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="#" style="font-size: 13px; color: var(--ink-2);">↗ X</a>
            <a href="#" style="font-size: 13px; color: var(--ink-2);">↗ LinkedIn</a>
            <a href="#" style="font-size: 13px; color: var(--ink-2);">↗ Copy link</a>
          </div>
        </div>
      </aside>

      <!-- Body -->
      <div class="prose" style="grid-column: 4 / span 7;">
        <p class="prose-dropcap" id="part-1">
          There is a question that has been asked of every analyst I&rsquo;ve worked with in the last eighteen months: <em>can you make the model answer this?</em> The verb is &ldquo;make.&rdquo; The implication is that the model is in a foreign register, and the analyst&rsquo;s job is to coax it into the right one. The model is, in other words, a tourist. It speaks the language, but it doesn&rsquo;t live there.
        </p>
        <p>
          This essay is about what it looks like to build a model that lives there. Not by training a 1-trillion-parameter generalist on more of the internet, but by training a 4-billion-parameter specialist on the shape of a single enterprise &mdash; its ontology, its records, its relationships. The case I want to make is empirical, not philosophical: a specialist of this size, trained correctly, will beat a frontier generalist on enterprise queries, while costing roughly an eighth as much to operate. And it will do so while telling you exactly which row produced each token of its answer.
        </p>

        <h3 id="part-2">02 · The evidence</h3>
        <p>
          Across thirty-two enterprise pilots in 2025, we benchmarked Gikagraph&rsquo;s 4B specialist (<em>gika-slm-4b</em>) against three frontier systems on a battery of 412 customer-defined questions. The questions were not synthetic. They were questions analysts actually asked, on actual graphs, with actual answer keys produced by humans. The headline result:
        </p>
        <ul>
          <li><strong>Specialist precision @ 1:</strong> 0.94 (frontier baseline: 0.71).</li>
          <li><strong>Cost per query:</strong> $0.0003 (frontier baseline: $0.0024, ~8×).</li>
          <li><strong>Hallucination rate</strong> (entity not in graph): 0.0% (frontier baseline: 6.4%).</li>
          <li><strong>Trace completeness:</strong> 100% (frontier baseline: not applicable).</li>
        </ul>
        <p>
          The numbers are not a fluke of a particular benchmark. They are a structural property of what happens when a model is specialized to an ontology: it stops needing to <em>guess</em> the shape of a customer record.
        </p>

        <blockquote>
          The cheapest correct answer is the one a model was trained to be incapable of getting wrong.
          <cite>— Working paper 03/26, §4.2</cite>
        </blockquote>

        <h3 id="part-3">03 · What changes when the model lives there</h3>
        <p>
          A model trained on your ontology can do three things a generalist cannot. First, it can refuse correctly. When evidence is absent in the graph, it abstains; this is not a sampling artifact, it is a property of the constrained decoder. Second, it can <em>cite</em> at the edge level. Every span in every answer carries an inline reference to the rows and relationships that produced it. Third, it can be specialized again, cheaply, when your data changes.
        </p>
        <p>
          These three properties &mdash; <em>refusal</em>, <em>citation</em>, <em>refit</em> &mdash; are what convert a clever instrument into a piece of operating infrastructure. They are what an auditor needs. They are what your risk committee was asking for, in language that did not contain the word &ldquo;auditor.&rdquo;
        </p>

        <figure>
          <div class="placeholder" style="aspect-ratio: 16/9;">
            <svg viewBox="0 0 1200 675" preserveAspectRatio="xMidYMid slice" style="position:absolute; inset:0; width:100%; height:100%;" aria-hidden="true">
              <defs>
                <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3a4f3a" stop-opacity="0.15"/>
                  <stop offset="100%" stop-color="#3a4f3a" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <rect width="1200" height="675" fill="url(#fg)"/>
              <!-- bars -->
              <g fill="#141414">
                <rect x="120"  y="320" width="40" height="280"/>
                <rect x="220"  y="380" width="40" height="220"/>
                <rect x="320"  y="200" width="40" height="400"/>
                <rect x="420"  y="260" width="40" height="340"/>
                <rect x="520"  y="160" width="40" height="440"/>
                <rect x="620"  y="220" width="40" height="380"/>
                <rect x="720"  y="120" width="40" height="480"/>
                <rect x="820"  y="280" width="40" height="320"/>
                <rect x="920"  y="160" width="40" height="440"/>
                <rect x="1020" y="80"  width="40" height="520"/>
              </g>
              <g fill="#3a4f3a">
                <rect x="170"  y="220" width="40" height="380"/>
                <rect x="270"  y="180" width="40" height="420"/>
                <rect x="370"  y="100" width="40" height="500"/>
                <rect x="470"  y="160" width="40" height="440"/>
                <rect x="570"  y="80"  width="40" height="520"/>
                <rect x="670"  y="120" width="40" height="480"/>
                <rect x="770"  y="60"  width="40" height="540"/>
                <rect x="870"  y="180" width="40" height="420"/>
                <rect x="970"  y="80"  width="40" height="520"/>
                <rect x="1070" y="40"  width="40" height="560"/>
              </g>
              <line x1="80" y1="600" x2="1140" y2="600" stroke="#141414" stroke-opacity="0.4"/>
              <g font-family="Space Mono, monospace" font-size="10" fill="#141414" fill-opacity="0.55">
                <text x="80" y="80">Precision @ 1</text>
                <text x="80" y="100">■ frontier · ■ specialist</text>
                <text x="120" y="630">Q1</text>
                <text x="320" y="630">Q2</text>
                <text x="520" y="630">Q3</text>
                <text x="720" y="630">Q4</text>
                <text x="920" y="630">Q5</text>
              </g>
            </svg>
            <span class="placeholder__caption">Specialist vs. frontier on customer-defined questions, by quarter</span>
          </div>
          <figcaption>
            <span>Fig. 004 — Gikagraph internal benchmark, n = 412</span>
            <span>Source: Working paper 03 / 26</span>
          </figcaption>
        </figure>

        <h3 id="part-4">04 · A worked example: the supplier consolidation question</h3>
        <p>
          A CFO at one of our enterprise customers asked, in plain language: <em>which subsidiaries of Acme Corp are exposed to the Q3 supplier consolidation?</em> The question requires resolving three entities (subsidiaries, supplier, time period), traversing four hops in the contract graph, and computing exposure as a sum over open obligations.
        </p>
        <p>
          A frontier model, handed the warehouse, will produce an answer in fluent paragraphs. It will be wrong about which subsidiaries are in scope (it conflates a 2024 divestiture), it will hallucinate an obligation (because the supplier&rsquo;s legal name varies), and it cannot tell you which contract IDs informed its number. The specialist returns a short, terse answer with five inline citations and a re-runnable trace ID. The CFO can click the trace ID in the next meeting and pull up the contracts.
        </p>
        <p>
          That, more than anything, is what we are selling: not a smarter model, but a model that produces a trace your CFO can pull up in the next meeting.
        </p>

        <!-- end signature -->
        <div style="margin-top: 64px; padding: 28px 0; border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline); display: flex; gap: 18px; align-items: center;">
          <span class="placeholder" style="width: 56px; height: 56px; border-radius: 50%; padding: 0;"></span>
          <div>
            <div style="font-weight: 500;">Priya Iyer</div>
            <div class="mono" style="margin-top: 2px;">Co-founder &amp; CEO, Gikagraph</div>
            <p class="body-prose" style="font-size: 14px; margin-top: 8px; max-width: 56ch;">
              Previously knowledge graph lead at Stardog. Writes occasionally on grounded systems and the political economy of enterprise AI.
            </p>
          </div>
        </div>
      </div>

      <!-- Marginalia -->
      <aside style="grid-column: 12 / span 1;">
        <span class="mono" style="display:block; margin-bottom: 12px; writing-mode: vertical-rl; transform: rotate(180deg); letter-spacing: 0.24em;">↳ Notes in the margin</span>
      </aside>
    </div>
  </article>

  <!-- ============ RELATED ============ -->
  <section class="container" style="margin-top: var(--section-y);">
    <div class="section-head">
      <div class="section-head__left">
        <span class="index">§ Cont&rsquo;d</span>
        <div>
          <span class="mono" style="display:block; margin-bottom: 6px;">Keep reading</span>
          <h2 class="h2">Adjacent dispatches.</h2>
        </div>
      </div>
      <div class="section-head__right">
        <a class="link-arrow" href="journal.html">All journal entries →</a>
      </div>
    </div>

    <div class="grid-12" style="margin-top: 40px;">
      <article style="grid-column: span 4;">
        <div class="placeholder" style="aspect-ratio: 4/3; margin-bottom: 20px;">
          <span class="placeholder__caption">Cover · Issue 04</span>
        </div>
        <div class="row" style="justify-content: space-between; margin-bottom: 12px;">
          <span class="chip">Field note</span>
          <span class="mono">8 min</span>
        </div>
        <h3 class="h3" style="margin-bottom: 8px;">Why ontology beats embedding in regulated industries.</h3>
        <p class="body-prose" style="font-size: 14px;">A short field note from a banking pilot. Why the ROC curve is the wrong success metric for grounded systems.</p>
        <a class="link-arrow" href="#" style="margin-top: 16px; display: inline-flex;">Read →</a>
      </article>
      <article style="grid-column: span 4;">
        <div class="placeholder placeholder--sage" style="aspect-ratio: 4/3; margin-bottom: 20px;">
          <span class="placeholder__caption">Cover · Issue 02</span>
        </div>
        <div class="row" style="justify-content: space-between; margin-bottom: 12px;">
          <span class="chip">Research</span>
          <span class="mono">15 min</span>
        </div>
        <h3 class="h3" style="margin-bottom: 8px;">Constrained decoding, mechanistically.</h3>
        <p class="body-prose" style="font-size: 14px;">Linh Tran on the internals of binding spans to subgraphs at the moment of generation. With diagrams.</p>
        <a class="link-arrow" href="#" style="margin-top: 16px; display: inline-flex;">Read →</a>
      </article>
      <article style="grid-column: span 4;">
        <div class="placeholder placeholder--dark" style="aspect-ratio: 4/3; margin-bottom: 20px;">
          <span class="placeholder__caption">Cover · Issue 01</span>
        </div>
        <div class="row" style="justify-content: space-between; margin-bottom: 12px;">
          <span class="chip">Dispatch</span>
          <span class="mono">11 min</span>
        </div>
        <h3 class="h3" style="margin-bottom: 8px;">A 90-day diary from the Northwind pilot.</h3>
        <p class="body-prose" style="font-size: 14px;">What we shipped, what we deleted, what we got wrong, and the four-line schema change that fixed everything.</p>
        <a class="link-arrow" href="#" style="margin-top: 16px; display: inline-flex;">Read →</a>
      </article>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="container" style="margin-top: var(--section-y);">
    <div class="card card--ink" style="padding: clamp(40px, 6vw, 80px);">
      <div class="edit-grid" style="align-items: end;">
        <div style="grid-column: 1 / span 6;">
          <span class="mono" style="display:block; margin-bottom: 18px; color: rgba(255,255,255,0.55);">The journal · a quarterly</span>
          <h2 class="display" style="color: var(--paper); text-wrap: balance;">
            Four times a year. <em class="italic">No newsletter sludge.</em>
          </h2>
        </div>
        <div style="grid-column: 8 / span 5;">
          <p class="body-prose" style="color: rgba(255,255,255,0.7); margin-bottom: 28px;">
            Field notes, research dispatches and an occasional polemic from the team. We&rsquo;ll never sell your address, and we won&rsquo;t pretend a product launch is a thoughtpiece.
          </p>
          <form style="display: flex; gap: 12px; align-items: flex-end;" onsubmit="event.preventDefault(); this.querySelector('input').value=''; this.querySelector('.confirm').style.opacity=1;">
            <label style="flex: 1;">
              <span class="mono" style="display:block; margin-bottom: 6px; color: rgba(255,255,255,0.55);">Email</span>
              <input class="input" type="email" placeholder="you@company.com" required style="color: var(--paper); border-bottom-color: rgba(255,255,255,0.25);" />
            </label>
            <button class="btn btn--sage" type="submit">Subscribe<span class="arrow"></span></button>
          </form>
          <span class="confirm mono" style="display:block; margin-top: 14px; color: var(--sage-tint); opacity: 0; transition: opacity .25s ease;">↳ subscribed. expect Issue 04 in August.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="footer">
    <div class="container">
      <h2 class="display-mega" style="text-wrap: balance;">
        Grounded <em class="italic" style="color: var(--sage-tint);">machines</em>, <br/>
        for serious work.
      </h2>
      <div class="footer-grid">
        <div class="footer-col">
          <h5>Gikagraph</h5>
          <p style="color: rgba(255,255,255,0.7); font-size: 14px; max-width: 38ch;">
            Entity intelligence built around specialized small language models. Operated by analysts, scientists and engineers between New York and Bengaluru.
          </p>
        </div>
        <div class="footer-col">
          <h5>Platform</h5>
          <a href="product.html">Capabilities</a>
          <a href="product.html#resolve">Entity resolution</a>
          <a href="product.html#reason">Specialized SLMs</a>
          <a href="product.html#reveal">Provenance</a>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <a href="manifesto.html">Manifesto</a>
          <a href="journal.html">Journal</a>
          <a href="contact.html">Contact</a>
          <a href="#">Security</a>
        </div>
        <div class="footer-col">
          <h5>Connect</h5>
          <a href="#"><span class="__cf_email__" data-cfemail="4f272a2323200f2826242e283d2e3f27612e26">[email&#160;protected]</span></a>
          <a href="#">LinkedIn</a>
          <a href="#">arXiv</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Gikagraph, Inc. · All rights reserved.</span>
        <span>v. 1.0 · Vol. 01 / May 27, 2026</span>
      </div>
    </div>
  </footer>

  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="assets/site.js"></script>
</body>
</html>
