// Класс Покупатель: Фамилия, Имя, Отчество, Адрес, Номер кредитной карточки, Номер
// банковского счета; Конструктор; Методы: установка значений атрибутов, получение
// значений атрибутов, вывод информации. Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых
// номер кредитной карточки находится в заданном диапазоне.
class Customer {
  constructor(
    lastname,
    firstname,
    middlename,
    adress,
    cardNumber,
    bankAccNumber
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.middlename = middlename;
    this.adress = adress;
    this.cardNumber = cardNumber;
    this.bankAccNumber = bankAccNumber;
  }
  setLastName(value) {
    this.lastname = value;
  }
  setFirstName(value) {
    this.firstname = value;
  }
  setMiddleName(value) {
    this.middlename = value;
  }
  setAdress(value) {
    this.adress = value;
  }
  setCardNumber(value) {
    this.cardNumber = value;
  }
  setBankAccNumber(value) {
    this.bankAccNumber = value;
  }

  getLastName() {
    return this.lastname;
  }
  getFirstName() {
    return this.firstname;
  }
  getMiddleName() {
    return this.middlename;
  }
  getAdress() {
    return this.adress;
  }
  getCardNumber() {
    return this.cardNumber;
  }
  getBankAccNumber() {
    return this.bankAccNumber;
  }

  getInfo() {
    console.log(
      this.lastname,
      this.firstname,
      this.middlename,
      this.adress,
      this.cardNumber,
      this.bankAccNumber
    );
  }
}
const customers = [
  new Customer(
    "Kovaliok",
    "Vlad",
    "Andreevich",
    "somewhere",
    2495222244431212,
    10293847
  ),
  new Customer(
    "Bogoslovskiy",
    "Dmitriy",
    "Vladimirovich",
    "somewhere",
    8945620204112,
    10102345
  ),
  new Customer(
    "Ivanov",
    "ivan",
    "Ivanovich",
    "somewhere",
    5927610152512182,
    402151212
  ),
  new Customer(
    "Sidorov",
    "Petr",
    "Sergeevich",
    "somewhere",
    8580129574212552,
    717695049
  )
];
customers.getInfo();
