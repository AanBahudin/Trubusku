import { Wrapper } from '@/shared/components'
import img from '@/assets/images/House.jpeg'
import FAQCard from './FAQCard'

const FaqSection = () => {
  return (
    <section className='w-full py-10 lg:py-20 bg-background'>
      <Wrapper className='w-[90%] lg:w-[80%] mx-auto'>
        {/* left */}
        <section className='flex-1'>
            <h3 className='text-2xl text-primary-700'>FAQ & Jawaban</h3>
            <h1 className='text-4xl font-bold text-primary-900'>Pertanyaan yang selalu diajukan oleh klien</h1>
        </section>


        {/* right */}
        <section className='flex items-start justify-start gap-x-10 mt-8'>
          <img src={img} alt="pictures" className='hidden lg:flex flex-1 w-145.25 h-99.75 rounded-2xl object-cover shadow-2xl' />
          <main className='flex-1 flex flex-col gap-y-2'>
            <FAQCard />
          </main>
        </section>
      </Wrapper>
    </section>
  )
}

export default FaqSection