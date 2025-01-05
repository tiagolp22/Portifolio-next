'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}