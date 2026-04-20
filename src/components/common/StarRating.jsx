import React from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({value}) => {
  return (
    <div className='flex gap-1'>
      {
        [...Array(5)].map((_,i)=>(
            <FaStar
            key={i}
            color={i < value ? "#facc15" : "#e5e7eb"}
            size={18}
            />
        ))
      }
    </div>
  )
}

export default StarRating
