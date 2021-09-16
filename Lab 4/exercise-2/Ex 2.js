const moment = require('moment');
const getCurrentDate = () => {
    const wrapped = moment(new Date());
    console.log(wrapped);
}
getCurrentDate();
const currDate = moment().format("dddd, MMM Do YYYY"); 
const currTime = moment().format('LTS');  
    
console.log(`${currDate} : ${currTime}`);