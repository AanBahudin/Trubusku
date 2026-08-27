import { Wrapper } from '@/shared/components'
import bgImage from '@/assets/images/Image.jpeg'

const ServicesTypeSection = () => {
  return (
    <section className='w-full py-20'>
        <Wrapper className='w-[90%] xl:w-[80%] mx-auto flex flex-col items-center justify-center'>
            <h3 className='text-primary-500 px-10 py-1 bg-primary-300/30 rounded-xl '>Pilih Berdasarkan Kategori</h3>
            <h1 className='text-4xl font-bold text-primary-900 text-center my-2'>Produk dan Layanan Trubusku</h1>

            {/* services type section */}
            <section className='w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 my-6'>
                {Array.from({length: 4}).map((_, index) => {
                    return (
                        <main
                        key={index}
                        className='w-full h-61 rounded-2xl hover:border-primary-400 hover:shadow-2xl duration-150 hover:-translate-y-2 ease-in-out transition-all' 
                        style={{backgroundImage: `url(${bgImage})`}}>

                        </main>
                    )
                })}
            </section>
        </Wrapper>
    </section>
  )
}

export default ServicesTypeSection