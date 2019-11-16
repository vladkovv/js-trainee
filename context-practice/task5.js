function getDivisiors(number) {
    let arr = [];
for (let i = 0;  i <= number; i++) {
   if (number % i == 0) {
       arr.push(i);
   } 
}
return arr;
}
console.log(getDivisiors(20));