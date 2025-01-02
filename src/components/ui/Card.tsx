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
        card backdrop-blur-sm rounded-lg p-6 hover-effect
        ${interactive ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgb(var(--highlight))] focus:ring-offset-2' : ''}
        ${className}
      `}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      aria-label={ariaLabel}
      tabIndex={interactive ? 0 : undefined}
    >
      {children}
    </Component>
  )
}
