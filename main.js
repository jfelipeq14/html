const table = document.getElementById("table-content")

const data = [{
    "nombre": "Juan",
    "apellido": "Quintero",
    "email": "jf@sena.edu.co"
},
{
    "nombre": "Alan",
    "apellido": "Sanchez",
    "email": "as@sena.edu.co"
},
{
    "nombre": "Jose",
    "apellido": "Rivera",
    "email": "jr@sena.edu.co"
},
{
    "nombre": "Juan",
    "apellido": "Toro",
    "email": "jt@sena.edu.co"
},
{
    "nombre": "Pablo",
    "apellido": "Palomino",
    "email": "pp@sena.edu.co"
}]

let html = ""

data.forEach((person) => {
    html = `
        <td>${person.nombre}</td>
        <td>${person.apellido}</td>
        <td>${person.email}</td>
    `
    table.innerHTML += html
})