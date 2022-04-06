var numero = 2;
console.log('numero', numero);

var palabra = 'palabra';
console.log('palabra', palabra);

var boleana = true;
console.log('boleana', boleana);

var colores = ['rojo','verde'];
console.log('colores', colores);

var persona = {
    nombre:'saul',
    apellido:'santamaria'
}
console.log('Personas ',persona);
console.log('Personas Nombre ',persona.nombre);


//VARIABLES DOM (MODELO DE OBJETOS DEL DOCUMENTO)

var caja = document.querySelector('#caja');
console.log("caja",caja);
caja.style.width ="200px";
caja.style.height ="200px";
caja.style.background ="red";

var cajas = document.querySelectorAll('.cajas');
console.log("cajas",cajas);


