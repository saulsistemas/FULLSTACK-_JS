console.log("### JSON  ###");
/*====================
JSON combinacion de  array y objetos
"" comillas dobles en propiedades y valores
======================*/
let json ={
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  console.log(json);
/*====================
JSON.STRINGIFY Tomar m cracion de array
y objetos y convertirlo en formato JSON
para enviarlos a otras intancias
y lo envia como cadena de texto,

CONVIERTE JSON EN TEXTO
======================*/
let enviarJSON = JSON.stringify(json);
console.log(enviarJSON);


/*====================
JSON.PARSE Recibe un dato JSON para convertirlo
en array y objetos
======================*/

let convierteJSON = JSON.parse(enviarJSON);
console.log(convierteJSON);