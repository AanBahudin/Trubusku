import { Button, Wrapper } from "@/shared/components"
import ctaimg from '@/assets/images/CTA.jpeg'
import { MoveRight } from "lucide-react"

const HomeCTA = () => {
  return (
    <Wrapper className="w-full lg:w-full py-20">
      <section className='w-[90%] lg:w-[80%] overflow-hidden text-white flex flex-row items-center justify-between bg-linear-to-br from-primary-300 to-primary-700 object-cover object-center bg-no-repeat mx-auto rounded-4xl min-h-[40vh] '>
        
        <main className="flex-1 lg:py-0 px-8">
          <h2 className="text-secondary-100 mb-2">Buat Taman Kamu Sendiri</h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-50">Andalkan Kami Pada Kebutuhan Anda!</h1>
          <p className="text-sm text-secondary-300 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium, nesciunt doloremque nostrum eveniet, repudiandae repellendus vero quia nobis culpa molestias. Numquam minus facilis odio veniam molestiae adipisci perspiciatis atque?</p>

          <Button variant="secondary" className="mt-6 text-sm flex items-center justify-center gap-x-4">
            <span>Bergabung Sekarang</span>
            <MoveRight size={14} strokeWidth={3} />
          </Button>
        </main>


        <img src={ctaimg} alt="" className="hidden lg:flex w-4/8 h-[40vh] object-cover object-center self-end" />
      </section>
    </Wrapper>
  )
}

export default HomeCTA