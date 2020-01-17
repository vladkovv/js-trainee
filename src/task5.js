let list = document.querySelectorAll('.red');
let btn = document.querySelector('button#red');
btn.addEventListener('click', color);
function color(){
for(let elem of list){
    elem.style.color = 'red';
}
}