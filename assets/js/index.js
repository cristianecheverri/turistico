// let valor = prompt("Ingrese el valor");
// console.log(valor);

// const arreglo = [1, 2, 3, 4];
// for (i = 0; i < arreglo.length; i++) {
//     console.log(arreglo[i]);
// }

// arreglo.forEach(function (posicion) {
//     document.write(posicion)
// })

// const objetos = [
//     {
//         "valor1": 10,
//         "valor2": 20,
//         "valor3": 30
//     },
//     {
//         "valor1": 40,
//         "valor2": 50,
//         "valor3": 60
//     },
//     {
//         "valor1": 70,
//         "valor2": 80,
//         "valor3": 90
//     }
// ]

// objetos.forEach(function (objeto) {
//     const valores = Object.values(objeto);
//     valores.forEach(function (valor) {
//         debugger;
//         if (valor == 80) {
//             return;
//         }
//         console.log(valor);
//     }) 
// })


const titulo = "Bienvenidos a Salento, Quindío";

const etiquetaTitulo = document.querySelector("header h1");
etiquetaTitulo.innerHTML = titulo;

let lugaresInteres = [
    {
        "titulo": "Valle de Cocora",
        "descripcion": "El Valle de Cocora es el hogar de las famosas palmas de cera, el árbol nacional de Colombia. Este impresionante valle ofrece rutas de senderismo entre montañas y paisajes verdes, donde se pueden apreciar las palmas más altas del mundo.",
        "imagen": "assets/images/cocora.jpg"
    },
    {
        "titulo": "Calle Real",
        "descripcion": "Calle Real es la principal calle peatonal de Salento, conocida por sus coloridas casas coloniales, tiendas de artesanías, y cafés acogedores. Es un lugar perfecto para pasear, disfrutar de la cultura local, y comprar recuerdos.",
        "imagen": "assets/images/calle-real.jpeg"
    },
    {
        "titulo": "Mirador de Salento",
        "descripcion": "El Mirador de Salento ofrece vistas panorámicas del Valle de Cocora y el paisaje circundante. Es un lugar ideal para capturar fotos impresionantes y disfrutar de la belleza natural del Quindío.",
        "imagen": "assets/images/mirador-salento.jpg"
    }
];

const cardsContainer = document.getElementById("cards");
let cards = '';
lugaresInteres.forEach(function(lugarInteres) {
    cards += `<div class="col">
                <div class="card">
                    <img src="${lugarInteres.imagen}" class="card-img-top" alt="Cocora">
                    <div class="card-body">
                        <h5 class="card-title">${lugarInteres.titulo}</h5>
                        <p class="card-text">${lugarInteres.descripcion}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>`;
});

cardsContainer.innerHTML= cards;

