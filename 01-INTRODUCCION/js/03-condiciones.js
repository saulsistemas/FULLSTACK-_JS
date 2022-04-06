
//IF
var a = 5;
var b = 5;

if (a>b) {
    console.log("La variable A es mayor que b");
}else if(a == b){
    console.log("La variable A es lo mismo que B");
}else{
    console.log("La variable B es mayor que a");
}

//CAMBIOS

var dia = "LUNES";

switch (dia) {
    case "SABADO":
        console.log("VOY A ESTUDIAR PHP");
        break;
    case "LUNES":
        console.log("VOY A ESTUDIAR JS");
        break;
    default:
        console.log("DESCANSO");
        break;
}