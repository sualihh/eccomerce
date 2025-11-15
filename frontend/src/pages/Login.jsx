import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Login = () => {


 

  const [currentState, setCurrentState] = useState('Sign Up')
  const {token, setToken, navigate, backendurl} = useContext(ShopContext)
  // creating state variable to user login
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


   const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      
      if (currentState === 'Sign Up'){
        
        const responce = await axios.post(backendurl + "api/user/register", {name,email,password})

        console.log(responce.data);
        
      } else {

      }
    } catch (error) {
      
    }
  }




  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col  items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState ==='Login'? '': <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name'required />}
      
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Passwrd'required />
      <div className='w-full flex justify-between text-xs mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password?</p>
        {currentState === 'Login'
        ? <p className='cursor-pointer' onClick={()=> setCurrentState('Sign Up')}>Create account</p>
        : <p className='cursor-pointer' onClick={()=> setCurrentState('Login')}>Login</p>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2'>{currentState === 'Login'? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
