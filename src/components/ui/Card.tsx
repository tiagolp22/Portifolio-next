interface CardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
  ariaLabel?: string
}

export const Card = ({ 
  children, 
  className = '', 
  interactive = false,
  onClick,
  ariaLabel 
}: CardProps) => {
  const Component = interactive ? 'button' : 'div'
  
  return (
    <Component 
      className={`
        card backdrop-filter backdrop-blur-sm rounded-lg p-6 
        ${interactive ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgb(var(--highlight))] focus:ring-offset-2' : ''}
        transition-[transform,shadow] duration-300 ease-out
        hover:translate-y-[-2px] hover:shadow-lg
        active:translate-y-[0px] active:shadow-sm
        ${className}
      `}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      aria-label={ariaLabel}
      tabIndex={interactive ? 0 : undefined}
      style={{
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)',
        willChange: 'transform',
        perspective: 1000,
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </Component>
  )
}