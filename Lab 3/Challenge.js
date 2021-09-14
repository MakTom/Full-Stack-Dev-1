var myArray = [1,2,3,4];

let calculateSum=myArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(`Sum of Array - ${calculateSum}`);

let calculateProduct=myArray.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log(`Product of Array - ${calculateProduct}`);