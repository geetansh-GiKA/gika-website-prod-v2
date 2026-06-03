interface Card2Props {
  body: string
  bulletsLabel: string
  textBullets: string[]
  num: string
  total: number
}

const orbitIcons = [
  { src: '/DataConnectors/aws.svg', alt: 'AWS', orbit: 0, angle: 30 },
  { src: '/DataConnectors/google-drive.svg', alt: 'Google Drive', orbit: 0, angle: 150 },
  { src: '/DataConnectors/mongodb.svg', alt: 'MongoDB', orbit: 0, angle: 270 },
  { src: '/DataConnectors/dropbox.svg', alt: 'Dropbox', orbit: 1, angle: 60 },
  { src: '/DataConnectors/mysql.png', alt: 'MySQL', orbit: 1, angle: 180 },
  { src: '/DataConnectors/onedrive.svg', alt: 'OneDrive', orbit: 1, angle: 300 },
  { src: '/AI/Claude.png', alt: 'Claude', orbit: 2, angle: 45 },
  { src: '/AI/chatgpt.png', alt: 'ChatGPT', orbit: 2, angle: 165 },
  { src: '/AI/grok.png', alt: 'Grok', orbit: 2, angle: 285 },
]

const orbitRadii = [72, 130, 190]
const orbitDurations = [18, 28, 38]

const bulletIcons: Record<string, string> = {
  'Full data ownership': '◈',
  'Entity resolution': '⬡',
  'Single source of truth': '◎',
  'Connected data sources': '⊕',
}

export default function Card2({ body, textBullets, num, total }: Card2Props) {
  return (
    <div
      className="relative flex flex-1 overflow-hidden"
      style={{ border: '1px solid var(--color-hairline)', background: 'var(--color-paper-2)' }}
    >
      {/* slanting lines background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 18px,
            var(--color-hairline) 18px,
            var(--color-hairline) 19px
          )`,
        }}
      />
      <style>{`
        @keyframes c2spin0 { to { transform: rotate(360deg); } }
        @keyframes c2spin1 { to { transform: rotate(360deg); } }
        @keyframes c2spin2 { to { transform: rotate(360deg); } }
        @keyframes c2counter0 { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes c2counter1 { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes c2counter2 { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
      `}</style>

      {/* LEFT — label + body + 2×2 tiles + counter */}
      <div className="relative z-10 flex flex-[1.1] flex-col justify-between p-6">
        <div className="grid grid-cols-2 gap-5">
          <p
            className="font-sans font-light leading-relaxed text-ink-3"
            style={{ fontSize: 'clamp(0.78rem, 1vw, 0.92rem)', maxWidth: '32ch' }}
          >
            {body}
          </p>

          <div className="flex flex-col gap-2">
            {textBullets.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3"
                style={{
                  background: 'var(--color-paper-3)',
                  border: '1px solid var(--color-hairline)',
                }}
              >
                <span className="text-sage" style={{ fontSize: '0.9rem', lineHeight: 1 }}>
                  {bulletIcons[item] ?? '◇'}
                </span>
                <span
                  className="font-sans font-light leading-snug text-ink-2"
                  style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.78rem)' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          className="font-mono font-semibold uppercase tracking-[0.22em] text-ink-4"
          style={{ fontSize: '0.6rem' }}
        >
          {num} / {String(total).padStart(2, '0')}
        </p>
      </div>

      {/* RIGHT — orbit centered inside panel */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {/* orbit rings + icons — anchored to center of this panel */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute" style={{ top: '50%', left: '65%' }}>
            {orbitRadii.map((r, idx) => (
              <div
                key={idx}
                className="absolute rounded-full"
                style={{
                  width: `${r * 2}px`,
                  height: `${r * 2}px`,
                  top: 0,
                  left: 0,
                  marginTop: `-${r}px`,
                  marginLeft: `-${r}px`,
                  border: '1px dashed black',
                  animation: `c2spin${idx} ${orbitDurations[idx]}s linear infinite`,
                }}
              >
                {orbitIcons
                  .filter((ic) => ic.orbit === idx)
                  .map((ic) => {
                    const rad = (ic.angle * Math.PI) / 180
                    const px = 50 + 50 * Math.cos(rad)
                    const py = 50 + 50 * Math.sin(rad)
                    return (
                      <div
                        key={ic.alt}
                        className="absolute flex items-center justify-center rounded-full"
                        style={{
                          left: `${px}%`,
                          top: `${py}%`,
                          width: '40px',
                          height: '40px',
                          background: 'var(--color-paper-2)',
                          border: '1px solid var(--color-hairline)',
                          transform: 'translate(-50%, -50%)',
                          animation: `c2counter${idx} ${orbitDurations[idx]}s linear infinite`,
                        }}
                      >
                        <img
                          src={ic.src}
                          alt={ic.alt}
                          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                        />
                      </div>
                    )
                  })}
              </div>
            ))}
          </div>
        </div>

        {/* center node */}
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: '56px',
            height: '56px',
            top: '50%',
            left: '65%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--color-paper-2)',
            border: '1px solid var(--color-hairline)',
            zIndex: 10,
          }}
        >
          <img
            src="/Logo/Gika.png"
            alt="GiKA"
            style={{ width: '34px', height: '34px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}
