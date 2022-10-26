function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    })
  }
const array = [1,2,3,4,5,6];
console.log(removeEveryOther(array));