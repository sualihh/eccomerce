import jwt from "jsonwebtoken";


const adminAuth = async (req, res, next) => { 
    try {
        // to get tokens from header
        const {token} = req.headers;

        // check token if available

        if (!token) {
            return res.json({
                success:false,
                message:"NOT AUTHORIZED"
            })
        }
        // decode token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        // CHECKING THE decoded token is equal to admin email and password

        if (token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
             return res.json({
                success:false,
                message:"NOT AUTHORIZED"
            })
        } 
        next();
    } catch (error) {
        console.log(error);
        res.json({
                success:false,
                message:"NOT AUTHORIZED"
            })
    }
}


export default adminAuth;