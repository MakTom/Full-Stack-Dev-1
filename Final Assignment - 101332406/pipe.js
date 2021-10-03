var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('output.txt');
var write = fs.createWriteStream('output.txt.gz');
read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");		