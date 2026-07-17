import aboutPic from '@/assets/images/House.jpeg'

const AboutSection = () => {
  return (
    <section className="w-[90%] mx-auto flex mt-16 gap-x-20 items-start justify-between">
      {/* main image section */}
      <img
        className='w-121.75 h-78.74 object-cover rounded-md' 
        src={aboutPic} alt="About pict" />

      {/* description section */}
      <main>
        <h1 className='text-4xl font-bold text-zinc-800'>Sekilas Mengenai Kami</h1>
        <p className='my-4 text-[16px] text-zinc-500 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minus eaque architecto sint beatae praesentium dolorum quod modi? Consequatur accusantium debitis ipsum eveniet recusandae aspernatur, similique officiis hic, voluptatem quidem corrupti explicabo! Fuga, ab facere quis consectetur sit a, aliquid, ad veritatis maxime repellat ea quas. Saepe corrupti aspernatur esse!</p>
        <p className='my-4 text-[16px] text-zinc-500 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum nulla tempora laboriosam neque id aspernatur saepe consequuntur perspiciatis modi est, voluptatibus sint velit officia! similique officiis hic, voluptatem quidem corrupti explicabo! Fuga, ab facere quis consectetur sit a </p>

        <button className='mt-10 bg-blue-400'>Selengkapnya</button>
      </main>
    </section>
  )
}

export default AboutSection