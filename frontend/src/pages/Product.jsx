import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../componet/RelatedProducts'
// import { products } from '../assets/assets'

const Product = () => {
  const { productID } = useParams();
  const { products, currency, addToCart, navigate } = useContext(ShopContext);
  const [ productData , setProductData ] =useState(false)
  const [ image, setImage]= useState('')
  const [ size, setSize]= useState('')


  const fetchProductData = async () => {
    
    products.map((item) => {
      if (item._id === productID){ 
        setProductData(item);
        
        setImage(item.images[0]);
        return null;
    }

  }) }


  useEffect(() => {
    fetchProductData();
  }, [productID, products]) 

  
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity easy-in duration-500 opacity-100'>
      {/* data */}
      <div className='flex gap-12 flex-col sm:flex-row'>
          {/* image */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal sm:w-[18.7%] w-full'>
              {productData.images.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' key={index} alt="" />
              ))}
            </div>
            <div className='w-full sm:w-[60%]'>
              <img className='w-[80%] h-auto' src={image} alt="" />
            </div>
            {/* informmation */}

            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-5'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-5'>
                <img className="w-3.5"src={assets.star_icon} alt="" />
                <img className="w-3.5"src={assets.star_icon} alt="" />
                <img className="w-3.5"src={assets.star_icon} alt="" />
                <img className="w-3.5"src={assets.star_icon} alt="" />
                <img className="w-3.5"src={assets.star_dull_icon} alt="" />
                <p>(34)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item, index) => (
                    <button onClick={() =>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size? 'border-orange-500' :''}`}>{item}</button>
                  ))}
                  
                </div>
              </div>
              <button onClick={() => {navigate('/cart'); addToCart(productData._id, size)}} className='bg-black text-white px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-5 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col'>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum dolor.</p>
              </div>
            </div>
          </div>
      </div>
      {/* reviw and description */}

      <div className='mt-5'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review(34)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 tetx-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit qui, et optio assumenda nesciunt eum ad dolores autem quam, quibusdam officia. Ullam, nihil voluptate. Placeat saepe a molestias id!          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit qui, et optio assumenda nesciunt eum ad dolores autem quam, quibusdam officia. Ullam, nihil voluptate. Placeat saepe a molestias id!          </p>
          
        </div>
      </div>
      {/* related product */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div  className='opaxity-0'>

  </div>
}

export default Product;
