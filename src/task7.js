let div = document.querySelector('#list');
let ul = document.createElement('ul');
const list = ["Первая строка", "Вторая строка", "n строка"];

function fill(...strings) {
    div.appendChild(ul);
    for (let i = 0, ln = strings.length; i < ln; i++) {
        let li = document.createElement('li');
        li.innerHTML = strings[i];
        ul.appendChild(li);
    }

}
fill(...list);