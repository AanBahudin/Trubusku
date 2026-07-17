import { Wrapper } from '@/shared/components'
import bgImage from '@/assets/images/Image.jpeg'

const ServicesTypeSection = () => {
  return (
    <Wrapper className='flex flex-col items-center justify-center'>
        <h3 className='text-zinc-500'>Pilih Berdasarkan Kategori</h3>
        <h1 className='text-4xl font-bold text-zinc-800'>Produk dan Layanan Trubusku</h1>

        {/* services type section */}
        <section className='grid grid-cols-2 grid-rows-2 gap-6 my-6 '>
            {Array.from({length: 4}).map((_, index) => {
                return (
                    <main
                        key={index}
                        className='w-167.5 h-61 rounded-md self-start' 
                        style={{backgroundImage: `url(${bgImage})`}}>

                    </main>
                )
            })}
        </section>
    </Wrapper>
  )
}

export default ServicesTypeSection