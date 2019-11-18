function range(first, last, step = 1) {
  let arr = [];
  if (first < last) {
    for (let i = first; i <= last; i += step) {
      arr.push(i);
    }
  } else
    for (let i = first; i >= last; i += step) {
      arr.push(i);
    }
  return arr;
} 
function sum(arr) {
  let result = arr.reduce(function(a, b) {
    return a + b;
  });
  return result;
}
console.log(sum(range(1,10)));
console.log(range(5, 2, -1));
