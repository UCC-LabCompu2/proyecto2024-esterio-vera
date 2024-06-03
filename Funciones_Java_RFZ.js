function Mostrar_Ocultar(classsName) {//Función control de visibilidad de botones:
    var contenedor1 = document.getElementsByClassName(classsName)[0]

    if (contenedor1.style.visibility === "visible") {  //Esta función tiene el propósito de que cuando el usuario ingrese a la página NO se vea
        contenedor1.style.visibility = "hidden";      //la información a menos que haga click en el botón correspondiente.
    } else {                                          // Cuando el usuario desee dejar de ver la información, ésta desaparecerá
        contenedor1.style.visibility = "visible";     // haciendo click nuevamente en el mismo botón.
    }
}
