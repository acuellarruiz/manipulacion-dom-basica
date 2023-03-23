const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btncalcular');
const result = document.getElementById('resultado');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event){
    //console.log({event});
    event.preventDefault();
    const total = parseFloat(input1.value) + parseFloat(input2.value);
    result.innerText = "Resultado: " + total;
}