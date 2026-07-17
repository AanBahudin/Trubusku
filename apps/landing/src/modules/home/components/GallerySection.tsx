import { Wrapper } from '@/shared/components'
import imgExample from '@/assets/images/House.jpeg'
import { useState } from 'react'

const GallerySection = () => {

    const [isActive, setActive] = useState("Semua")
    const onChangeMenu = (value: string) => {
        setActive(value)
    }

    const galleryfilter = ["Semua", "Batu Alam", "Hempers", "Landscape"]

    return (
        <Wrapper className='flex flex-col items-center justify-between my-10'>
            {/* title section */}
            <section className='self-start mb-8'>
                <h4 className='text-2xl text-zinc-800'>Galeri Trubusku</h4>
                <h1 className='text-4xl font-semibold text-zinc-800'>Lihat apa yang telah kami berikan</h1>
            </section>

            <section className='w-full place-content-stretch grid grid-cols-3 grid-rows-2 gap-4 justify-items-stretch'>
                {Array.from({length: 6}).map((_, index) => {
                    return (
                        <img 
                        className='rounded-md object-cover bg-no-repeat h-55'
                        src={imgExample} alt="" key={index} />
                    )
                })}
            </section>
            
            <section className='px-10 rounded my-4 gap-x-6 bg-[#fafafa] py-2 flex items-center justify-center'>
                {galleryfilter.map(item => (
                    <p className={`ease-in-out cursor-default duration-200 ${isActive === item ? "border-b-emerald-800 border-b" : "border-b-[#fafafa] border-b"}`} onClick={() => onChangeMenu(item)} key={item}>{item}</p>
                ))}
            </section>
            
        </Wrapper>
  )
}

export default GallerySection