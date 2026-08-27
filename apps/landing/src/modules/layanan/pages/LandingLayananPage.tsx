import { ImageContainer, InformationBelt, Wrapper } from "@/shared/components"
import { LayananCorousel, LayananFaq, LayananMainCard, LayananNavs } from "../components"
import { HeroSection } from "@/modules/home/components"
import layananImge from '@/assets/images/House.jpeg'

const LandingLayananPage = () => {
  return (
    <Wrapper className="w-full lg:w-full">
      <HeroSection className="h-[70vh]" />
      <LayananMainCard />
      <InformationBelt text="Dapatkan promo dan penawaran terbaik dari kami, Konsultasi sekarang!" />
      <ImageContainer image={layananImge} className="h-[60vh] mt-20 mb-20 " />
      <LayananFaq />
      <LayananCorousel />
      <ImageContainer image={layananImge} className="h-[60vh] mt-20 mb-20 " />
      <LayananNavs />
    </Wrapper>
  )
}

export default LandingLayananPage 