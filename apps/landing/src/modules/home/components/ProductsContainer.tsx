import HomeProductCard from './HomeProductCard'

type ProductContainerPropsType = {
    title: string,
    url: string,
    data?: any,
}

const ProductsContainer = ({title, url, data} : ProductContainerPropsType) => {
  return (
    <section className='w-full my-10'>
        <main className='flex items-center justify-between'>
            <h1 className='text-xl lg:text-2xl font-semibold text-primary-900'>{title}</h1>
            <a href={url} className='text-sm lg:text-md text-secondary-500 hover:text-primary-300 duration-150 ease-in-out'>Selengkapnya</a>
        </main>

        <main className='w-full max-w-full overflow-x-scroll no-scrollbar flex items-center justify-evenly gap-x-4'>
            {Array.from({length: 5}).map((_, index) => (
                <HomeProductCard key={index} price={100} rating={4} title='Lorem Ipsum' />
            ))}
        </main>

        

    </section>
  )
}

export default ProductsContainer