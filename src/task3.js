let inp1 = document.querySelector('input#input1');
let inp2 = document.querySelector('input#input2');
let btn = document.querySelector('button#sum');
btn.addEventListener('click', sum);
function sum(){
    let result = Number(inp1.value) + Number(inp2.value);
alert(`Sum = ${result}`);
}