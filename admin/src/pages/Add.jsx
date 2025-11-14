import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {

  // state variable to store images

  const [image1,setImage1]= useState(false);
  const [image2,setImage2]= useState(false);
  const [image3,setImage3]= useState(false);
  const [image4,setImage4]= useState(false);

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([]);


  const onSubmitHandler = async(e) => {
    e.preventDefault();

    try {
      const formData= new FormData();


      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))// we cant send array in form data so we have to change it in to sring

      image1 && formData.append("image1", image1)// sending images
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)


      // sending  these states by importing axios and by importing backendUrlfrom app.js
      const responce = await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}});

      // console.log(responce.data);
        // to clear the page to after add

        if(responce.data.success) {
          // by importing toast package
          toast.success(responce.data.message)
          setName('')
          setDescription('')
          setPrice('')
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
          setName('')
          setName('')
        } else {
          toast.error(responce.data.error)
        }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return <form  onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
    <div>
      <p className="mb-2">Uploadimage</p>

      <div className="flex gap-2">
        <label htmlFor="image1">
          <img className="w-20" src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" />
          <input onChange={(e)=> setImage1(e.target.files[0])}  type="file" id="image1" hidden/>
        </label>
        <label htmlFor="image2">
          <img className="w-20" src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" />
          <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id="image2" hidden/>
        </label>
        <label htmlFor="image3">
          <img className="w-20" src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" />
          <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id="image3" hidden/>
        </label>
        <label htmlFor="image4">
          <img className="w-20" src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="" />
          <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id="image4" hidden/>
        </label>
      </div>
    </div>

    <div className="w-full">
      <p className="mb-2">Product name</p>
      <input 
      onChange={(e)=> setName(e.target.value)} value={name}
      className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required/>
    </div>
     <div className="w-full">
      <p className="mb-2">Product description</p>
      <textarea 
      onChange={(e)=> setDescription(e.target.value)} value={description}
      className="w-full max-w-[500px] px-3 py-2" type="text" placeholder=" write content here" required/>
    </div>

    <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

      <div>
        <p className="mb-2">Product category</p>
        <select 
        onChange={(e)=> setCategory(e.target.value)} 
        className="w-full px-3 py-2" name="" id="">
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kid">Kid</option>
        </select>
      </div>

      <div>
        <p className="mb-2"> subcategory</p>
        <select 
        onChange={(e)=> setSubCategory(e.target.value)} 
        className="w-full px-3 py-2" name="" id="">
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>

      <div>
        <p className="mb-2">Product Price</p>
        <input onChange={(e)=> setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="number" min={0}  placeholder="99"/>
      </div>
    </div>


    <div>
      <p className="mb-2">Product Sizes</p>
      <div className="flex gap-3">
        <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S"): [...prev,"S"])}>
          {/* // if thissize is clicked beforeit remove and if it is not clicked add this value */}
          <p className={`${sizes.includes("S")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          {/* // when it get clicked  to store in an array */}
        </div>

        <div>
          <p onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M"): [...prev,"M"])} className={`${sizes.includes("M")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
        </div>

        <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L"): [...prev,"L"])}>
          <p className={`${sizes.includes("l")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
        </div>

        <div onClick={() => setSizes(prev => prev.includes("Xl") ? prev.filter(item => item !== "Xl"): [...prev,"Xl"])}>
          <p className={`${sizes.includes("Xl")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Xl</p>
        </div>

        <div onClick={() => setSizes(prev => prev.includes("XXl") ? prev.filter(item => item !== "XXl"): [...prev,"XXl"])}>
          <p className={`${sizes.includes("XXl")? "bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XXl</p>
        </div>
      </div>
    </div>

    <div  className="flex gap-2 mt-2">
      <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller"/> 
      <label className="cursor-pointer" htmlFor="bestseller">Added to bestseller</label>
    </div>

    <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">Add</button>
  </form>
};

export default Add;
