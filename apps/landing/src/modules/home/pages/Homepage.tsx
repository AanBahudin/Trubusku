import {
  HeroSection, 
  AboutSection, 
  ServicesSection, 
  CompayOfferCTA, 
  ProjectsSections,
  ServicesTypeSection,
  ProductSection,
  HomeCTA,
  GallerySection,
  FaqSection,
  ContactSection} from "@/modules/home/components"
import TestimonialSection from "../components/TestimonialSection"
import { FaWhatsapp } from "react-icons/fa6"

const Homepage = () => {
  return (
    <section className="w-full relative min-h-[900vh]">
      <div className="fixed z-100 bg-[#25d366] rounded-full w-18 h-18 top-165 left-350 flex items-center justify-center animate-pulse duration-75">
        <FaWhatsapp className="w-10 h-10 fill-white" />
      </div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CompayOfferCTA />
      <ProjectsSections />
      <ServicesTypeSection />
      <ProductSection />
      <HomeCTA />
      <GallerySection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
    </section>
  )
}

export default Homepage