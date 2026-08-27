import { Button, Wrapper } from '@/shared/components'
import Img from '@/assets/images/House.jpeg'
import { ArrowUpRight, Circle } from 'lucide-react'
import { Link } from 'react-router'

const ProjectsSections = () => {
  return (
    <section className='w-full bg-background py-20'>
        <Wrapper className='w-[90%] xl:w-[80%] mx-auto flex flex-col-reverse xl:flex-row items-start justify-between gap-8 my-10'>
            {/* image section */}
            <section className='w-full xl:w-fit grid grid-cols-1 md:grid-cols-2 lg:place-content-stretch grid-rows-2 gap-2'>
                {Array.from({length: 4}).map((_, index) => {
                    return (
                        <img className='rounded-2xl w-full lg:w-full lg:h-70 xl:w-80 h-70 object-cover' src={Img} alt="project image" key={index} />
                    )
                })}
            </section>

            {/* copywriting section */}
            <section className='w-full xl:w-124.25 min-h-78.75 rounded-xl bg-card p-8 flex flex-col items-start border border-slate-200'>
                <h3 className='text-primary-500 px-10 py-1 bg-primary-300/30 rounded-xl flex gap-x-2'>
                    <Circle className='fill-primary-300 w-2 animate-pulse stroke-none' /> 
                    Projects
                </h3>
                <h1 className='text-4xl font-bold my-4 text-primary-900'>A peak of our landscape creations</h1>
                <p className=' leading-relaxed tracking-wide text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae fugiat porro odit molestias eius ab dolorem illum ipsa enim, reiciendis quaerat aut quidem voluptatibus velit rem! Officia, officiis distinctio!</p>
                <Button className='w-full md:w-1/2 xl:w-3/8 mt-6'>
                    <Link to='/portfolio' className='gap-x-2 flex items-center justify-center'>
                        <span>Lihat projek</span>
                        <ArrowUpRight className='w-5' strokeWidth={3} />
                    </Link>
                </Button>
            </section>
        </Wrapper>
    </section>
  )
}

export default ProjectsSections