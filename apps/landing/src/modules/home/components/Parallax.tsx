import img from '@/assets/images/Image.jpeg'

const Parallax = () => {
  return (
    <section
        className="w-full h-100 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></section>
  )
}

export default Parallax