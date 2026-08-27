import { LandingNavbar, Wrapper } from '../components'
import { FooterSection } from '@/modules/home/components'
import { Outlet } from 'react-router'


const LandingLayout = () => {
  return (
    <Wrapper className='w-full lg:w-full relative'>
        <LandingNavbar />
        <Outlet />
        <FooterSection />
    </Wrapper>
  )
}

export default LandingLayout