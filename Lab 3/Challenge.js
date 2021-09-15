const myArray = [1,2,3,4];

const calculateSum=myArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(`Sum of Array - ${calculateSum}`);

const calculateProduct=myArray.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log(`Product of Array - ${calculateProduct}`);