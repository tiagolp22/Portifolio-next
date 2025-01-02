interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div 
      className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all ${className}`}
    >
      {children}
    </div>
  )
}
