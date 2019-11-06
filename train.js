// Задание №1
console.log("Задание № 1");
const str = "Привет";
const num = 123;
const flag = true;
const txt = "true";
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// Задание №2 (Площадь)
console.log("Задание № 2");
const height = 23;
const width = 10;
let s = height * width;
console.log(`Площадь прямоугольника = ${s}`);

// Задание №3(while)
console.log("Задание № 3");
let i = 45;
while (i < 675) {
  if (i % 10 == 0) {
    console.log(i);
  }
  i++;
}

//Задание 4
function even() {
  newFunction();
  function newFunction() {
      console.log("Задание № 4");
    randomValue = Math.floor(Math.random() * 1000);
    var randomObject = new Number(randomValue);
    console.log(randomValue);
    if (randomValue % 2 === 0) {
      answer = randomObject
        .toString()
        .split("")
        .reduce(function(prev, current) {
          return parseInt(prev) + parseInt(current);
        });
    } else {
      answer = randomObject
        .toString()
        .split("")
        .reduce(function(prev, current) {
          return parseInt(prev) * parseInt(current);
        });
    }
    console.log(answer);
  }
}
even();


//Задание 5
function avg(a, b, c) {
    console.log("Задание № 5");
    if (a < b && b < c || c < b && b < a) {
        console.log(`Среднее число = ${b}`);
    }
    if (b < a && a < c || c < a && a < b) {
        console.log(`Cреднее число = ${a}`);
    }
    if (a < c && c < b || b < c && c < a) {
        console.log(`среднее число = ${c}`);
    }
    if (a == b || b == c || a == c) {
        console.log("Ошибка!");
    }
    
}
avg(3,2,1);

//Задание 6(кубы)
function cb(a, b) {
    console.log("Задание № 6");
    for (a; a < b; a++) {
        console.log(Math.cbrt(a));
       
    }
}
cb(9, 99);

//Задание 7
function sum(n) {
  console.log("Задание 7");
  let m = 1;
  let temp= 0;
  while (m <= n) {
  temp += m;
  m++;
  }
  console.log(`Cумма чисел = ${temp}`);
}
sum(10);

//Задание 8
function summ() {
  console.log("Задание № 8");
  let temp = 0;
  for (let i = 100; i < 200; i++) {
    if (i%17 == 0) {
      temp += i;
    }
  }
  console.log(`Сумма чисел = ${temp}`);
}
summ();

//Задание 9
function mypow (a, b) {
  let temp;
  console.log("Задание № 9");
  temp = Math.pow(a, b);
  console.log(`Результа возведения в степень = ${temp}`);
}
mypow(3,3);

//Задание 10
function week(number) {
  console.log("Задание № 10");
  if (number === 1) {
console.log("Понедельник!");
}
  if (number === 2)  {
    console.log("Вторник!");
  }
  if (number === 3)  {
     console.log("Среда!");
    }
  if (number === 4)  {
     console.log("Четверг!");
      }
  if (number === 5)  {
      console.log("Пятница!");
        }
  if (number === 6)  {
      console.log("Суббота!");
          }
  if (number === 7)  {
      console.log("Воскресение!");
            }
  
}
week(5);

//Задание 11
/*function inputNotZero() {
  i = 0;
  sum = 0;
  console.log("Задание № 11")
  const readline = require('readline');

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  
  rl.on('line', (input) => {
      if(input != 0) {
          console.log(`Received: ${input}`);
          i++;
          sum += Number(input);
      } else {
          console.log(`quantity = ${i}`);
          console.log(`sum = ${sum}`);
          console.log(`average = ${sum / i}`);
          rl.close();
      }
  }); 
}
inputNotZero();*/

//Задание 12
function ABCD(){
  console.log("Задание № 12")
  randomValue = Math.floor(Math.random() * 10000);
  console.log(randomValue);
  var randomObject = new Number(randomValue);
  answer = randomObject.toString().split("").slice(0, 2);
  console.log(answer);
  number1 = Number(answer[0] + answer [1]);
  answer = randomObject.toString().split("").slice(2, 4);
  number2 = Number(answer[0] + answer [1]);
  console.log(answer);
  console.log(`Сумма чисел ab + cd = ${number1 + number2}`);
}

ABCD();