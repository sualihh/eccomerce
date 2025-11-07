import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { products } from '../assets/assets';

const LatestCollection = () => {

    const { products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [])
 
  return (
    <div  className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTION"}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque maxime sed velit optio beatae quam at voluptatum, dolores corporis illum sunt ducimus hic expedita molestiae culpa vitae pariatur deserunt!
        </p>
      </div>

        {/* latest products from product item */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default LatestCollection
