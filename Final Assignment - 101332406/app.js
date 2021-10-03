var fs = require("fs");
var stream;
stream = fs.createReadStream("./data.txt");

stream.on("data", function(data) {
    console.log(data);
    var chunk,streamW;
    chunk = data.toString();
    console.log(chunk);
    streamW = fs.createWriteStream("./output.txt");
    streamW.write(chunk);
    console.log('write is complete');
}); 



