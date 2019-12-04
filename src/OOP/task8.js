/* Преобразовать строки двумерного массива в столбцы.
Класс будет содержать два метода: один заполнит массив
значениями, второй произведет замену значений строк на
значения столбцов. */
class Line {
  constructor(p1 = { x: 0, y: 0, z: 0 }, p2 = { x: 0, y: 0, z: 0 }) {
    this.coords = [p1, p2];
  }

  setPoint(n, p) {
    this.coords[n] = p;
  }

  getDistance(n1, n2) {
    return Math.sqrt(
      (this.coords[n1].x - this.coords[n2].x) ** 2 +
        (this.coords[n1].y - this.coords[n2].y) ** 2 +
        (this.coords[n1].z - this.coords[n2].z) ** 2
    );
  }

  getPoint(n) {
    return this.coords[n];
  }
}

class Rectangle extends Line {
  constructor(p, width, height) {
    super(p, { x: p.x + width, y: p.y, z: p.z });
    this.coords.push({ x: p.x + width, y: p.y + height, z: p.z });
    this.coords.push({ x: p.x, y: p.y + height, z: p.z });
  }

  getArea() {
    return this.getDistance(0, 1) * this.getDistance(0, 3);
  }
}

class Piramid extends Rectangle {
  constructor(p, baseWidth, baseDepth, height) {
    super(p, baseWidth, baseDepth);
    this.height = height;
    this.coords.push({
      x: (this.getPoint(0).x + this.getPoint(2).x) / 2,
      y: (this.getPoint(0).y + this.getPoint(2).y) / 2,
      z: p.z + height,
    });
  }

  getArea() {
    function heronFormula(p, a, b, c) {
      return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    function perimeter(points) {
      let result = 0;
      for (let i = 1; i < points.length; i++) {
        result += this.getDistance(points[i - 1], points[i]);
      }
      result += this.getDistance(points[0], points[points.length - 1]);
      return result;
    }

    function sideEdgeLength(n) {
      return this.getDistance(n % 4, 4);
    }

    function sideAarea(n) {
      return heronFormula.call(
        this,
        perimeter.call(this, [n, (n + 1) % 4, 4]) / 2,
        this.getDistance(n, (n + 1) % 4), // a
        sideEdgeLength.call(this, n), // b
        sideEdgeLength.call(this, (n + 1) % 4) // c
      );
    }

    const baseArea = super.getArea();

    return (
      baseArea +
      sideAarea.call(this, 0) +
      sideAarea.call(this, 1) +
      sideAarea.call(this, 2) +
      sideAarea.call(this, 3)
    );
  }

  getVolume() {
    const baseArea = super.getArea();
    return (this.height * baseArea) / 3;
  }
}

const basepoint = { x: 0, y: 0, z: 0 };

const line = new Line({ x: 0, y: 0, z: 0 }, { x: 3, y: 5, z: -2 });
console.log(line.coords);

const rec = new Rectangle(basepoint, 4, 2);
console.log(rec.coords);
console.log(rec.getArea());

const pir = new Piramid(basepoint, 5, 3, 6);
console.log(pir.coords);
console.log(pir.getArea());
console.log(pir.getVolume());