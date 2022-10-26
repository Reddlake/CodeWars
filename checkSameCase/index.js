function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }



// Another way to make it with regex

function sameCase(a,b) {
  if (/[a-zA-Z]/.test(a) === false || /[a-zA-z]/.test(b) === false) return -1;
  if ((a === a.toUpperCase() && b !== b.toUpperCase()) || (a !== a.toUpperCase() && b === b.toUpperCase())) return 0;
  return 1;
}