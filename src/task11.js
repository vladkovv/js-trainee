let inp1 = document.querySelector('input#firstinp');
let inp2 = document.querySelector('input#secondinp');
let btn = document.querySelector('button#solvebtn');
let select = document.querySelector('select#list');
let result;
btn.addEventListener('click', solve);
function solve(){
    if(select.value === 'sum'){
        result = Number(inp1.value) + Number(inp2.value);
        alert(`Sum = ${result}`);
    }
    if(select.value === 'mult'){
        result = Number(inp1.value) * Number(inp2.value);
        alert(`Mult = ${result}`);
    }
    if(select.value === 'diff'){
        result = Number(inp1.value) - Number(inp2.value);
        alert(`Difference = ${result}`);
    }
} 