import heroImage from "../../../assets/images/Image.jpeg"; 
const HeroSection = () => {
  return (
    <section>
        <img src={heroImage} className='w-full h-screen object-cover' />
    </section>
  )
}

export default HeroSection