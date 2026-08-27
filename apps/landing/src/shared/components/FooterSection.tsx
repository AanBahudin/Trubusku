import { Logo, SocialMedia, Wrapper } from '@/shared/components'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const FooterSection = () => {

  const linksSection = ['Tentang Trubusku', 'Produk Trubusku', 'Layanan Trubusku', 'FAQ', 'Galeri Trubusku']

  return (
    <main className='w-full lg:w-full  py-20 border-t-2 border-t-secondary-200'>
      <Wrapper>
        <section className='grid gap-y-10 xl:gap-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10'>
          <main className='w-8/8'>
            <Logo className='w-30 h-30' />
            <p className='text-sm text-secondary-700'>Platform resmi Kios Batu Alam Trubusku. Jembatan masyrakat dan perusahaan terbaik Indonesia.</p>
          </main>

          <main className='w-fit lg:place-self-center'>
            <h2 className='uppercase text-secondary-900 font-semibold mb-4'>links</h2>
          
            <div className='flex flex-col gap-y-3'>
              {linksSection.map((item: string, index: number) => (
                <p key={index} className='text-secondary-700 text-sm hover:text-primary-300 cursor-default'>{item}</p>
              ))}
            </div>
          </main>

          <main className='flex flex-col items-start'>
            <h2 className='uppercase text-secondary-900 font-semibold mb-4'>kontak</h2>

            <div className='flex items-center justify-center gap-x-2 text-secondary-700 text-sm'>
              <Phone className='w-4 stroke-secondary-900' />
              <p><strong>234123</strong> (Jam Kerja)</p>
            </div>
            <p className='text-xs my-2 text-secondary-700'>Konsultasi & Aduan (text only)</p>

            <div className='flex items-center justify-center my-2 gap-x-2'>
              <FaWhatsapp className='fill-[#25d366] w-5 h-5' />
              <p className='text-xs text-secondary-900'>Perusahaan: 0813-2064-789 (Whats'App)</p>
            </div>
            
            <div className='flex items-center justify-center gap-x-2'>
              <FaWhatsapp className='fill-[#25d366] w-5 h-5' />
              <p className='text-xs text-secondary-900'>Perusahaan: 0819-2364-219 (Whats'App)</p>
            </div>
          </main>

          <main className='flex flex-col items-start lg:place-self-start'>
            <h2 className='uppercase text-secondary-900 font-semibold mb-4'>media sosial</h2>
            <SocialMedia />
            <p className='mt-6 text-sm text-secondary-800 tracking-wide'>@trubusku</p>
          </main>
        </section>

        <section className='my-10'>
          <hr className='w-full border border-slate-200 mb-4' />
          <div className='w-full flex justify-between items-center text-xs md:text-sm text-secondary-500'>
              <p>Kios Batu Alam Trubusku</p>
              <p>Dilindungi Hak Cipta dan Ketentuan Berlaku</p>
          </div>
        </section>
      </Wrapper>
    </main>
  )
}

export default FooterSection