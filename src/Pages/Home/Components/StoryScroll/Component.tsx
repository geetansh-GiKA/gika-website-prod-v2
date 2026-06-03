import FlowArt, { FlowSection } from './StoryScroll'
import { sections } from './sections'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'

const total = sections.length

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Gikagraph story">
      {sections.map(({ num, label, heading, body, bullets, bulletsLabel, imageSrc }) => {
        const statBullets = bullets.filter((b) => /^\d/.test(b))
        const textBullets = bullets.filter((b) => !/^\d/.test(b))

        return (
          <FlowSection key={num} aria-label={label}>
            <div className="flex h-screen flex-col gap-2 bg-paper p-2">
              {/* IMAGE PANEL */}
              <div className="relative flex-3 overflow-hidden">
                <img src={imageSrc} alt="" className="h-full w-full object-cover" loading="eager" />
                {/* gradient so text is legible */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,12,8,0.72) 0%, rgba(10,12,8,0.18) 40%, transparent 70%)',
                  }}
                />

                {/* bottom-left: section number + heading */}
                <div className="absolute bottom-0 left-0 p-6 pb-7">
                  <p
                    className="mb-1 font-mono font-semibold uppercase tracking-[0.22em] text-white/50"
                    style={{ fontSize: '0.65rem' }}
                  >
                    {num} / {String(total).padStart(2, '0')}
                  </p>
                  <h2
                    className="font-sans font-semibold leading-none tracking-tight text-white"
                    style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
                  >
                    {heading}
                  </h2>
                </div>

                {/* top-right: label chip */}
                <div className="absolute right-5 top-5">
                  <span
                    className="font-mono font-semibold uppercase tracking-[0.18em] text-white/60"
                    style={{ fontSize: '0.6rem' }}
                  >
                    {label}
                  </span>
                </div>
              </div>

              {/* BOTTOM — two-column panel */}
              <div className="flex flex-1 gap-2">
                {num === '01' && (
                  <Card1
                    body={body}
                    bulletsLabel={bulletsLabel}
                    statBullets={statBullets}
                    textBullets={textBullets}
                    num={num}
                    total={total}
                  />
                )}
                {num === '02' && (
                  <Card2
                    body={body}
                    bulletsLabel={bulletsLabel}
                    textBullets={textBullets}
                    num={num}
                    total={total}
                  />
                )}
              </div>
            </div>
          </FlowSection>
        )
      })}
    </FlowArt>
  )
}
