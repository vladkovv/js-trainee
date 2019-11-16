let phrase = {
    value: "привет"
   };
   function func(surname, name) {
    console.log(`${this.value}, ${surname} ${name}`);
   }
   let funcPhr = func.bind(phrase);
   funcPhr('Иванов', 'Иван'); 
   funcPhr('Петров', 'Петр');