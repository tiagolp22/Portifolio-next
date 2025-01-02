import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children,
  disabled,
  loading,
  ...props 
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center rounded-lg font-medium transition-colors
    focus:outline-none focus:ring-2 focus:ring-[rgb(var(--highlight))] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `
  
  const variants = {
    primary: 'bg-[rgb(var(--highlight))] text-white hover:opacity-90',
    secondary: 'bg-[rgb(var(--card-background))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--button-hover))]',
    outline: 'border-2 border-[rgb(var(--highlight))] text-[rgb(var(--highlight))] hover:bg-[rgb(var(--highlight))] hover:text-white'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
}
