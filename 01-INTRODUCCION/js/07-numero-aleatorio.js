var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numeroAleatorio1 = document.querySelector("#numeroAleatorio1");
var numero = 0;
var numero1 = 0;

numero = Math.random(); //MAYORES A 0 Y MENOR A 1
numeroAleatorio.innerHTML = numero;

numero1 =Math.floor(Math.random()*10); //REDONDEA DE NUMERO AL 9
numeroAleatorio1.innerHTML = numero1;