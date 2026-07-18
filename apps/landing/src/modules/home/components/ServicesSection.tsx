import { Wrapper } from '@/shared/components'
import { servicesData } from '@/utils/servicesCardData'
import type { LucideIcon } from 'lucide-react'

const ServicesSection = () => {
  return (
    <Wrapper className='w-full my-10'>
        {/* title section */}
        <section className='w-full flex justify-between items-center'>
            {/* left title */}
            <main>
                <h2 className='text-2xl text-zinc-800'>Pilihan Terbaik Konsumen</h2>
                <h2 className='text-4xl font-bold text-zinc-800'>Kami Selalu Menjaga dan Merawat</h2>
            </main>

            {/* right title */}
            <p className='w-125 text-[16px] text-zinc-800 text-right leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reprehenderit eos qui maxime iste! Quidem repellendus eos ipsa voluptates accusantium.</p>
        </section>

        {/* card section */}
        <section className='w-full flex items-center justify-between'>
            {servicesData.map((item, index) => {
                const Icon : LucideIcon = item.icon
                return (
                    <section key={index} className="group w-71 h-78.75 rounded-2xl bg-white mt-10 flex flex-col items-start justify-center px-6 py-8 border border-slate-200 transition-all duration-200 hover:border-green-600 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)]">
                        <div className="p-2 rounded-md bg-green-500/30">
                            <Icon size={30} className="stroke-green-900" />
                        </div>

                        <h1 className="text-xl text-zinc-800 font-semibold my-2 group-hover:text-green-300 duration-200">
                            {item.title}
                        </h1>

                        <p className="text-[14px] leading-relaxed text-zinc-500">
                            {item.text}
                        </p>
                    </section>
                )
            })}
        </section>
    </Wrapper>
  )
}

export default ServicesSection