var Edad = 18

if(Edad === 18){
    console.log("Puedes votar por primera vez");
}else if(Edad > 18){
    console.log("Puedes votas de nuevo");
}else{
    console.log("Aun no puedes votar");
}

//if ternario

condition ? true : false

function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"


// Practica piedra, papel o tijera

const Piedra = 1
const Papel = 2
const Tijera = 3

function Resultado(Cpu, User){
    if (Cpu === User){
        console.log("Es un empate");
    }
    else if(User === 1 && Cpu === 2 || User === 2 && Cpu === 3 || User === 3 && Cpu === 1){
        console.log("Perdiste");
    }
    else if(Cpu === 1 && User === 2 || Cpu === 2 && User === 3 || Cpu === 3 && User === 1){
        console.log("Ganaste");
    }
}

Resultado(Cpu, User)
