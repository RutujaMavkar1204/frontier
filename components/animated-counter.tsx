"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      const percentage = Math.min(progress / duration, 1)
      const easedPercentage = easeOutQuart(percentage)

      setCount(Math.floor(easedPercentage * value))

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [inView, value, duration])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

