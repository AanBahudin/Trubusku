import { Wrapper } from "@/shared/components"
import layananImg from '@/assets/images/layananImg.jpeg'

const LayananMainCard = () => {
  return (
      <Wrapper className="w-[90%] lg:w-[80%] pt-40 pb-10 mx-auto">
        <main className="w-full flex items-center justify-center gap-x-6">
          {Array.from({length: 5}).map((_, index: number) => {
            return (
              <div key={index} className="min-w-40 flex-1 h-100 rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-2xl duration-200 ease-in-out relative">
                <img src={layananImg} alt="ayanan img" className="w-full h-full -z-10 absolute group-hover:scale-110 duration-500 ease-in-out" /> 
                <div className="w-full h-1/2 group-hover:bottom-0 bg-linear-to-t from-black/50 to-transparent from z-10 absolute -bottom-100 duration-500 ease-in-out">
                  <h1></h1>
                </div>
              </div>
            )
          })}
        </main>
      </Wrapper>
  )
}

export default LayananMainCard 