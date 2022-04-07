console.log("### PROMISES  ###");
/*====================
PROMISES: nos permiten ejecutar un trabaj sincronico
o asincronico  despues de que se realiza 
una tarea anterior(asincrona)
======================*/

let reservaDestino = [
    {id:1,destino:'miami'},
    {id:2,destino:'new york'},
    {id:3,destino:'los angeles'},
];
console.log(reservaDestino);

let reservaDia = [
    {id:1,dia:'lunes'},
    {id:2,dia:'martes'},
    {id:3,dia:'miercoles'},
];
console.log(reservaDia);

let reservaAsiento = [
    {id:1,asiento:'ventana'},
    {id:2,asiento:'medio'},
    {id:3,asiento:'pasillo'},
];
console.log(reservaAsiento);

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

//TAREAS ASINCRONAS PARA LLEVAR UN ORDEN
getDestino(1).then((detinoDb)=>{
    console.log("tu destino sera ", detinoDb.destino);

    getDia(1).then((diaDb)=>{
        console.log("tu dia sera ", diaDb.dia);

        getAsiento(1).then((asientoDb)=>{
            console.log("tu asiento sera ", asientoDb.asiento);
        }).catch(error=>{
            console.log(error);
        })
    }).catch(error=>{
        console.log(error);
    })

}).catch(error=>{
    console.log(error);
})

//getAsiento(1).then((asientoDb)=>{
//    console.log("tu asiento sera ", asientoDb.asiento);
//}).catch(error=>{
//    console.log(error);
//})