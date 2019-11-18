function sum(...numbers) {

let result = numbers.reduce(function(a, b) {
    return a + b;
    });
    return result;
}

console.log(sum(1,2,3,4));

 