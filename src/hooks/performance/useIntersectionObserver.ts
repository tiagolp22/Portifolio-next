import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
}

export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = '0px'
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting) {
          setHasIntersected(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    const currentTarget = targetRef.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [threshold, rootMargin])

  return { targetRef, isIntersecting, hasIntersected }
}
