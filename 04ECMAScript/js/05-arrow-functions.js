console.log("### ARROW FUNCTIONS ###");
//SON FUNCIONES ANONIMAS Y SE DEEN GUARDAR EN VARIABLES CONSTANTES PARA NO SER MODIFICADAS EN EL FUTURO
//FUNCION SIN PARAMETROS
function holaMundo(){
    console.log("Hola mundo");
}
holaMundo();

const holaMundo2= ()=>{
    console.log("Hola mundo 2");
}
holaMundo2()


//FUNCION CON 1 PARAMENTRO se puede quitar los parametros
const holaMundo3 = mensaje=>{
    console.log(mensaje);
}

holaMundo3("Hola mundo 3")

//FUNCION CON VARIOS PARAMENTRO se puede quitar los parametros
const holaMundo4 = (mensaje1, mensaje2)=>{
    console.log(mensaje1,mensaje2);
}

holaMundo4("Hola mundo 4..", "como estan")