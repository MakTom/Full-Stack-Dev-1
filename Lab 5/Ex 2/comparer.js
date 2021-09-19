//export named function

exports.areNumbersEqual = (a,b) => {
    console.log("Comparing two numbers");
    if(a===b)
    {   
        console.log("Numbers are equal");
        return true;
    }
    console.log("Numbers are not equal");
    return false;
}
