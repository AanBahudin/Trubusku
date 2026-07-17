import { Star } from 'lucide-react'
import React from 'react'

type StarsRating = {
    rating?: number
}

const StarsRating = ({rating = 5} : StarsRating) => {
  return (
    <section className='flex items-center justify-center '>
        {Array.from({length: rating}).map((_, index) => {
            return (
                <Star size={14} key={index} fill='#e6cc00' stroke='#e6cc00' />
            )
        })}
    </section>
  )
}

export default StarsRating