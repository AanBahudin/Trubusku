import productPhoto from '@/assets/images/flower2.jpeg'
import { StartsRating, FavCartIcon } from '@/shared/components'


type HomeProductCardPropsType = {
    title: string,
    price: number,
    rating?: number
}

const HomeProductCard = ({title} : HomeProductCardPropsType) => {
  return (
    <section className='w-56 min-h-60 cursor-auto flex flex-col hover:shadow-lg items-start mt-6 border border-slate-200 bg-background-card overflow-hidden rounded-xl group duration-150 ease-in-out'>
      <div className='w-full h-40 overflow-hidden'>
        <img src={productPhoto} alt="Photo product" className='w-full h-50 object-cover self-center group-hover:scale-110 duration-150 ease-in-out' />
      </div>

      <div className='w-full px-4 py-2 bg-background  flex flex-col items-start justify-center'>

        <main className='w-full flex items-center justify-between'>
          <h4 className='text-xs text-secondary-500 tracking-wide'>Tanaman</h4>
          <FavCartIcon />
        </main>

        <h4 className='text-shadow-secondary-500 text-sm font-semibold'>{title}</h4>
        <h4 className='text-primary-500 group-hover:text-primary-300 text-lg font-bold duration-150 ease-in-out'>Rp. 100.000</h4>

        <div className='w-full flex flex-1 items-center justify-between'>
          <StartsRating />
          <p className='text-text-muted text-xs'>10 Ulasan</p>
        </div>
      </div>
    </section>
  )
}

export default HomeProductCard