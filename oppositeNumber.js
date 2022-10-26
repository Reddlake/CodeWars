function opposite(number) {
    let sign = Math.sign(number)
    if(sign === 1){
        return number * -1;
    } else if (sign === -1){
        return number * sign
    }
   }

   console.log(opposite(5));





   //Very simple, given an integer or a floating-point number, find its opposite.