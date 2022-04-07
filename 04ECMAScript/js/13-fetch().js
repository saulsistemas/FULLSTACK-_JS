console.log("### FETCH  ###");
/*====================
FETCH Permite ejecutar servicios HTTP
GET, POST, PUT, DELETE , OTROS


======================*/

let getApi = ()=>{
    const endPoint ="http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en";
    const params = {
        method: "GET",
        header: {
            "Content-Type":"application/json"
        }
    }
    fetch(endPoint,params).then((response)=>{
        console.log(response);
        return response.json();
    }).then((result)=>{
        console.log(result);
        const resultado = result.sanctorale;
        console.log(resultado);
    })
}

getApi();