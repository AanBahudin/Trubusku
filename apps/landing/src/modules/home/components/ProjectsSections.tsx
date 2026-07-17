import { Wrapper } from '@/shared/components'
import Img from '@/assets/images/House.jpeg'

const ProjectsSections = () => {
  return (
    <Wrapper className='flex items-start justify-between my-10'>
        {/* image section */}
        <section className='grid grid-cols-2 grid-rows-2 gap-6'>
            {Array.from({length: 4}).map((_, index) => {
                return (
                    <img className='rounded-xl w-96 h-69' src={Img} alt="project image" key={index} />
                )
            })}
        </section>

        {/* copywriting section */}
        <section className='w-124.25 min-h-78.75 rounded-xl bg-[#FAFAFA] p-8 flex flex-col items-start border border-[#e6e6e6]'>
            <h3 className='text-zinc-500'>Projects</h3>
            <h1 className='text-4xl font-bold my-4 text-zinc-800'>A peak of our landscape creations</h1>
            <p className='text-[16px] leading-relaxed text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae fugiat porro odit molestias eius ab dolorem illum ipsa enim, reiciendis quaerat aut quidem voluptatibus velit rem! Officia, officiis distinctio!</p>
            <button className='mt-6'>Lihat projek</button>
        </section>
    </Wrapper>
  )
}

export default ProjectsSections