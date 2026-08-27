import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface DropdownProps {
  options: string[]
  placeholder?: string
  value?: string          // controlled usage (optional)
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

const Dropdown = ({
  options,
  placeholder = 'Select...',
  value,
  defaultValue = '',
  onChange,
  className,
}: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue)
  const selected = value !== undefined ? value : internalValue

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const handleSelect = (item: string) => {
    if (value === undefined) setInternalValue(item)
    onChange?.(item)
    setOpen(false)
    triggerRef.current?.focus()
  }

  // close on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // close on Escape
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  // lock page scroll while open
  useEffect(() => {
    if (!open) return
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        const originalOverflow = document.body.style.overflow
        const originalPaddingRight = document.body.style.paddingRight

        document.body.style.overflow = 'hidden'
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`
        }

        return () => {
            document.body.style.overflow = originalOverflow
            document.body.style.paddingRight = originalPaddingRight
        }
    }, [open])

  return (
    <div ref={containerRef} className={cn('w-full relative', className)}>
      <button type="button" ref={triggerRef} onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox" aria-expanded={open} className="w-full cursor-pointer bg-transparent border-2 border-secondary-300 px-3 h-10 flex items-center justify-between rounded-xl">
        <span className="text-sm text-secondary-700">{selected || placeholder}</span>
        <ChevronDown className={cn('w-5 h-5 stroke-secondary-700 transition-transform duration-150', open && 'rotate-180')} />
      </button>

      {open && (
        <ul role="listbox" className="w-full mt-2 absolute z-50 rounded-xl overflow-hidden shadow-lg bg-background-card max-h-60 overflow-y-auto">
          {options.map((item) => {
            const active = selected === item
            return (
              <li key={item} role="option" aria-selected={active}>
                <button type="button" onClick={() => handleSelect(item)}
                  className={cn(
                    'w-full py-2 px-4 flex items-center justify-between hover:bg-primary-100 transition-colors duration-150 ease-in-out',
                    active && 'bg-primary-50'
                  )}
                >
                  <span>{item}</span>
                  {active && <Check className="w-4 h-4 stroke-2 stroke-primary-300" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Dropdown