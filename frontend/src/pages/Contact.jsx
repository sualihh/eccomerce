import React from 'react'
import Title from '../componet/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../componet/NewsLetterBox'

const Content = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/> 
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb28'>
        <img className='w-full md:max-w-[480px]' src={assets.profile_icon} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'> Dessie</p>
          <p className='text-gray-500'>Tel: (251)  9123- 4567 <br /> Email: exemple@gmail.com</p> 
          <p className='font-semibold text-xl text-gray-600'>Lorem ipsum dolor  </p>
          <p className='text-gray-500'> Know about us more</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Content
