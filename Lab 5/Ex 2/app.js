const calc = require('./calculator.js');
const comp = require('./comparer.js');
var a= 5,b=5;
if (comp.areNumbersEqual(a,b)){
    calc.add(a,b);
}
else{
    calc.subtract(a,b);
}