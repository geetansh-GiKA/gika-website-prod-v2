import FlowArt, { FlowSection } from "./StoryScroll";
import { GlobeViz } from "./GlobeViz";

const sections = [
  {
    num: "01",
    label: "Who we are",
    heading: (
      <>
        Create
        <br />
        Without
        <br />
        Limits
      </>
    ),
    body: "We believe every artist deserves a platform that puts creativity first. No algorithms, no noise — just pure art and the people who make it.",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80&auto=format&fit=crop",
    imgCaption: "FIG. 01 · THE CANVAS, OPENED",
    bg: "#EDEAE3",
    dark: true,
  },
  {
    num: "02",
    label: "The mission",
    heading: (
      <>
        Art
        <br />
        First.
        <br />
        Always.
      </>
    ),
    body: "A global community built for artists, by artists. We're rewriting the rules of how creative work gets seen, shared, and valued.",
    img: "",
    imgCaption: "FIG. 02 · THE ARCHIVE, ORDERED",
    bg: "#111",
    dark: false,
  },
  {
    num: "03",
    label: "How it works",
    heading: (
      <>
        Show
        <br />
        Up.
        <br />
        Stand
        <br />
        Out.
      </>
    ),
    body: "Three steps. Zero complexity. Your creative career starts moving the moment you sign up.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop",
    imgCaption: "FIG. 03 · THE PROCESS, DISTILLED",
    bg: "#EDEAE3",
    dark: true,
  },
  {
    num: "04",
    label: "The vision",
    heading: (
      <>
        Future
        <br />
        Of
        <br />
        Art
      </>
    ),
    body: "We're not just building a platform. We're building a movement. The art world has been broken for decades — we're here to change that.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80&auto=format&fit=crop",
    imgCaption: "FIG. 04 · THE HORIZON, NEAR",
    bg: "#111",
    dark: false,
  },
  {
    num: "05",
    label: "Join us",
    heading: (
      <>
        Ready
        <br />
        To
        <br />
        Begin?
      </>
    ),
    body: "Take control of your creative journey. Join now and let's shape the future of the art world together.",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80&auto=format&fit=crop",
    imgCaption: "FIG. 05 · THE STAGE, YOURS",
    bg: "#EDEAE3",
    dark: true,
  },
];

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Gikagraph story">
      {sections.map(({ num, label, heading, body, img, imgCaption, bg, dark }) => {
        const text = dark ? "#1a1a1a" : "#f0ece4";
        const muted = dark ? "rgba(26,26,26,0.5)" : "rgba(240,236,228,0.5)";
        const divider = dark ? "rgba(26,26,26,0.15)" : "rgba(240,236,228,0.15)";

        return (
          <FlowSection
            key={num}
            aria-label={label}
            style={{ backgroundColor: bg, color: text }}
          >
            {/* two-column grid */}
            <div className="grid h-full min-h-screen grid-cols-1 lg:grid-cols-2">
              {/* LEFT — text column */}
              <div className="flex flex-col justify-between px-[4vw] pt-[clamp(2rem,6vw,5rem)] pb-[4vw]">
                {/* top row: number + label */}
                <div className="flex items-start gap-8">
                  <span
                    className="font-light leading-none select-none"
                    style={{
                      fontSize: "clamp(3rem,8vw,7rem)",
                      color: text,
                      opacity: 0.15,
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <div className="pt-2">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                      style={{ color: muted }}
                    >
                      {label}
                    </p>
                    <div
                      className="mt-3 h-px w-8"
                      style={{ backgroundColor: divider }}
                    />
                  </div>
                </div>

                {/* heading */}
                <h2
                  className="font-extralight leading-[0.88] tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(2.8rem,7vw,8rem)",
                    color: text,
                  }}
                >
                  {heading}
                </h2>

                {/* body */}
                <div>
                  <div
                    className="mb-6 h-px w-full"
                    style={{ backgroundColor: divider }}
                  />
                  <p
                    className="max-w-[44ch] font-light leading-relaxed"
                    style={{
                      fontSize: "clamp(0.8rem,1.1vw,1rem)",
                      color: text,
                      opacity: 0.75,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>

              {/* RIGHT — image / viz column */}
              <div className="relative hidden overflow-hidden lg:block">
                {num === "02" ? (
                  <GlobeViz />
                ) : (
                  <>
                    <img
                      src={img!}
                      alt={imgCaption}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-6 right-6">
                      <span
                        className="inline-block px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{
                          backgroundColor: dark ? "rgba(237,234,227,0.9)" : "rgba(17,17,17,0.75)",
                          color: dark ? "#1a1a1a" : "#f0ece4",
                        }}
                      >
                        {imgCaption}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </FlowSection>
        );
      })}
    </FlowArt>
  );
}
