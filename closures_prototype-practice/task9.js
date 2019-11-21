const s = [23, 65, 98, 5];
Array.prototype.myReducer = function(callback, result) {
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};
const newArray = s.myReducer((total, item) => {
    if (item % 5 === 0){
        total.push(item);
    }
    return total;
}, []);
console.log(newArray);