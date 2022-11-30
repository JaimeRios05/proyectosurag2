import {validarFormulario} from './validacionFormularioMedico.js'

//Creamos una funcion que nos permita recibir los datos del formulario

export function capturarDatos(etiquetaNombre, etiquetadocumento, etiquetaEspecialidad, etiquetaRegistro, etiquetaCorreo, etiquetaSede, etiquetaHorario, etiquetaDescipcion, etiquetaImagen) {

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetadocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistro.value
    let correoMedico=etiquetaCorreo.value
    let sedeMedico=etiquetaSede.value
    let descripcionMedico=etiquetaDescipcion.value
    let horarioMedico=etiquetaHorario.value
    let imagenMedico=etiquetaImagen.value

    //Debemos almacenar todos los valores del formulario en una sola variable
    //Creamos objero=almacenar varios datos en 1 solo espcaio de memoria

    let datosFormularioMedico = {
        nombre: nombresMedico,
        documento:documentoMedico,
        especialidad: especialidadMedico,
        registro: registroMedico,
        correo: correoMedico,
        sede: sedeMedico,
        horario: horarioMedico,
        descripcion: descripcionMedico,
        foto: imagenMedico,
    }

    console.log(datosFormularioMedico)

    // console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)
    // console.log(registroMedico)
    // console.log(correoMedico)
    // console.log(sedeMedico)
    // console.log(horarioMedico)

}