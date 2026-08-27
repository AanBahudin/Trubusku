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
        <section className='w-full py-10 lg:py-20'>
            <Wrapper className='w-[90%] lg:w-[80%] flex flex-col items-center justify-between my-10'>
                {/* title section */}
                <section className='self-start mb-10'>
                    <h4 className='text-2xl text-primary-700'>Galeri Trubusku</h4>
                    <h1 className='text-4xl font-bold text-primary-900'>Lihat apa yang telah kami berikan</h1>
                </section>

                <section className='px-10 rounded-xl mb-10 gap-x-6 bg-background-soft py-2 flex items-center justify-center'>
                    {galleryfilter.map(item => (
                        <p className={`ease-in-out text-primary-700 cursor-default duration-200 ${isActive === item ? "border-b-primary-300/70 border-b" : "border-background-soft border-b hover:text-primary-500"}`} onClick={() => onChangeMenu(item)} key={item}>{item}</p>
                    ))}
                </section>

                <section className='w-full place-content-stretch grid md:grid-cols-2 xl:grid-cols-3  gap-4 justify-items-stretch'>
                    {Array.from({length: 6}).map((_, index) => {
                        return (
                            <div key={index} className='h-55 overflow-hidden rounded-xl hover:shadow-2xl duration-150 ease-in-out'>
                                <img 
                                className='w-full object-cover bg-no-repeat h-55 hover:shadow-2xl hover:scale-110 duration-150 ease-in-out'
                                src={imgExample} alt="" key={index} />
                            </div>
                        )
                    })}
                </section>
                
                
            </Wrapper>
        </section>
  )
}

export default GallerySection