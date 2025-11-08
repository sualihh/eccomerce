import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../models/userModel";


// route for login
const loginUser = async (req, res) => {
    
}



// route for registration

const registerUser = async (req, res) => {
    //res.json({msg: "register api working"})
    try {
        
        const {name, email, password} = req.body;

        // check if the user is exist

        const exist = await userModel.findOne({email});

        if(exist){
            return res.json({success:false, msg: 'user alredy exist'})
        }

        // validate email and password 

        if (!validator.isEmail(email)) {

            return res.json({success:false, msg: 'enter valid email'})
            
        }
        if (password.length < 8) {

            return res.json({success:false, msg: 'enter 8 character password'})   
        }

        // hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name, 
            email, 
            password:hashedPassword
        })

    } catch (error) {
        
    }
}


// for admin
const adminLogin= async (req, res) => {

}

export {loginUser, registerUser, adminLogin}