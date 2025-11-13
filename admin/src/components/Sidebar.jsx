import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/add'>
            <img src={assets.add_icon} alt="" /> 
            <p className='hidden md:block'>add items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/list'>
            <img src={assets.order_icon} alt="" /> 
            <p className='hidden md:block'>list items</p>
        </NavLink><NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/order'>
            <img src={assets.order_icon} alt="" /> 
            <p className='hidden md:block'>order items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
