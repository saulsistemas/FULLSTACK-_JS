console.log("### CALLBAKS  ###");
/*====================
CALLBACKS: Es una funcion que se ejecuta cuando sucede otra funcion
======================*/

let paises = [
    {id:1,pais:"Argentina",contniente:"suramerica"},
    {id:2,pais:"Perú",contniente:"suramerica"},
    {id:3,pais:"Mexico",contniente:"centroamerica"},
    {id:4,pais:"colombia",contniente:"suramerica"},
];

let tomarPais= (id, callback)=>{
    let idPais = paises.find(pais=>{
        return pais.id == id;
    });
    if (!idPais) {
        callback("no existe pais en la BD")
    }else{
        callback(idPais)
    }
}
tomarPais(5,(err,res)=>{
     err ? console.log("mensaje",err) : console.log("mensaje",res);
    
})