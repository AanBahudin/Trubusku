import { FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import { cn } from '@/lib/utils'

interface SocialMediaInterface {
    className?: string
}

const SocialMedia = ({className} : SocialMediaInterface) => {
  return (
    <section className={cn('flex items-center justify-center gap-x-4', className)}>
        <div className='p-2 rounded-lg bg-secondary-100 group hover:bg-primary-300'>
            <FaInstagram className='w-6 h-6 fill-secondary-800 group-hover:fill-secondary-50' />
        </div>

        <div className='p-2 rounded-lg bg-secondary-100 group hover:bg-primary-300'>
            <FaXTwitter className='w-6 h-6 fill-secondary-800 group-hover:fill-secondary-50' />
        </div>

        <div className='p-2 rounded-lg bg-secondary-100 group hover:bg-primary-300'>
            <FaFacebookSquare className='w-6 h-6 fill-secondary-800 group-hover:fill-secondary-50' />
        </div>

        <div className='p-2 rounded-lg bg-secondary-100 group hover:bg-primary-300'>
            <FaTiktok className='w-6 h-6 fill-secondary-800 group-hover:fill-secondary-50' />
        </div>
    </section>
  )
}

export default SocialMedia