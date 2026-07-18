import Navbar from "@/shared/components/LandingNavbar"
import {
  HeroSection, 
  // ClientBeltSection, 
  AboutSection, 
  ServicesSection, 
  Parallax, 
  ProjectsSections,
  ServicesTypeSection,
  ProductSection,
  HomeCTA,
  GallerySection,
  FaqSection,
  ContactSection,
  MapsSection,
  FooterSection} from "@/modules/home/components"
import TestimonialSection from "../components/TestimonialSection"
import { Wrapper } from "@/shared/components"

const Homepage = () => {
  return (
    <section className="w-full relative min-h-[900vh] bg-[#f5f7fa]">
      <Navbar />
      <HeroSection />
      {/* <ClientBeltSection /> */}
      <Wrapper className="w-[80%] mx-auto">
        <AboutSection />
        <ServicesSection />
      </Wrapper>

      <Parallax />

      <Wrapper className="w-[80%]">
        <ProjectsSections />
        <ServicesTypeSection />
        <ProductSection />
        <HomeCTA />
        <GallerySection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
        <MapsSection />
      </Wrapper>

      <FooterSection />
    </section>
  )
}

export default Homepage