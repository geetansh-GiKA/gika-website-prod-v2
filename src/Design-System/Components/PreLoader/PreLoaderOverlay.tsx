import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { LoopingWords } from '../PreLoader/PreLoader'
import type { PreLoaderRefs } from '../PreLoader/PreLoader'

interface PreLoaderProps {
  children: React.ReactNode
}

export const PreLoader: React.FC<PreLoaderProps> = ({ children }) => {
  const words = ['Graphs', 'Connect', 'AI', 'Insights', 'GIKA']
  const [done, setDone] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleFinalWord = (refs: PreLoaderRefs) => {
    const { edgeTopLeft, edgeTopRight, edgeBottomLeft, edgeBottomRight, gikaText } = refs
    const overlay = overlayRef.current
    if (!overlay) return

    const vw = window.innerWidth
    const vh = window.innerHeight

    // Each edge div's current position relative to the viewport
    const getRect = (el: HTMLElement) => el.getBoundingClientRect()

    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    })

    // Kill the looping timeline so no more word moves happen
    gsap.killTweensOf(overlay)

    // Blast each corner bracket to its respective viewport corner
    if (edgeTopLeft) {
      const r = getRect(edgeTopLeft)
      tl.to(
        edgeTopLeft,
        {
          x: -r.left,
          y: -r.top,
          duration: 0.75,
          ease: 'expo.out',
        },
        0
      )
    }
    if (edgeTopRight) {
      const r = getRect(edgeTopRight)
      tl.to(
        edgeTopRight,
        {
          x: vw - r.right,
          y: -r.top,
          duration: 0.75,
          ease: 'expo.out',
        },
        0
      )
    }
    if (edgeBottomLeft) {
      const r = getRect(edgeBottomLeft)
      tl.to(
        edgeBottomLeft,
        {
          x: -r.left,
          y: vh - r.bottom,
          duration: 0.75,
          ease: 'expo.out',
        },
        0
      )
    }
    if (edgeBottomRight) {
      const r = getRect(edgeBottomRight)
      tl.to(
        edgeBottomRight,
        {
          x: vw - r.right,
          y: vh - r.bottom,
          duration: 0.75,
          ease: 'expo.out',
        },
        0
      )
    }

    // GIKA text scales up and blurs out simultaneously
    if (gikaText) {
      tl.to(
        gikaText,
        {
          scale: 1.15,
          filter: 'blur(20px)',
          opacity: 0,
          duration: 0.75,
          ease: 'power2.inOut',
        },
        0
      )
    }

    // Overlay fades out slightly behind the blast
    tl.to(
      overlay,
      {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      },
      0.15
    )
  }

  return (
    <>
      {!done && (
        <div className="preloader-overlay" ref={overlayRef}>
          <LoopingWords words={words} onFinalWord={handleFinalWord} />
        </div>
      )}
      {children}
    </>
  )
}
