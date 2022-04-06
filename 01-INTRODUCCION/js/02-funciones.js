//FUNCIONES SIN PARAMETROS
var globales = 50;
console.log('Variable global ',globales);
function saludo(){
    console.log('Hello world');
}
saludo();

//FUNCIONES CON PARAMETROS
function operacion(digito1,digito2){
    var resultado = digito1+digito2;
    var globales = resultado;
    console.log("Resultado ", resultado);
    console.log("Globales ", globales);
}
operacion(5,10);
operacion(20,10);


//FUNCIONES CON RETORNO SIN PARAMETROS
function retorno1(){
    var numero = 5;
    return numero;
}
console.log("Retorno  ",retorno1());

//FUNCION CON RETORNO CON PARAMETRO
function retorno2(numero){
    return numero;
}

console.log('Retorno ',retorno2(100));