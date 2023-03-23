const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const result = document.getElementById('resultado');

function btnOnClick(){
    const total = parseFloat(input1.value) + parseFloat(input2.value);
    result.innerText = "Resultado: " + total
}