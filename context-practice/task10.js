let obj = {
    a: 10,
    b: 12
   };
   function func() {
    console.log(this.a);
   }
   func.call(obj); 