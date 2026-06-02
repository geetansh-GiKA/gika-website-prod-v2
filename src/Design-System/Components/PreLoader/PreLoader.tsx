'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'

export interface PreLoaderRefs {
  edgeTopLeft: HTMLDivElement | null
  edgeTopRight: HTMLDivElement | null
  edgeBottomLeft: HTMLDivElement | null
  edgeBottomRight: HTMLDivElement | null
  gikaText: HTMLParagraphElement | null
}

interface LoopingWordsProps {
  words: string[]
  onFinalWord?: (refs: PreLoaderRefs) => void
}

export const LoopingWords: React.FC<LoopingWordsProps> = ({ words, onFinalWord }) => {
  const wordListRef = useRef<HTMLUListElement>(null)
  const selectorRef = useRef<HTMLDivElement>(null)
  const edgeTopLeftRef = useRef<HTMLDivElement>(null)
  const edgeTopRightRef = useRef<HTMLDivElement>(null)
  const edgeBottomLeftRef = useRef<HTMLDivElement>(null)
  const edgeBottomRightRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const finalWordFiredRef = useRef(false)

  const totalWords = words.length
  const wordHeight = 100 / totalWords
  const finalWord = words[words.length - 1]

  let currentIndex = 0

  const updateEdgeWidth = useCallback(() => {
    const wordList = wordListRef.current
    const edgeElement = selectorRef.current
    if (!wordList || !edgeElement) return

    const centerWordIndex = (currentIndex + 1) % totalWords
    const centerWord = wordList.children[centerWordIndex] as HTMLLIElement

    if (centerWord) {
      const textEl = centerWord.querySelector('p')
      const textWidth = textEl
        ? textEl.getBoundingClientRect().width
        : centerWord.getBoundingClientRect().width

      gsap.to(edgeElement, {
        width: textWidth,
        duration: 0.5,
        ease: 'expo.out',
      })

      if (
        !finalWordFiredRef.current &&
        textEl?.textContent?.trim().toUpperCase() === finalWord.toUpperCase()
      ) {
        finalWordFiredRef.current = true
        setTimeout(() => {
          onFinalWord?.({
            edgeTopLeft: edgeTopLeftRef.current,
            edgeTopRight: edgeTopRightRef.current,
            edgeBottomLeft: edgeBottomLeftRef.current,
            edgeBottomRight: edgeBottomRightRef.current,
            gikaText: textEl,
          })
        }, 900)
      }
    }
  }, [totalWords, finalWord, onFinalWord])

  const moveWords = useCallback(() => {
    const wordList = wordListRef.current
    if (!wordList) return

    currentIndex++

    gsap.to(wordList, {
      yPercent: -wordHeight * currentIndex,
      duration: 1.2,
      ease: 'elastic.out(1, 0.85)',
      onStart: updateEdgeWidth,
      onComplete: function () {
        if (currentIndex >= totalWords - 3) {
          wordList.appendChild(wordList.children[0])
          currentIndex--
          gsap.set(wordList, { yPercent: -wordHeight * currentIndex })
        }
      },
    })
  }, [wordListRef, wordHeight, updateEdgeWidth, totalWords])

  useEffect(() => {
    updateEdgeWidth()

    timelineRef.current = gsap.timeline({ repeat: -1, delay: 1 })
    timelineRef.current.call(moveWords).to({}, { duration: 2 })

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [moveWords, updateEdgeWidth])

  return (
    <section className="cloneable">
      <div className="looping-words">
        <div className="looping-words__containers">
          <ul data-looping-words-list="" className="looping-words__list" ref={wordListRef}>
            {words.map((word, index) => (
              <li key={index} className="looping-words__list">
                <p className="looping-words__p">{word}</p>
              </li>
            ))}
          </ul>
          <div className="looping-words__fade"></div>
        </div>
        <div data-looping-words-selector="" className="looping-words__selector" ref={selectorRef}>
          <div className="looping-words__edge" ref={edgeTopLeftRef}></div>
          <div className="looping-words__edge is--2" ref={edgeTopRightRef}></div>
          <div className="looping-words__edge is--3" ref={edgeBottomLeftRef}></div>
          <div className="looping-words__edge is--4" ref={edgeBottomRightRef}></div>
        </div>
      </div>
    </section>
  )
}
