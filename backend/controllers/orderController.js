import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// palcind order  by cash

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        console.log("adding");

        const newOrder = new orderModel(orderData)
        await newOrder.save()


        await userModel.findByIdAndUpdate(userId, { cartData: {} })


        res.json({ success: true, message: "Ordered succesfull" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

// palcind order  by stripe

const placeOrderStripe = async (req, res) => {

}


// palcind order  by cash

const placeOrderRazorpay = async (req, res) => {

}

// display all content or admin pannel

const allOrders = async (req, res) => {


    try {
        // feach all order from db

        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}


// user order data for amins
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body;

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}


// update order status

const updateStatus = async (req, res) => {

    try {

        console.log("updating");

        const { orderId, Status } = req.body;

        // console.log(Status);
        // const order = await orderModel.findById(orderId);
        // console.log(order);

        await orderModel.findByIdAndUpdate(orderId, { Status })
        res.json({ success: true, message: "Status Updated" })

        // console.log("updated in db");


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })


    }
}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }