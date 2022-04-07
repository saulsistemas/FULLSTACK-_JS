console.log("### IF TERNARIO ###");

let camisa ={
    talla:34,
    cantidad:0,
    existencia:true
}

const {talla,cantidad,existencia} = camisa;
let respuesta;
if (existencia) {
    respuesta = "hay "+cantidad +" camisas"
}else{
    respuesta = "no hay camisas"
}
console.log(respuesta);
//IF TERNARIO
// ? INDICO SI ES VERDADERO O FALSO
existencia ? respuesta = "hay "+cantidad +" camisas":respuesta = "no hay camisas";

console.log(respuesta);