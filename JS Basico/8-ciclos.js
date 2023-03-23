//ciclo for

var estudiantes = ["Maria","Pedro","Juana","Antonio"];

function saludo(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var i= 0; i < estudiantes.length; i++ ){
    saludo(estudiantes[i]);
}


//otra forma de resolverlo - ciclo for of

var estudiantes = ["Maria","Pedro","Juana","Antonio"];

function saludo(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var estudiante of estudiantes ){
    saludo(estudiante);
}

//ciclo while

var estudiantes = ["Maria","Pedro","Juana","Antonio"];

function saludo(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludo(estudiante);
}