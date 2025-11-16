import express from "express"
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from "../controllers/orderController"
import adminAuth from "../middleware/adminAuth"
import authUser from "../middleware/auth"

const orderRouter = express.Router()

// admin feature
orderRouter.post("/list", adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updateStatus)

// payment featue
orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/stripe", authUser, placeOrderStripe)
orderRouter.post("/razorpay", authUser, placeOrderRazorpay)

//user feature
orderRouter.post("/userordersst", authUser, userOrders)

export default orderRouter