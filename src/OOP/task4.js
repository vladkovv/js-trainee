/* Составить описание класса для представления времени.
Предусмотреть возможности установки времени и изменения
его отдельных полей (час, минута, секунда) с проверкой
допустимости вводимых значений. В случае недопустимых
значений полей выбрасываются исключения. Создать методы
изменения времени на заданное количество часов, минут и секунд. */
class Time {
    constructor(hours, minutes, seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    setTimeHours(hours) {
        if (hours > 24 || hours < 0) {
            throw new Error('Проверьте введенное значение');
        }
        this.hours = hours;
    }

    setTimeMinutes(minutes){
        if (minutes > 60 || minutes < 0) {
            throw new Error('Проверьте введенное значение');
        }
        this.minutes = minutes;
    }

    setTimeSeconds(seconds){
        if (seconds > 60 || seconds < 0) {
            throw new Error('Проверьте введенное значение');
        }
        this.seconds = seconds;
    }
    
    increaseHours(value){
        if (this.hours + value > 24) {
            this.hours = value - this.hours;
        } else{
        this.hours += value;
        }
    }
    increaseMinutes(value){
        if (value > 60) {
            this.hours += Math.floor(value/60);
            this.minutes += value % 60;
        } else {
            this.minutes += value;
        }
    }

    increaseSeconds(value) { 
        if (value > 60) {
            this.minutes += Math.floor(value/60);
            this.seconds += value % 60;
        } else {
            this.seconds += value;
        }
    }

    reduceHours(value){
        if (this.hours - value < 1) {
            this.hours = this.hours - value + 24;
        }
    }
    
    reduceMinutes(value){
        if (value > 60) {
            this.hours -= Math.floor(value / 60);
            this.minutes -= value % 60;
          } else {
            this.minutes -= value;
          }
    }

    reduceSeconds(value){
       if (value > 60) {
            this.minutes -= Math.floor(value / 60);
            this.seconds -= value % 60;
          } else {
            this.seconds -= value;
          }
    }

    getTime(){
        if (String(this.hours).length <= 1) {
         console.log(`0${this.hours}:${this.minutes}:${this.seconds}`);  
        } else {
             console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
                   }
               }
    }


const time = new Time(9, 30, 55);
time.getTime();
time.increaseMinutes(25);
time.getTime();