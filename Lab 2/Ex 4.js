function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
  }
function helloWorlds(num){
    if(!isNumeric(num)){
        console.log("Goodbye World");
        return;
    }
    for(var i=0 ; i <= num ; i++){
        console.log("Hello World!");
    }
}

helloWorlds(5);
helloWorlds(true);
helloWorlds("Hello");
helloWorlds(null);
helloWorlds(undefined);