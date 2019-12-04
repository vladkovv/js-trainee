// Объявить основной класс с именем point, с следующими данными: координаты точки ( х,
//     у), функция ввода данных. Создать второстепенный класс Graphicpoint. В этом классе
//     добавляются новые данные: цвет точки, функция вывода координат точки.
//     Продемонстрировать работу объектов данного класса.
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setPoint(x_v, y_v){
        this.x = x_v;
        this.y = y_v;
    }
}
class Graphicpoint extends point {
    constructor(x, y, point_color){
        super(x, y);
        this.point_color = point_color;
        
    }
    getPoint(){
        console.log(this.x, this.y, this.point_color);
    }
}

const p1 = new Graphicpoint(25, 32, 'red');
p1.getPoint();
p1.setPoint(1,2);
p1.getPoint();