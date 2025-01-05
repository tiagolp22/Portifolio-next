'use client'
import { useState } from 'react'
import Image from 'next/image'
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
  width = 400,
  height = 300
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

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
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        loading="lazy"
      />
    </div>
  )
}