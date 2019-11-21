function sum(num){
    let temp = num;
    count = function(){
        let arg = arguments[0] ? arguments[0] : 0;
        return temp = temp + arg;
};
return count();
}
console.log(sum(3));
console.log(sum(5));
console.log(sum(220));
