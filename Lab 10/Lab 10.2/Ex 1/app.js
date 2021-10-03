const fs = require('fs');

const stream = fs.createReadStream("data.txt");

stream.on("data",(data)=>{
    console.log(data.toString());
});