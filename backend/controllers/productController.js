import { v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'

// to add
const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestSeller} = req.body;

        const image1 = req.files.image1?.[0];
        const image2 = req.files.image2?.[0];
        const image3 = req.files.image3?.[0];
        const image4 = req.files.image4?.[0];
 
  // to ignore empty images
        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);


      // toupload in to cloudinary      
        let imagesURL = await Promise.all(
          images.map(async (item)=> {
            // to change buffer in to base 64 because multer store in buffer format
            const base64 = `data:${item.mimetype};base64,${item.buffer.toString("base64")}`;

            let result = await cloudinary.uploader.upload(base64, {resource_type:'image'});
            return result.secure_url
          } )
        )

        console.log(name, description, price, category, subCategory, sizes, bestSeller);
        
    // console.log(sizes)
        // to store in mongodb
        const productData = {
          name, 
          description,
          price: Number(price),
          category,
          subCategory,
          bestSeller: bestSeller === 'true' ? true : false,
          sizes: JSON.parse(sizes) ,
          images: imagesURL,
          date:Date.now()
        }


        // console.log(productData);
// save to database
        const product = new productModel(productData);
        await product.save();

        res.json({success:true, msg: "Product added successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false, msg: error.msg})
    }
}

// to get all products
const listProduct = async (req, res) => {
  try {
    
    // fetch all products from db using find() method
    const products = await productModel.find();
    res.json({success:true, products})

  } catch (error) {
         console.log(error);
        res.json({success:false, msg: error.msg})
  }
}

//remove 
  const removeProduct = async (req, res) => {

    try {
      // to remove by id from database
      await productModel.findByIdAndDelete(req.body.id);
      res.json({success:true, msg: "Product removed   successfully"}) 
    } catch (error) {
       console.log(error);
       res.json({success:false, msg: error.msg})
    }
}

// single product info
  const singleProduct = async(req, res) => {

    try {

      const {productId} = req.body;

      const product = await productModel.findById(productId);

      res.json({success:true, product}) 
    } catch (error) {

      console.log(error);
      res.json({success:false, msg: error.msg})
    }
}

export {
   addProduct, 
   listProduct, 
   removeProduct, 
   singleProduct}