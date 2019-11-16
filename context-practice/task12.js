let phrase = {
    value: "привет"
   };
   function func(surname, name) {
    console.log(`${this.value}, ${surname} ${name}`);
   }
   func.apply(phrase, ['Иванов', 'Иван']);          