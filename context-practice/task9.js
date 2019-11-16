function filter(arr, func){
    arr2 = [];
    for(i = 0; i < arr.length; i++){
        if(func(arr[i])){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}function filter(arr, func){
    arr2 = [];
    for(i = 0; i < arr.length; i++){
        if(func(arr[i])){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, function(a) { return a % 2 == 0 }));