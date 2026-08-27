import aboutPic from '@/assets/images/House.jpeg'
import { Wrapper } from '@/shared/components'
import Button from '@/shared/components/Button'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router'

const AboutSection = () => {
  return (
    <section className='w-full bg-background'>
      <Wrapper className="pt-40 pb-20 mx-auto flex flex-col lg:flex-row gap-x-20 items-center justify-between">
        {/* main image section */}
        <img className='w-full lg:w-3/8 h-100 object-cover rounded-3xl shadow-2xl' src={aboutPic} alt="About pict" />
        {/* description section */}
        <main className='w-full lg:w-5/8'>
          <h1 className='text-3xl lg:text-4xl font-bold text-primary-900 mt-10 lg:mt-0'>Sekilas Mengenai Kami</h1>
          <p className='my-4 text-[16px] text-secondary-500 leading-relaxed tracking-wide'>Berawal dari kecintaan terhadap keindahan alam, <span className='font-bold text-primary-500'>Trubusku</span> hadir sebagai penyedia layanan pertamanan dan batu alam di Kota Cilegon. Kami membantu pelanggan mewujudkan taman yang estetis, fungsional, dan sesuai dengan karakter setiap ruang.</p>
          <p className='my-4 text-[16px] text-secondary-500 leading-relaxed'>Mulai dari penjualan tanaman dan batu alam, desain landscape, pembuatan taman, kolam, perawatan taman, penyewaan tanaman, hingga bouquet, seluruh layanan kami dikerjakan dengan mengutamakan kualitas, ketelitian, dan kepuasan pelanggan.</p>

          <p className='my-4 text-[16px] text-secondary-500 leading-relaxed'>Kami percaya bahwa setiap ruang memiliki karakter yang berbeda. Karena itu, setiap proyek kami kerjakan dengan perhatian terhadap detail, kualitas material, dan kebutuhan setiap pelanggan, sehingga menghasilkan taman yang tidak hanya indah dipandang tetapi juga nyaman dinikmati dalam jangka panjang..</p>

          <Button>
            <Link to='/layanan' className='flex items-center justify-center gap-x-2 cursor-default'>
              <span>Pelajari lebih lanjut</span>
              <MoveRight className='w-4' strokeWidth={3} />
            </Link>
          </Button>
        </main>
      </Wrapper>
    </section>
  )
}

export default AboutSection