function buildArray (num){
    var myArray= new Array();
    for(var i = 0 ; i < num ; i++){
        myArray.push(i);
    }
    return myArray;
}

console.log(buildArray(2));
console.log(buildArray(25));