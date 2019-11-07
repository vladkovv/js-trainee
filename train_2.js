//Задание 1
console.log("задание 1");
let family = ["Андрей", "Антон", "Людмила", "Влад"];
family.unshift("Дима", "Макс");
console.log(family);
family.push("Света", "Оля");
console.log(family);
console.log(`Длина массива = ${family.length}`);

//Задание 2
console.log("Задание 2");
let arr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    arr.push(i);
  }
}
console.log(arr);
console.log(`Количество элементов = ${arr.length}`);
console.log(`Массив в обратном порядке: [ ${arr.reverse()} ]`);

//Задание 3
function pathLength(v, t) {
  console.log("Задание 3");
  let s = v * t;
  console.log(`Длина пути = ${s}`);
}
pathLength(120, 2);

//Задание 4
console.log("Задание 4");
let now = new Date();
console.log(now);

//Задание 5
function mypow(a, b) {
  console.log("Задание 5");
  let temp = 0;
  temp = Math.pow(a, b);
  console.log(`Результат возведения в степень = ${temp}`);
}
mypow(4, 2);

//Задание 6
function SIN() {
  console.log("Задание 6");
  for (let i = 0; i <= 90; i += 5) {
    let result = Math.sin(i);
    console.log(result);
  }
}
SIN();

//Задание 7
function date() {
  console.log("Задание 7");
  var d = new Date();
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  console.log(`Текущая дата: ${d.toLocaleString("en-US", options)}`);
  d.setDate(d.getDate() + 100);
  console.log(`Дата через 100 дней: ${d.toLocaleString("en-US", options)}`);
}
date();

//Задание 8
("use strict");
function changeCar(inputObject) {
  let newCar = Object.assign(inputObject, { passengers: 35 });
  return newCar;
}
console.log("Задание 8")
let car = { massa: 1 };
console.log("Объект car");
console.log(car);
let bus = changeCar(car);
console.log("Объект bus");
console.log(bus);
console.log("Объект car");
console.log(car);
