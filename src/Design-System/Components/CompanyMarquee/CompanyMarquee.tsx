'use client'

import { animate, motion, useMotionValue } from 'motion/react'
import React, { type CSSProperties, useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    let controls
    const size = direction === 'horizontal' ? width : height
    if (size === 0) return

    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    const distanceToTravel = Math.abs(to - from)
    const duration = distanceToTravel / currentSpeed

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to)
      const transitionDuration = remainingDistance / currentSpeed
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from)
        },
      })
    }

    return () => controls?.stop()
  }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse])

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentSpeed(speedOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentSpeed(speed)
        },
      }
    : {}

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

type BlurredInfiniteSliderProps = InfiniteSliderProps & {
  fadeWidth?: number
  containerClassName?: string
}

function BlurredInfiniteSlider({
  children,
  fadeWidth = 80,
  containerClassName,
  ...sliderProps
}: BlurredInfiniteSliderProps) {
  const maskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
  }

  return (
    <div className={cn('relative w-full', containerClassName)} style={maskStyle}>
      <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
    </div>
  )
}

const LOGOS = [
  { id: 'claude', src: '/AI/Claude.png', alt: 'Claude' },
  { id: 'chatgpt', src: '/AI/chatgpt.png', alt: 'ChatGPT' },
  { id: 'manus', src: '/AI/manus.png', alt: 'manus' },
  { id: 'grok', src: '/AI/grok.png', alt: 'Grok' },
]

export type CompanyMarqueeProps = {
  className?: string
}

export function CompanyMarquee({ className }: CompanyMarqueeProps) {
  return (
    <div className={cn('overflow-hidden px-6', className)} aria-hidden="true">
      <BlurredInfiniteSlider speed={40} gap={48} fadeWidth={0} containerClassName="py-3">
        {LOGOS.map(({ id, src, alt }) => (
          <div key={id} className="flex items-center justify-center px-2">
            <img src={src} alt={alt} className="h-5 w-auto object-contain opacity-60" />
          </div>
        ))}
      </BlurredInfiniteSlider>
    </div>
  )
}
