var numero = 1;

switch(numero){
    case 1:
        console.log("Soy 1")
        break;
    case 10:
        console.log("Soy 10")
        break;
    default: 
        console.log("No soy nada")
}

// Practica piedra, papel o tijera

const Piedra = 1
const Papel = 2
const Tijera = 3

function Resultado(Cpu, User){
    switch(true){
        case(Cpu === User):
            console.log("Es un empate");
            break;
        case(Cpu === 1 && User === 2):
            console.log("Ganaste");
            break;
        case(Cpu === 2 && User === 3):
            console.log("Ganaste");
            break;
        case(Cpu === 3 && User === 1):
            console.log("Ganaste");
            break;
        default:
            console.log("Perdiste");
    }
}

Resultado(Cpu, User)