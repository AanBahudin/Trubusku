import { Button, Wrapper } from "@/shared/components"
import testImg from '@/assets/images/flower2.jpeg'

const LayananCorousel = () => {
  return (
    <Wrapper className="w-[90%] lg:w-[80%] mb-10">
        <main className="flex items-center justify-between">
            <h1 className='text-3xl lg:text-4xl font-bold text-primary-900 mt-10 lg:mt-0'>Lihat lebih dalam</h1>
            <Button>Lihat selengkapnya</Button>
        </main>
        {/* Image Container */}
        <main className="w-full min-h-[30vh] flex gap-x-3 overflow-x-scroll no-scrollbar mt-5 overflow-hidden rounded-2xl">
            {Array.from({length: 10}).map((_, index) => {
                return (
                    <img key={index} src={testImg} alt="services" className="w-1/2 h-[50vh] shrink-0 rounded-2xl object-cover" />
                )
            })}
        </main>
    </Wrapper>
  )
}

export default LayananCorousel