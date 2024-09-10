const button = document.getElementById('miBoton');

button.addEventListener(`click`, function () {
    let nombre = "Pepito";
    console.log(nombre);
    nombre = 8;
    console.log(nombre);
});

button.addEventListener('mouseover', function () {
    button.classList.remove('btn-success');
    button.classList.add('btn-danger');
});

button.addEventListener('mouseout', function () {
    button.classList.remove('btn-danger');
    button.classList.add('btn-success');
})

const estudiante = {
    "nombre": "Pepito",
    "edad": 14,
    "genero": "M"
}

const estudianteHtml = "<ul><li>Nombre: " + estudiante.nombre + "</li></ul>";
console.log(estudianteHtml);

const divEstudiante = document.getElementById('estudiante');
console.log(divEstudiante);
divEstudiante.innerHTML = estudianteHtml;

const estudiantes = [
    {
        "nombre": "Pepito",
        "edad": 14,
        "genero": "M",
        "materias": [
            {
                "nombre": "Programación Web 1"
            }
        ]
    },
    {
        "nombre": "Pepita",
        "edad": 12,
        "genero": "F",
        "materias": null
    }
]

