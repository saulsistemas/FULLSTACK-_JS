console.log('### VAR ###');
//VAR PUEDE CAMBIAR EL VALOR 
var nombre_var = 'saul';
if (nombre_var=="saul") {
   var  nombre_var ="JUAN";
   var edad_var =15;
}
console.log(nombre_var);
console.log(edad_var);
console.log('###  LET ###');
//LET se utiliza para declarar contextos especificos y cambian su valor en dicho contexto
let nombre_let ="saul";
if (nombre_let=="saul") {
    let  nombre_let ="JUAN";
    let edad_let =15;
    console.log(nombre_let);
}
console.log(nombre_let);
//ERROR console.log(edad_let);

console.log('###  CONST ###');
//CONST no cambia su valor
let nombre_const ="carlos";
if (nombre_const=="carlos") {
    const  nombre_const ="JUAN";
    const edad_const =15;
    console.log(nombre_const);
}
console.log(nombre_const);

