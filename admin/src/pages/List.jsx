import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({token}) => {

  // getting the data from api
  const [list, setList] =useState([])

  const fetchList = async () => {
    
      try {
        // to get all elements   by importing backendUrl from app
        const responce = await axios.get(backendUrl+ '/api/product/list')
        

        if (responce.data.success) {
          setList(responce.data.products);
          console.log(list);
          
        } else {
          toast.error(responce.data.message)
          
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  // creating for removing product when the x cicked
  const removeProduct = async (id) =>  {
     
   try {
    
     const responce = await axios.post(backendUrl+"/api/product/remove", {id}, {headers: {token}})


    if (responce.data.success) {
      toast.success(responce.data.message)
      toast.success("deleted")

      await fetchList()
    } else {
      toast.error(responce.data.message)
    }
   } catch (error) {
        console.log(error)
        toast.error(error.message)
   }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
   <>
     <p className="mb-2">All product List</p>
     <div className="">
      {/* List table title */}
      <div className="hidden  md:grid w-full grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-3 bg-gray-100">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* list  */}

      {
        list.map((item, index) =>(
          
            <div className="grid grid-cols-[1fr_3fr_1fr_0fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={index}>
              <img className="w-12" src={item.images[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              {/* // we declare currency in app.js */}
              <p onClick={() => removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">X</p>
            </div>
           
        ))
      }
     </div>
  </>
  )};

export default List;
