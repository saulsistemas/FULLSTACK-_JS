//-----FUNCION FILTER
//FILTRAR ARRAY U OBEJETO
//SE NECESITA ENCERRAR EN VARIABLE PARA RETORNAR NUEVO ARRAY
//RETORNA ARRAY
let vehiculos =[
    {id:1,marca:"mazda",modelo:2018},
    {id:2,marca:"toyota",modelo:2017},
    {id:3,marca:"hyundai",modelo:2019},
]
let filtarVehiculos =vehiculos.filter(vehiculo=>{
    return vehiculo.modelo>2017;
});

console.log(filtarVehiculos);

//-----FUNCION FIND
//RECORRE CADA ELEMENTO DEL ARRAY Y
//DEVUELVE UN SOLO ELEMENTO
//RETORNA OBJETOS

let buscarVehiculo = vehiculos.find(vehiculo=>{
    return vehiculo.modelo>2017;
})
console.log(buscarVehiculo);