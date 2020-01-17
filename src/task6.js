let dateelem = document.querySelector('#date');
let btn = document.querySelector('#btn1');
btn.addEventListener('click', getDate);
function getDate(){
let date = new Date();
dateelem.innerHTML = date.toString();
}
