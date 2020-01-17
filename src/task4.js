let inp1 = document.querySelector('input#inp1');
let inp2 = document.querySelector('input#inp2');
let btn = document.querySelector('button#swap');
btn.addEventListener('click', swap);
let temp;
    function swap() {
        temp = inp1.value;
        inp1.value = inp2.value;
        inp2.value = temp; 
    }
