//OBJETOS: Es una coleccion de propiedades y metodos;

var object = {
    //PROPIEDAD es una asociacion entre nombre y un valor
    nombre : 'Saul',
    apellido : 'Santamaria',
    //METODO es una funcion dentro del objeto
    descripcion:function(){
        console.log('su nombre es '+ object.nombre+ " y su apellido es "+object.apellido);
    },
    saludar:function(saludo){
        console.log(saludo+" "+object.nombre );
    }
}
console.log( object.nombre);
console.log( object.apellido);
object.descripcion();
object.saludar("Hola ");


//OBJETOS PRIMITIVOS

var d = new Date()
var y = d.getFullYear()
console.log(y);