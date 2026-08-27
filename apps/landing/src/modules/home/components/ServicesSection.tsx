import { Wrapper } from '@/shared/components'
import { servicesData } from '@/utils/servicesCardData'
import type { LucideIcon } from 'lucide-react'

const ServicesSection = () => {
  return (
    <Wrapper className='w-full lg:w-full bg-background pt-20 pb-40'>
        <Wrapper>
            <section className='w-full flex justify-between items-center'>
                <main>
                    <h2 className='text-2xl text-primary-700'>Solusi Hijau Terbaik Untuk Anda</h2>
                    <h2 className='text-3xl lg:text-4xl font-bold text-primary-900'>Kami Hadir Menghadirkan Keindahan Alam di Setiap Ruang</h2>
                </main>
            </section>

            {/* card section */}
            <section className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:grid-row-2 grid-flow-row-dense gap-4 mt-10'>
                {servicesData.map((item, index) => {
                    const Icon : LucideIcon = item.icon
                    return (
                        <section key={index} className="group place-self-auto sha rounded-3xl bg-white flex flex-col items-start justify-start px-6 py-8 border border-slate-200 transition-all duration-150 hover:border-primary-400 hover:-translate-y-1 hover:shadow-2xl">
                            <div className="p-3 rounded-2xl bg-primary-300/50">
                                <Icon size={30} className="stroke-primary-700" />
                            </div>

                            <h1 className="text-primary-700 font-semibold my-2 group-hover:text-primary-300 duration-200">
                                {item.title}
                            </h1>

                            <p className="text-sm spacing font-inter tracking-wider leading-relaxed text-secondary-500">
                                {item.text}
                            </p>
                        </section>
                    )
                })}
            </section>
        </Wrapper>
    </Wrapper>
  )
}

export default ServicesSection