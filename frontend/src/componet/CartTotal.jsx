import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../componet/Title'


const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount } = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'TOTAL'} text2={'CART'} />
      </div>  

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{getCartAmount()}.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>


        <div className='flex justify-between'>
        </div>
      </div> 
    </div>
  )
}

export default CartTotal
