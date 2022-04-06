//CLASES 
//FUNCIONES CONSTRUCTORAS Y SIEMPRE LA VAMOS A INICIAR EN MAYUSCULA

//-------CLASES PRIMITIVAS
// Clase String
var string = new String("Esto es un estring"); 
console.log(string);


// Clase String
var number = new Number(1323); 
console.log(number);

// Clase String
var array = new Array("Rojo","amarillo","verde"); 
console.log(array);


// Clase OBJETO
var object = new Object({
    nombre : "saul",
    santamaria: "santamaria"
})

console.log(object);


//CLASES CREADAS POR EL PROGRAMADOR

function Persona(){
    //propiedades
    this.nombres;
    this.edad;
}
var yo = new Persona();
yo.nombres = "JUAN";
yo.edad = "21 AÑOS"
console.log(yo);

//Clases con parametros
function Animales(nombre,raza){
    this.nombre = nombre;
    this.raza = raza;
}

var mascota = new Animales('perro','aleman');
console.log(mascota);