import logo from "./logo.jpg"
import search_icon from "./search_icon.png"
import profile_icon from "./profile_icon.jpg"
import cart_icon from "./cart_icon.png"
import menu_icon from "./menu_icon.png";
import close_icon from "./close_icon.jpg";
import dropdown_icon from "./dropdown_icon.png";
import hero_img from "./hero_img.jpg";
import p_img1 from "./p_img1.jpg"
import p_img2_1 from "./p_img2_1.jpg"
import p_img2_2 from "./p_img2_2.jpg"
import p_img2_3 from "./p_img2_3.jpg"
import p_img2_4 from "./p_img2_4.jpg"
import p_img3 from "./p_img3.jpg"
import p_img4 from "./p_img4.jpg"
import p_img5 from "./p_img5.jpg"
import p_img6 from "./p_img6.jpg"
import p_img7 from "./p_img7.jpg"
import p_img8 from "./p_img8.jpg"
import p_img9 from "./p_img9.jpg"
import p_img10 from "./p_img10.jpg"
import p_img11 from "./p_img11.jpg"
import p_img12 from "./p_img12.jpg"
import ProductItem from "../componet/ProductItem";
import exchange_icon from "./exchange_icon.png"
import quality_icon from "./quality_icon.png"
import support_img from "./support_img.jpg"
import log from "./log.png"
import cross_icon from "./cross_icon.png"
import star_icon from "./star_icon.png"
import star_dull_icon from "./star_dull_icon.png"
import bin_icon from './bin_icon.png'
import stripe_logo from "./stripe_logo.png"
import razorpay_logo from "./razorpay_logo.png"

export const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    close_icon,
    dropdown_icon,
    hero_img,
    exchange_icon,
    support_img,
    quality_icon,
    log,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_logo,
    razorpay_logo
}


export const products = [
    {
        _id: "aaaaa",
        name:"women trouser",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        price:89,
        image:[p_img1], 
        category :"Women",
        subCategory:"Bottomwear",
        sizes:["S","M","L"],
        dates:76876567890,
        bestseller:true,

    },
    {
        _id: "aaaab",
        name:"try",
        description:"lorem ipsum",
        price:5,
        image:[p_img2_1,p_img2_2,p_img2_3,p_img2_4], 
        category :"Men",
        subCategory:"Winterwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaac",
        name:"try",
        description:"lorem ipsum",
        price:755,
        image:[p_img3], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaad",
        name:"try",
        description:"lorem ipsum",
        price:565,
        image:[p_img4], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaae",
        name:"try",
        description:"lorem ipsum",
        price:85,
        image:[p_img5], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaaf",
        name:"try",
        description:"lorem ipsum",
        price:35,
        image:[p_img6], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaag",
        name:"try",
        description:"lorem ipsum",
        price:65,
        image:[p_img7], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaah",
        name:"try",
        description:"lorem ipsum",
        price:45,
        image:[p_img8], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },{
        _id: "aaaai",
        name:"try",
        description:"lorem ipsum",
        price:50,
        image:[p_img9], 
        category :"Men",
        subCategory:"Topwear",
        sizes:["M","L","XL"],
        dates:"34567890123",
        bestseller:true,

    },
]