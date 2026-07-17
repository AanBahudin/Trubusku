import { cn } from '@/lib/utils'
import React from 'react'

type LandingLayoutsProps = {
    children: React.ReactNode
    className?: string,
}

const LandingLayouts = ({className, children} : LandingLayoutsProps) => {
  return (
    <section className={cn("w-full", className)}>
        {children}
    </section>
  )
}

export default LandingLayouts