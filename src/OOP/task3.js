/* Преобразовать строки двумерного массива в столбцы.
Класс будет содержать два метода: один заполнит массив
значениями, второй произведет замену значений строк на
значения столбцов. */
class TwoDimArray {
    constructor(rows = 0, cols = 0) {
      this.rows = rows;
      this.cols = cols;
      this.elems = Array.from({ length: this.rows }, () => Array.from({ length: this.cols }));
    }
  
    fillRandom() {
      this.elems.forEach((e, rown) => {
        this.elems[rown].forEach((ee, coln) => {
          this.elems[rown][coln] = Math.floor(Math.random() * 10);
        });
      });
      return this;
    }
  
    print() {
      console.log(this.elems);
      return this;
    }
  
    transpose() { 
      let row;
      const tr = [];
      for (let j = 0; j < this.cols; j++) {
        row = [];
        for (let i = 0; i < this.rows; i++) {
          row.push(this.elems[i].shift());
        }
        tr.push(row);
      }
      this.cols = this.rows;
      this.rows = tr.length;
      this.elems = tr;
      return this;
    }
}
  
const a54 = new TwoDimArray(5, 4);
a54
.fillRandom()
.print()
.transpose()
.print();