
Array.prototype.myMap = function(callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;
}

