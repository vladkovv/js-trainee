/* Описать класс Tiles (кафель), который будет содержать поля
с открытым доступом: brand, size_h, size_w, price и метод класса
getData(). Создать пару объектов класса и внести данные в поля.
Затем отобразить их, вызвав метод getData(). */

class Tiles {
    constructor(brand, size_h, size_w, price){
        this.brand = brand;
        this.size_h = size_h;
        this.size_w = size_w;
        this.price = price;
    }
    getData() {
        console.log(`Значения полей: brand = ${this.brand}, size_h = ${this.size_h}, size_w = ${this.size_w}, price = ${this.price}`)
    }
}

const obj1 = new Tiles('some brand1', 20, 40, 150);
const obj2 = new Tiles('some brand2', 40, 60,  300);

obj1.getData();
obj2.getData();