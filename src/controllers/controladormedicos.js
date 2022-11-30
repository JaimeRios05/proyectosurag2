//Importaciones

import {capturarDatos} from '../formularios/formularioMedicos.js'



// Etiquetas que controlo:
let etiquetaNombre = document.getElementById("nombres")
let etiquetaBoton = document.getElementById("botonenvio")
let etiquetadocumento = document.getElementById("documento")
let etiquetaEspecialidad = document.getElementById("especialidad")
let etiquetaRegistro = document.getElementById("registro")
let etiquetaCorreo = document.getElementById("correo")
let etiquetaSede = document.getElementById("sede")
let etiquetaHorario = document.getElementById("horario")
let etiquetaDescipcion = document.getElementById("descripcion")
let etiquetaImagen = document.getElementById("imagen")

//Detectar el evento del clic
etiquetaBoton.addEventListener("click", function (evento) {

  evento.preventDefault()
  capturarDatos(etiquetaNombre, etiquetadocumento, etiquetaEspecialidad, etiquetaRegistro, etiquetaCorreo, etiquetaSede, etiquetaHorario, etiquetaDescipcion, etiquetaImagen)

})