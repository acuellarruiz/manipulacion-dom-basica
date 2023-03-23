var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

auto.marca; //Llamado a propiedad
auto.detalleDelAuto(); //llamada a metodo

//Funcion contructora

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla","Model 3",2022);
