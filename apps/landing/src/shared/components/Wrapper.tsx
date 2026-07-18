import { cn } from '@/lib/utils'
import React from 'react'

type WrapperPropsType = {
    children: React.ReactNode
    className?: string
}

const Wrapper = ({children, className} : WrapperPropsType) => {
  return (
    <section className={cn("w-full mx-auto", className)}>
        {children}
    </section>
  )
}

export default Wrapper