interface CardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
}

export const Card = ({ 
  children, 
  className = '', 
  interactive = false,
  onClick
}: CardProps) => {
  return (
    <div 
      className={`
        card backdrop-filter backdrop-blur-sm rounded-lg p-6 
        transition-[transform,shadow] duration-300 ease-out
        hover:translate-y-[-2px] hover:shadow-lg
        active:translate-y-[0px] active:shadow-sm
        ${interactive ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      style={{
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)',
        willChange: 'transform',
        perspective: '1000px',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </div>
  )
}