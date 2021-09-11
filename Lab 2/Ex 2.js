function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n >= 0;
  }
function footballPoints( wins,draws,losses) {
      if(isNumeric(wins) && isNumeric(draws) && isNumeric(losses)){ 
        return (wins*3 + draws*1);
      }
      else{
          console.log("Please correct the input parameters");
          return;
      }
}
footballPoints(3,4,2);
footballPoints(5,0,2);
footballPoints(0,0,1);