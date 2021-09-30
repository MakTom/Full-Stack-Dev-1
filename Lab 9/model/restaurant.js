const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    city: {
        type: String,
        require: true
    },
    cusine: String,
    name:{
        type:String,
        require: true
    },
    active: {
        type:Boolean,
        default: true
    }
});

const Restaurants = mongoose.model('Restaurants',restaurantSchema,'Restaurants');
module.exports=Restaurants;