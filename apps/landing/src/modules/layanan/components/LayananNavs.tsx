import { Wrapper } from '@/shared/components'
import { menuList } from '@/shared/constant/menulist'

const LayananNavs = () => {

  const layanan = ['landscape', 'rental', 'boquet', 'Kolam', 'perawatan kolam', 'taman']

  return (
    <Wrapper className=' pb-20'>
      <h2 className='text-3xl font-bold text-primary-900'>Layanan Trubusku</h2>
        
      <section className='w-1/2 flex items-center justify-between gap-x-20'>
        {/* Left section */}
        <main>
          <h4 className='my-2 text-sm'>Jelajahi semua layanan</h4>
          <section className='w-full flex items-center justify-start gap-x-6'>
            <div className='flex flex-col'>
              {layanan.map((item: string, index:number) => {
                return (
                  <h3 className='font-semibold text-primary-700 hover:text-primary-500 duration-200 ease-in-out cursor-default' key={index}>Jelajahi {item}</h3>
                )
              })}
            </div>
          </section>
        </main>

        {/* right section */}
        <main>
          <h4 className='my-2 text-sm'>Lainnya dari Trubusku</h4>
          <section className='w-full flex items-center justify-start gap-x-6'>
            <div className='flex flex-col'>
              {menuList.map((item: string, index:number) => {
                return (
                  <h3 className='font-semibold capitalize text-primary-700 hover:text-primary-500 duration-200 ease-in-out cursor-default' key={index}>{item} Trubusku</h3>
                )
              })}
            </div>
          </section>
        </main>
      </section>
    </Wrapper>
  )
}

export default LayananNavs