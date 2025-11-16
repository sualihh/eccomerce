import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';
   
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

// let's create a functionnnamed logout to logout

  const logout =  () => {
    navigate('/login')
    localStorage.removeItem("token");
    setToken("")
    setCartItems({})
  }
  return (

    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/" ><img src={assets.loogo} className='w-36 h-20' alt="logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={() => {
           navigate('/collection')
           setShowSearch(true)}} 
           src={assets.search_icon} className='w-5 cursor-pointer' alt="search icon" />
        <div className='group relative'>
          <img onClick={() => token? null: navigate("/login")} src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile" />
          {/* dropdown */}
          { token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-0'>
            <div className='flex flex-col gap-2 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>MyProfile</p>
              <p className='cursor-pointer hover:text-black'>Orders </p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout </p>
            </div>
          </div>}
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-10 min-w-5' alt="cart" />
           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-8 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* sidebar menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} className='rotate-90 h-4' alt="dropdown" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
