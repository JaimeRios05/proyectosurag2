export function validarFormulario(datos) {

    //Referencias a etiquetas que quiero validar
    let etiquetaNombre = document.getElementById("nombres")    
    let etiquetadocumento = document.getElementById("documento")
    let etiquetaRegistro = document.getElementById("registro")
    // let etiquetaEspecialidad = document.getElementById("especialidad")    
    // let etiquetaCorreo = document.getElementById("correo")
    // let etiquetaSede = document.getElementById("sede")
    // let etiquetaHorario = document.getElementById("horario")
    // let etiquetaDescipcion = document.getElementById("descripcion")
    // let etiquetaImagen = document.getElementById("imagen")

    //Validemos 3 campos del formulario
    //Nombres-documento-registro del medico

    let nombresMedico = datos.nombre
    let documentoMedico = datos.documento
    let registroMedico = datos.registro
    let especialidadMedico = datos.especialidad
    let correoMedico = datos.correo
    let sedeMedico = datos.sede
    let descripcionMedico = datos.descipcion
    let horarioMedico = datos.horario
    let imagenMedico = datos.imagen


    //agregar todos los caminos posibles para validar el formulario

    if (nombresMedico == "" && documentoMedico == "") {
        etiquetaNombre.classList.add("is-invalid")
        etiquetadocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obliglatorios',            
          })
    } else if (nombresMedico == "" && documentoMedico != "") {
        etiquetaNombre.classList.add("is-invalid")
        etiquetadocumento.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El Nombre es obliglatorio',            
          })
    } else if (nombresMedico != "" && documentoMedico == "") {
        etiquetaNombre.classList.remove("is-invalid")
        etiquetadocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',   
            text: 'El documento es obliglatorio',            
          })
    } else {
        etiquetaNombre.classList.remove("is-invalid")
        etiquetadocumento.classList.remove("is-invalid")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Nos vamos para la BD',
            showConfirmButton: false,
            timer: 1500
          })
    }

}