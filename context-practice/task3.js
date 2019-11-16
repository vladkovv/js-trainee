function simple(number) {
    if (number == 2 ) {
       return true; 
    }
    else{
if (number > 1) {
    for (let i = 2; i < number; i++) {
       
       if (number % i == 0){
           return false;

       }
       return true;
    }
}
}
}
console.log(simple(5));