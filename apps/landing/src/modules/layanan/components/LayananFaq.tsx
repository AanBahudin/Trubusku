import { Wrapper } from "@/shared/components"
import testImg from '@/assets/images/House.jpeg'
import FAQCard from "@/modules/home/components/FAQCard"


const LayananFaq = () => {
  return (
    <Wrapper className="pb-20">
        <h1 className='text-3xl lg:text-4xl font-bold text-primary-900 mt-10 lg:mt-0'>Dibuat untuk yang terbaik</h1>
        {/* FAQ Container */}
        <main className="w-full min-h-[30vh] rounded-3xl bg-secondary-50 mt-5 flex items-start justify-between p-10 gap-x-6">
            {/* FAQ Section */}
            <div className="flex-1">
                <FAQCard className="bg-transparent" />
            </div>

            {/* Image Section */}
            <div className="w-1/2 h-[50vh] rounded-2xl overflow-hidden bg-red-50">
                <img src={testImg} alt="Service picture" className="w-full h-full object-cover rounded-2xl" />
            </div>
        </main>
    </Wrapper>
  )
}

export default LayananFaq