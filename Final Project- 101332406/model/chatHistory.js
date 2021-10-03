const mongoose = require("mongoose");

const chatHistorySchema = new mongoose.Schema({
    username: String,
    message: String,
    room:String,
    date:String,
    socketId:String
});

const chatHistory = mongoose.model('chatHistory',chatHistorySchema,'chatHistory');
module.exports=chatHistory;