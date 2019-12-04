/* Определить класс Children, который содержит такие поля (члены класса):
закрытые – имя ребенка, фамилию и возраст, публичные – методы ввода данных
и отображения их на экран. Создать два объекта класса, внести данные и показать их. */
const Children = (Name, SurName, Age) => {
    let name = Name;
    let surName = SurName;
    let age = Age;
    const setName = (val) => name = val;
    const setSurname = (val) => surName = val;
    const setAge = (val) => age = val;
    const getName = () => console.log(name);
    const getSurname = () => console.log(surName);
    const getAge = () => console.log(age);
    return { 
        setName, setSurname, setAge, getName, getSurname, getAge
    };
};
const Children1 = Children('Vlad', 'Kovalok', 20);
Children1.getName();
Children1.getSurname();
Children1.getAge();
Children1.setName("Vladislav");
Children1.getName();