function sayName(name) {
    console.log(`Я - ${name}`);
   };
   function miHiOrderFunction(func, ...arg) {
       for(let i = 0; i < arg.length; i++){
    func(arg[i]);
       }
   };
   miHiOrderFunction(sayName, 'Вася'); 
   miHiOrderFunction(sayName, 'Петя', 'Маша', 'John');
   miHiOrderFunction(sayName, 'Иван', 'Слава', 'Крис', 'Толя');