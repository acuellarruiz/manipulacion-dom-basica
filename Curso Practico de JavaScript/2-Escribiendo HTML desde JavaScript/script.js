const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo_clase = document.getElementsByClassName('parrafo-clase');
const parrafo_id = document.getElementById('parrafo-id');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    parrafo_clase,
    parrafo_id,
    input
})

h1.innerHTML = "Hola Mundo"

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/264146/pexels-photo-264146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
parrafo_id.append(img);