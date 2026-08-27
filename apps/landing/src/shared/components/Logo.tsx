import logo from '@/assets/images/trubusku.png'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

type LogoProps = {
    className?: string
}

const Logo = ({className} : LogoProps) => {
  return (
    <Link to='/'>
      <img className={cn('w-10 h-10 cursor-default', className)} src={logo} alt="Logo" />
    </Link>
  )
}

export default Logo