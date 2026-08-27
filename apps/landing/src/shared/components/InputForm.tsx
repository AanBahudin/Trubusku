import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"
import type { InputHTMLAttributes } from "react"

interface InputFormPropsType extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: LucideIcon,
  className?: string,
}

const InputForm = ({className, Icon, ...props} : InputFormPropsType) => {
  return (
    <div className={cn('flex items-center justify-start border-2 border-secondary-300 rounded-xl pl-4 overflow-hidden gap-x-4 h-10 focus-within:border-primary-300 w-full focus-within:shadow-md duration-200 ease-in-out', className)}>
      {Icon &&(
        <Icon className="w-5 stroke-secondary-500" />
      )}
      <input {...props} type="text" placeholder="Cari produk " className="h-full flex-1 focus:outline-none placeholder:text-sm text-secondary-900 text-sm" />
    </div>
  )
}

export default InputForm