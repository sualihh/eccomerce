import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../componet/Title'


const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount } = useContext(ShopContext)
  return (
    <div >
      <  

      <div >
        <div >
        </div>
        


        
      </div> 
    </div>
  )
}

export default CartTotal
