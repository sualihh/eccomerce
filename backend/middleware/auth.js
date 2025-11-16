import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    const { token } = req.headers;

    // console.log("authorized");

    if (!token) {
        return res.json({ success: false, message: "Not Authorized" })
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)// we get users id because we we encode this token in register/login we  used id

        req.body.userId = token_decode.id;

        next();
    } catch (error) {
        console.log(error);
        req.json({ success: false, message: error.message })
    }
}


export default authUser;