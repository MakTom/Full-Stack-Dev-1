//event schema
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventDescr: String,
    eventDate:String,
    eventOwner:String
});

const event = mongoose.model('event',eventSchema,'event');
module.exports=event;