// Etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetadocumento=document.getElementById("documento")

//Detectar el evento del clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    //console.log("Estamos haciendo clic")
    /*Swal.fire(
        'Exito!',
        'El especialista ha sido registrado!',
        'success'
      )*/
    
    //Recibiendo los datos del formulario
    let nombresMedico=etiquetaNombre.value
    console.log(nombresMedico)

    let documentoMedico=etiquetadocumento.value
    console.log(documentoMedico)

})