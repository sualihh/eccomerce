import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <img className='w-[max(10%, 80px)]' src={assets.logo} alt="logo" />
      <button className='text-9xl'>Logout</button>
    </div>
  )
}

export default Navbar
