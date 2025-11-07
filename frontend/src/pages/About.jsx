import React from 'react'
import Title from '../componet/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../componet/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full max-w-[450px]' src={assets.hero_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi. Voluptate rerum, ipsa perspiciatis quisquam aliquid laborum repellendus adipisci maxime dolore delectus similique eveniet assumenda saepe nisi omnis, distinctio ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos, ipsam error magni provident maxime inventore ducimus est similique? Quos laboriosam a ipsum provident rerum velit voluptas quaerat quo aut?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati quibusdam officiis, reprehenderit, fugit ratione repudiandae repellendus amet, omnis beatae facilis! Doloribus adipisci tempore architecto repudiandae necessitatibus earum reiciendis dignissimos.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta beatae fugiat vero quae dolore, magnam rerum molestias impedit ut laboriosam a voluptas deserunt! Ullam aliquam quo vel delectus neque?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convinence</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta beatae fugiat vero quae dolore, magnam rerum molestias impedit ut laboriosam a voluptas deserunt! Ullam aliquam quo vel delectus neque?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta beatae fugiat vero quae dolore, magnam rerum molestias impedit ut laboriosam a voluptas deserunt! Ullam aliquam quo vel delectus neque?</p>
          </div>
        </div>

        <NewsLetterBox />
    </div>
  )
}

export default About
