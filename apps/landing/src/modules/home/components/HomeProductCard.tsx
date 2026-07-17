import productPhoto from '@/assets/images/flower.jpeg'
import { StartsRating } from '@/shared/components'

type HomeProductCardPropsType = {
    title: string,
    price: number,
    rating?: number
}

const HomeProductCard = ({title, price} : HomeProductCardPropsType) => {
  return (
    <section className='h-fit flex flex-col items-center mt-6'>
        <img src={productPhoto} alt="Photo product" className='w-40 h-40 rounded-xl' />
        <h3 className='text-md'>{price}</h3>
        <h3 className='text-md '>{title}</h3>
        <StartsRating />
    </section>
  )
}

export default HomeProductCard