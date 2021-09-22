//function to check if given number is integer or not.
const isInteger = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num) && num % 1===0;
}

//function to multiply two numbers.
exports.multiplyTwoNumbers = (num1,num2) => {
        
    if(isInteger(num1) && isInteger(num2)){
        return num1 * num2;
    }
    throw 'Parameter is not an integer!';
}

//function to double if number is even or return zero.
exports.evenDouble = (num) => {
    if(isInteger(num)){
        if(num % 2 === 0){
            return num*num;
        }
        return 0;
    }
    throw 'Parameter is not an integer!';
}