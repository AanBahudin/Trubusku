
import Wrapper from './Wrapper'
import { cn } from '@/lib/utils'

type ImageContainerProps = {
    className?: string,
    image: string,
    alt?: string
}

const ImageContainer = ({className, image, alt} : ImageContainerProps) => {
  return (
    <Wrapper className={cn("w-full lg:w-full h-[70vh]", className)}>
        <img src={image} alt={alt || "picture"} className='w-full h-full object-cover' />
    </Wrapper>
  )
}

export default ImageContainer