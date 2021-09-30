const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: String,
    item: String,
    customername:{
        type:String,
        require: true
    }
});

const order = mongoose.model('orders',orderSchema,'order');
module.exports=order;