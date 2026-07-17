import person from '@/assets/images/person.jpeg'

const TestimonialCard = () => {
  return (
    <section className="flex flex-col items-center justify-between w-59.5 h-65.5 rounded-md bg-[#FAFAFA] p-4">
      <p className="text-[14px] leading-relaxed text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque enim itaque consequatur saepe minima, accusantium esse.</p>

      <main className="flex items-center justify-start w-full self-end gap-x-4">
        {/* image section */}
        <img src={person} alt="Person" className='h-10 w-10 rounded-full' />

        {/* credentiols section */}
        <div>
          <h3 className='text-xs font-semibold'>Lorem Ipsum</h3>
          <h5 className='text-xs text-zinc-500'>Landscape</h5>
        </div>
      </main>
    </section>
  )
}

export default TestimonialCard