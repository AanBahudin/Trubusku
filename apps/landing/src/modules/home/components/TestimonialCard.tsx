import person from '@/assets/images/person.jpeg'

const TestimonialCard = () => {
  return (
    <section className="flex flex-col items-center justify-between min-w-59.5 min-h-65.5 bg-background-card border-slate-200 border rounded-xl p-4 group cursor-default   duration-150 ease-in-out hover:-translate-y-1 hover:border-primary-300">
      <p className="text-[14px] leading-relaxed text-secondary-500 group-hover:text-secondary-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque enim itaque consequatur saepe minima, accusantium esse.</p>

      <main className="flex items-center justify-start w-full self-end gap-x-4">
        {/* image section */}
        <img src={person} alt="Person" className='h-10 w-10 rounded-full' />

        {/* credentiols section */}
        <div>
          <h3 className='text-xs font-bold text-primary-300 group-hover:text-primary-700'>Lorem Ipsum</h3>
          <h5 className='text-xs text-zinc-500'>Landscape</h5>
        </div>
      </main>
    </section>
  )
}

export default TestimonialCard