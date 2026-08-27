import { cn } from '@/lib/utils'
import React from 'react'
import { buttonSizeConfig, buttonVariantConfig } from '../utils/button.config'

type ButtonProps ={
  size?: 'sm' | 'md' | 'lg' | 'xl',
  variant?: 'default' | 'outline' | 'danger' | 'warning' | 'ghost' | 'link' | 'secondary'
  className?: string | ''
  children?: React.ReactNode,
}

const Button = ({ size = 'md', variant = 'default', children, className } : ButtonProps) => {
  return (
    <button className={cn(`${buttonVariantConfig[variant]} ${buttonSizeConfig[size]} transition-all ease-in-out duration-150`, className)}>
      {children}
    </button>
  )
}

export default Button