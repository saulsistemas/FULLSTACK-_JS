//FUNCION MAP
//RECORRE CADA ELEMENTO DEL ARRAY Y RETORNA MODIFICACIONES QUE REALIZAMOS AL ARRAY

let deportes = [
    {titulo:'futbol',nivel:'BASICO'},
    {titulo:'tenis',nivel:'INTERMEDIO'},
    {titulo:'golf',nivel:'AVANZADO'},
];
console.log(deportes);

//AGREGAR A VARIOS INDICES
let agregarLugar = deportes.map(deporte =>{
    deporte.lugar = "Estadio";
    return deporte
});
console.log(agregarLugar);

//AGREGAR A SOLO UN INDICE
let agregarLugar1 = deportes.map((deporte,i) =>{
    if (i===1) {
        deporte.pais = "PERU";
    }
    if (i===0) {
        deporte.nivel="AVANZADO"
    }
    return deporte
});
console.log(agregarLugar1);