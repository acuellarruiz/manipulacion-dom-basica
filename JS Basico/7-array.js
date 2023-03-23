var frutas = ["Manzana","Platano","Cereza","Fresa"];

console.log(frutas.length);//logitud de elementos

console.log(frutas[0]);//Imprime el elemento del arreglo

var masFrutas = frutas.push("Uvas")//agrega un elemento al final del array
var ultimo = frutas.pop("Uvas");//elimina un elemnto al final del array
var newFrutas = frutas.unshift("Peras");//agrega un elemento al inicio del array
var deletefrutas = frutas.shift("Peras");//elimina un elemento al inicio del array
var posicion = frutas.indexOf("Platano");// buscar la posicio  de un elemento en el arreglo


//recorrer arreglos

var articulos = [
    {nombre: "Bicicleta", costo:3000},
    {nombre: "Televisor", costo:5000},
    {nombre: "Refrigerador", costo:10000},
]