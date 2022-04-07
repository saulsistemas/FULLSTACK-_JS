console.log("### FOR  ###");

let cursos = [
    {titulo:'JS',nivel:"BASICO"},
    {titulo:'PHP',nivel:"INTERMEDIO"},
    {titulo:'NET',nivel:"AVANZADO"},
]
for (let i = 0; i < cursos.length; i++) {
    const element = cursos[i].titulo;
    console.log(element);
    if(i>0){
        break
    }
    
}

console.log("### FOREACH ###");
cursos.forEach(curso =>{
    console.log(curso.titulo);
})


console.log("### FOREACH ###");
cursos.forEach((curso,i) =>{
    if(i>0){
        return;
    }
    console.log(i);
    console.log(curso.titulo);
})
