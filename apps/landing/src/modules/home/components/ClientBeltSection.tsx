// import bniImg from '../../../assets/images/bni.png'
import bniImg from '@/assets/images/bni.png'

const ClientBeltSection = () => {
  return (
    <section className='w-[90%] px-6 py-10 bg-[#A8BDA9] rounded-md my-16 mx-auto flex items-center justify-between'>
        {Array.from({length: 6}).map((_, index) => {
            return (
                <img src={bniImg} className='w-36' key={index} />
            )
        })}
    </section>
  )
}

export default ClientBeltSection