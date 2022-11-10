const fila = document.querySelector('.contenedorCarousel');
const peliculas = document.querySelector('.pelicula')

const flechaIzquierda = document.getElementById('flechaIzquierda')
const flechaDerecha = document.getElementById('flechaDerecha')

function moverDerecha() {
    fila.scrollLeft += fila.offsetWidth;
}

function moverIzquierda(){
    fila.scrollLeft -= fila.offsetWidth
}

flechaDerecha.addEventListener('click', moverDerecha)
flechaIzquierda.addEventListener('click', moverIzquierda)

