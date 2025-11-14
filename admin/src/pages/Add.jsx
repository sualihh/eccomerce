import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Add = () => {

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



  return <form className="flex flex-col w-full items-start gap-3">
    <div>
      <p className="mb-2">Uploadimage</p>

      <div className="flex gap-2">
        <label htmlFor="image1">
          <img className="w-20" src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="" />
          <input onChange={(e)=> setImage1(e.target.value)} value={image1} type="file" id="image1" hidden/>
        </label>
        <label htmlFor="image2">
          <img className="w-20" src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="" />
          <input onChange={(e)=> setImage2(e.target.value)} value={image2} type="file" id="image2" hidden/>
        </label>
        <label htmlFor="image3">
          <img className="w-20" src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="" />
          <input onChange={(e)=> setImage3(e.target.value)} value={image3} type="file" id="image3" hidden/>
        </label>
        <label htmlFor="image4">
          <img className="w-20" src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="" />
          <input onChange={(e)=> setImage4(e.target.value)} value={image4} type="file" id="image4" hidden/>
        </label>
      </div>
    </div>

    <div className="w-full">
      <p className="mb-2">Product name</p>
      <input className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required/>
    </div>
     <div className="w-full">
      <p className="mb-2">Product description</p>
      <textarea className="w-full max-w-[500px] px-3 py-2" type="text" placeholder=" write content here" required/>
    </div>

    <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

      <div>
        <p className="mb-2">Product category</p>
        <select className="w-full px-3 py-2" name="" id="">
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kid">Kid</option>
        </select>
      </div>

      <div>
        <p className="mb-2"> subcategory</p>
        <select className="w-full px-3 py-2" name="" id="">
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>

      <div>
        <p className="mb-2">Product Price</p>
        <input className="w-full px-3 py-2 sm:w-[120px]" type="Number" min={0}  placeholder="99"/>
      </div>
    </div>


    <div>
      <p className="mb-2">Product Sizes</p>
      <div className="flex gap-3">
        <div>
          <p className="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
        </div>

        <div>
          <p className="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
        </div>

        <div>
          <p className="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
        </div>

        <div>
          <p className="bg-slate-200 px-3 py-1 cursor-pointer">Xl</p>
        </div>

        <div>
          <p className="bg-slate-200 px-3 py-1 cursor-pointer">XXl</p>
        </div>
      </div>
    </div>

    <div  className="flex gap-2 mt-2">
      <input type="checkbox" id="bestseller"/> 
      <label className="cursor-pointer" htmlFor="bestseller">Added to bestseller</label>
    </div>

    <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">Add</button>
  </form>;
};

export default Add;
