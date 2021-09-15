const difference=(num) => {
    const absDifference = Math.abs(num - 13);
    if(num > 13){
        return absDifference*2;
    } 
    return absDifference;
  }

  console.log(difference(32));
  console.log(difference(11));