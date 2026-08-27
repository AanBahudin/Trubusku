import { cn } from '@/lib/utils'

type InformationBeltProps = {
    text: string,
    className?: string
}

const InformationBelt = ({text, className} : InformationBeltProps) => {
  return (
    <section className={cn('w-full flex items-center justify-center py-5 bg-secondary-50 text-secondary-900 font-medium', className)}>
        {text}
    </section>
  )
}

export default InformationBelt