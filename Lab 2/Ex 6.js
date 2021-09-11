function emptyArray (myArray){
    
    while(myArray.length){
        myArray.pop();
    }
    return myArray;
}

console.log(emptyArray([1,2,3]));
console.log(emptyArray(["egg","bacon","toast","coffee","random","juice"]));