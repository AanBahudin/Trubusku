import HomeProductCard from './HomeProductCard'

type ProductContainerPropsType = {
    title: string,
    url: string,
    data?: any
}

const ProductsContainer = ({title, url, data} : ProductContainerPropsType) => {
  return (
    <section className='w-full my-10'>
        <main className='flex items-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-800'>{title}</h1>
            <a href={url} className='text-md text-zinc-500'>Selengkapnya</a>
        </main>

        <main className='flex items-center justify-between'>
            {Array.from({length: 5}).map((_, index) => (
                <HomeProductCard key={index} price={100} rating={4} title='Lorem Ipsum' />
            ))}
        </main>

        

    </section>
  )
}

export default ProductsContainer