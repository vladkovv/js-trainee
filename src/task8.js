let div = document.querySelector('#dropList');
let select = document.createElement('select');
const list = ["Яблоко", "Апельсин", "Груша"];

function showList(...strings){
    div.appendChild(select);
    for (let i = 0, ln = strings.length; i < ln; i++) {
        let option = document.createElement('option');
        option.innerHTML = strings[i];
        select.appendChild(option);
    }
}
showList(...list);