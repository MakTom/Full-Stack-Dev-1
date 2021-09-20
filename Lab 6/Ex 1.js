var intervalID = setInterval(myCallback, 1000);
var i = 10;
function myCallback()
{
    if(i>0){
        console.log(i);
        i--;
    }
    else{
        console.log("time is up!");
        clearInterval(intervalID)
    }
}