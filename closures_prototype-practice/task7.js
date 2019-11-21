const squareList = (arr) => {
  arr = arr.filter(function(value){
    return (value > 0 && Number.isInteger(value)) ;
  }).map(function(number){
      return number * number;
  })
  
    return arr;
   };

   const squaredIntegers = squareList([-3, 3, 8, 8.2, 4.8, 5, 3, -3.2]);
   console.log(squaredIntegers); 
   