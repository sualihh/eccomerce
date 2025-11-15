import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {

  // getting the data from api
  const [list, setList] =useState([])

  const fetchList = async () => {
      try {
        // to get all elements   by importing backendUrl from app
        const responce = await axios.get(backendUrl+ '/api/product/list')
        

        if (responce.data.success) {
          setList(responce.data.products);
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
     <div className="flex  flex-r justify-between gap-2">
      {/* List table title */}
      <div className="hidden md:grid w-full grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-3 bg-gray-100">
        <b className="items-center">Image</b>
        <b className="items-center">Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
     </div>
  </>
  )};

export default List;
