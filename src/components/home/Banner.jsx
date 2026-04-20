import React from 'react'
import Bannerimg from '../../assets/Images/Home/Bannerimg.png'

const Banner = () => {
  return (
    <div className='h-[400px] bg-[#2196F3]'>
      <img 
      src={Bannerimg} 
      alt='Banner Image'
      className='w-full h-full object-cover' />
    </div>
  )
}

export default Banner
