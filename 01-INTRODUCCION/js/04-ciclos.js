//CICLO FOR
var cajas = document.querySelectorAll(".cajas");
console.log("cajas ",cajas);


for(var i =0; i<cajas.length;i++){
    cajas[i].style.width ="200px";
    cajas[i].style.height ="200px";
    cajas[i].style.background ="blue";
    cajas[i].style.margin ="1px";
    console.log("For => " ,i);
}

//CICLO WHILE
var n = 1;

while(n<=5){
    console.log("While => ",n);
    n++;
}

//CICLO DO WHILE
var p = 1;
do{
    console.log("Do While=> ",p);
    p++
}
while(p<=5)