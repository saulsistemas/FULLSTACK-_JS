//EVENTOS DESDE EL DOM

var recuadro = document.querySelector("#recuadro");
function camiarColor(){
        recuadro.style.background = "red";
}
//EVENTO DESDE JAVA SCRIP
var boton = document.querySelector("#boton")
boton.addEventListener("click",moverCaja);

function moverCaja(){
    recuadro.style.width ="600px";
    recuadro.style.transition ="1s width ease";
}