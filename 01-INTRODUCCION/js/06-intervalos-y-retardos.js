var tiempo = document.querySelector("#tiempo");
var segundos =0;

//SET INTERVAL (INTERVALO DE TIEMPO)
//setInterval(funcion,tiempo)
//1000 = 1 Segundo

var intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos;
    // tiempo.innerHTML += segundos; //AÑADA CONTENIDO AL HTML
    console.log(segundos);
},1000)


//SET TIEMOUT(RETARDO DE TIEMPO) //SE EJECUTO UNA VEZ
setTimeout(function(){
    clearInterval(intervalo) //PARAR INTERVALO
    // console.log('Se cumplio el tiempo');
},4000)