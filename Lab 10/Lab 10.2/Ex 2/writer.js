const fs = require('fs');

const file = fs.createWriteStream("./writer.txt");

const writeData = ()=>{
    for(let i=0; i <= 10; i++){
        file.write('this is some write line text\n');
    }
}

module.exports ={
    writeData:writeData
}