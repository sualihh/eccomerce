import orderModel from "../models/orderModel.js";


// palcind order  by cash

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }


    } catch (error) {

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

}


// user order data for amins
const userOrders = async (req, res) => {

}


// update order status

const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }