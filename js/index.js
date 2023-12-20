// VARIABLES

let randomNumber;
let comprobar = document.querySelector(`#comprobar`)
let limpiar = document.querySelector(`.borrarDatos`)
let resultado = document.querySelector(`#resultado`)
let estadisticas = document.querySelector(`#estadisticas`)
let exitosos = localStorage.getItem(`exitosos`) || 0
let fallidos = localStorage.getItem(`fallidos`) || 0

// FUNCIONES

// Función generadora del número

function generarNumeroAleatorio() {
    randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber)
}

// Función verificadora de número

function comprobarNumeroAleatorio() {
    let numeroUsuario = document.querySelector(`#numeroUsuario`).value;
    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === randomNumber) {
        exitosos++;
        localStorage.setItem(`resultado`, `exitosos`);
        resultado.innerHTML = `Muy bien!`;
        estadisticas.innerHTML = `Éxitos: ${exitosos}, fallos: ${fallidos}`;
        generarNumeroAleatorio()
    } else {
        fallidos++;
        localStorage.setItem(`resultado`, `fallidos`);
        resultado.innerHTML = `Fallaste!`;
        estadisticas.innerHTML = `Éxitos: ${exitosos}, fallos: ${fallidos}`;
    }

}

// Función limpiadora de datos 

function limpiadoraDatos() {
    localStorage.clear();
    location.reload();
}

// LISTENERS

// Botón comprobar

comprobar.addEventListener(`click`, comprobarNumeroAleatorio);

// Botón limpiar

limpiar.addEventListener(`click`, limpiadoraDatos);

// Códigos de inicio

estadisticas.innerHTML = `Éxitos: 0, Fallos: 0`;

generarNumeroAleatorio()