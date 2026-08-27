import { cn } from "@/lib/utils";
import heroImage from "../../../assets/images/Image.jpeg"; 

interface HeroSectionType {
  className?: string
}

const HeroSection = ({className} : HeroSectionType) => {
  return (
    <section>
      <img src={heroImage} className={cn('w-full h-screen object-cover', className)} />
    </section>
  )
}

export default HeroSection