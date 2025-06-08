import React from "react"
import { LucideIcon } from "lucide-react"

interface BentoCardProps {
  icon?: LucideIcon
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className = "", 
  children,
  onClick 
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-900 border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children || (
        <div className="flex flex-col h-full">
          {Icon && <Icon size={24} className="text-primary mb-3" />}
          {title && <h3 className="font-semibold text-lg mb-2">{title}</h3>}
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      )}
    </div>
  )
}

export default BentoCard