function maxNum(number) {

let str = String(number);
let max = 0;
for( let value of str ) {
    if (str[value] > max){
        max = str[value];
    }
}
return max;
}
console.log(maxNum(16354));
