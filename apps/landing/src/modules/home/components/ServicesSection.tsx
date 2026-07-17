import { Wrapper } from '@/shared/components'
import { servicesData } from '@/utils/servicesCardData'
import type { LucideIcon } from 'lucide-react'

const ServicesSection = () => {
  return (
    <Wrapper className='my-10'>
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
                    <section key={index} className='w-71 h-78.75 rounded-xl mt-10 bg-[#FAFAFA] flex flex-col items-start justify-center px-6 py-8'>
                        <div className='p-2 rounded-md bg-green-500'>
                            <Icon size={30} className='stroke-green-900' />
                        </div>
                        <h1 className='text-xl text-zinc-800 font-semibold my-2'>{item.title}</h1>
                        <p className='text-[14px] leading-relaxed text-zinc-500'>{item.text}</p>
                    </section>
                )
            })}
        </section>
    </Wrapper>
  )
}

export default ServicesSection