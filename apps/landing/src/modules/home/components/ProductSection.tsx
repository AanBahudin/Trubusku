import { Wrapper } from '@/shared/components'
import ProductsContainer from './ProductsContainer'
import { landingProductLists } from '@/utils/landingProductList'

const ProductSection = () => {
  return (
    <section className='w-full mx-auto py-10 lg:py-20 bg-background'>
      <Wrapper className='w-[90%] lg:w-[80%]'>
        {landingProductLists.map((item, index) => {
          return (
            <ProductsContainer 
            key={index}
            title={item.title} url={item.url} data={[]} />
          )
        })}
      </Wrapper>
    </section>
  )
}

export default ProductSection