import { Wrapper } from '@/shared/components'
import img from '@/assets/images/House.jpeg'
import FAQCard from './FAQCard'

const FaqSection = () => {
  return (
    <Wrapper className='my-10'>
        {/* left */}
        <section className='flex-1'>
            <h3 className='text-2xl text-zinc-800'>FAQ & Jawaban</h3>
            <h1 className='text-4xl font-semibold text-zinc-800'>Pertanyaan yang selalu diajukan oleh klien</h1>
        </section>


        {/* right */}
        <section className='flex items-start justify-start gap-x-10 mt-8'>
          <img src={img} alt="pictures" className='flex-1 w-145.25 h-99.75 rounded-md object-cover' />
          <main className='flex-1 flex flex-col gap-y-2'>
            <FAQCard />
          </main>
        </section>
    </Wrapper>
  )
}

export default FaqSection