// Создать абстрактный класс Figure с методами вычисления площади и периметра, а также
// методом, выводящим информацию о фигуре на экран. Создать производные классы:
// Rectangle (прямоугольник), Circle (круг), Triangle (треугольник) со своими методами
// вычисления площади и периметра. Создать массив n фигур и вывести полную
// информацию о фигурах на экран.

class Figure {
  calcArea() {}
  calcPerimeter() {}
  getInfo() {}
}

class Rectangle extends Figure {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calcArea() {
    return this.length * this.width; 
  }

  calcPerimeter() {
    return (this.length + this.width) * 2;
  }

  getInfo() {
    console.log(
      `Длина прямоугольника = ${this.length}, ширина = ${this.width}`
    );
    console.log(
      `Площадь прямоугольника = ${this.calcArea()}, периметр прямоугольника = ${this.calcPerimeter()}`
    );
  }
}

class Circle extends Figure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calcArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calcPerimeter() {
    return 2 * (Math.PI * this.radius);
  }

  getInfo() {
    console.log(`Радиус круга = ${this.radius}`);
    console.log(
      `Площадь круга = ${this.calcArea()}, периметр круга = ${this.calcPerimeter()}`
    );
  }
}

class Triangle extends Figure {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  calcArea() {
    let p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }

  calcPerimeter() {
    return this.a + this.b + this.c;
  }

  getInfo() {
    console.log(
      `Сторона a = ${this.a}, сторона b = ${this.b}, сторона c = ${this.c}`
    );
    console.log(
      `Площадь треугольника = ${this.calcArea()}, периметр треугольника = ${this.calcPerimeter()}`
    );
  }
}

const figures = [new Rectangle(6, 4), new Circle(6), new Triangle(4, 5, 6)];
for (const key in figures) {
  figures[key].getInfo();
}
