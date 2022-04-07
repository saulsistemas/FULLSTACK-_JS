console.log("### ASYNC AWAIT  ###");
/*====================
ASYNC AWAIT es simplificar el comportamiento del uso síncrono de promesas y realiza
======================*/

let reservaDestino = [
    {id:1,destino:'miami'},
    {id:2,destino:'new york'},
    {id:3,destino:'los angeles'},
];
// console.log(reservaDestino);

let reservaDia = [
    {id:1,dia:'lunes'},
    {id:2,dia:'martes'},
    {id:3,dia:'miercoles'},
];
// console.log(reservaDia);

let reservaAsiento = [
    {id:1,asiento:'ventana'},
    {id:2,asiento:'medio'},
    {id:3,asiento:'pasillo'},
];
// console.log(reservaAsiento);

//reservar el destiono
let getDestino = (id)=>{
    return new Promise((resolve,reject)=>{
        //CUANDO ESTA DENTRO DE PROMISE NO LLEVA {}
        let destinoDB =reservaDestino.find((destino)=>destino.id === id)
        if (!destinoDB) {
            reject("no existe el destino")
        }else{
            resolve(destinoDB);
        }
    });
}

let getDia = (id)=>{
    return new Promise((resolve,reject)=>{
        //CUANDO ESTA DENTRO DE PROMISE NO LLEVA {}
        let diaDB = reservaDia.find((dia)=>dia.id === id)
        if (!diaDB) {
            reject("no existe el dia")
        }else{
            resolve(diaDB);
        }
    });
}

let getAsiento = (id)=>{
    return new Promise((resolve,reject)=>{
        //CUANDO ESTA DENTRO DE PROMISE NO LLEVA {}
        let asientoDB = reservaAsiento.find((asiento)=>asiento.id === id)
        if (!asientoDB) {
            reject("no existe el asiento")
        }else{
            resolve(asientoDB);
        }
    });
}
//TAREA SINCRONICAS: TAREAS SE EJECUTAN AL MISMO TIEMPO
//TAREA ASINCRONAS: TAREAS QUE SE EJECUTAN EN DIFERENTE TIEMPO
//EN ESTE CASO LA TAREA ESPERA LA EJECUCION DE LA OTRA
//THEN CUANDO

// RESPUESTA DE LAS TAREAS ASINCRONAS 

let informeReserva = async (idDestino, idDia, idAsiento)=>{
    let informeDestino = await getDestino(idDestino);
    let informeDia = await getDia(idDia);
    let informeAsiento = await getAsiento(idAsiento);

    return 'tu destino sera '+informeDestino.destino+' , tu día sera '+ informeDia.dia+' , tu asiento sera '+informeAsiento.asiento;
}

informeReserva(2,1,1)
        .then((mensaje)=>{console.log(mensaje);})
        .catch((err)=>{console.log(err);});