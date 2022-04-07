console.log("### DESTUCTURING ###");
//NOS PERMITE TOMAR LOS VALORES
//DE LAS PROPIEDADES DE UN OBJETO
//UTLIZANDO EL MISMO NOMBRE DE LA PROPIEDADES
let carro={
    marca:"Ferrari",
    modelo:"2020",
    color:"rojo",
}

console.log(carro.color);
console.log(carro["modelo"]);

const {marca,modelo,color} = carro;
console.log(color);



