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

const Homepage = () => {
  return (
    <section className="w-full relative min-h-[900vh]">
      <Navbar />
      <HeroSection />
      {/* <ClientBeltSection /> */}
      <AboutSection />
      <ServicesSection />
      <Parallax />
      <ProjectsSections />
      <ServicesTypeSection />
      <ProductSection />
      <HomeCTA />
      <GallerySection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <MapsSection />
      <FooterSection />
    </section>
  )
}

export default Homepage