import { Heart, ShoppingCart } from 'lucide-react'

const FavCartIcon = () => {
  return (
    <section className='flex items-center justify-center gap-x-1'>
      <div className='rounded-full w-6 h-6 hover:bg-danger/20 flex items-center justify-center duration-150 ease-in-out'>
        <Heart className='w-4 stroke-2 stroke-danger' />
      </div>

      <div className='rounded-full w-6 h-6 hover:bg-info/20 flex items-center justify-center duration-150 ease-in-out'>
        <ShoppingCart className='w-4 stroke-2 stroke-info ' />
      </div>
    </section>
  )
}

export default FavCartIcon