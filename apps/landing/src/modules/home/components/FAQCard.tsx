import { cn } from "@/lib/utils"
import { faqList } from "@/utils/faqList"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

type FAQCardProps = {
  className?: string
}

const FAQCard = ({className} :FAQCardProps) => {
  const [active, setActive] = useState<number | null>(1)
  return (
    <main className="flex flex-col gap-y-2">
      {faqList.map(item => (
        <main key={item.id}  className={cn(`bg-background-card w-full px-4 py-2 rounded-xl ${active === item.id ? 'h-fit' : 'h-9'}  overflow-hidden duration-200 ease-in-out`, className)}>
            <div className='flex items-center justify-between'>
                <h5 className='text-secondary-900 font-medium text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex.</h5>
                <ChevronDown 
                  onClick={() =>
                    setActive(active === item.id ? null : item.id)
                  }
                  className={`${active === item.id ? 'rotate-180' : null} stroke-zinc-800 ease-in-out duration-200`} />
            </div>
            <p className={`text-[14px] text-secondary-500 leading-relaxed my-2 duration-200 ease`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, sit? Cum in iste eligendi praesentium impedit ex. Molestiae, exercitationem quibusdam. Natus, laudantium rem? Facere beatae amet saepe dolor totam minima.</p>
        </main>
      ))}
    </main>
  )
}

export default FAQCard