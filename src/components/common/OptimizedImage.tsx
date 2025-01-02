'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
      setIsLoading(false)
    }
  }, [src])

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-[rgb(var(--card-background))]',
        className
      )}
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-[rgb(var(--card-border))]" />
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          width={width}
          height={height}
          loading="lazy"
        />
      )}
    </div>
  )
}
