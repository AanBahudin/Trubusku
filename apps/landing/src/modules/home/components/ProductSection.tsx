import { Wrapper } from '@/shared/components'
import ProductsContainer from './ProductsContainer'
import { landingProductLists } from '@/utils/landingProductList'

const ProductSection = () => {
  return (
    <Wrapper>
        {landingProductLists.map((item, index) => {
            return (
              <ProductsContainer 
                key={index}
                title={item.title} url={item.url} data={[]} />
            )
        })}
    </Wrapper>
  )
}

export default ProductSection