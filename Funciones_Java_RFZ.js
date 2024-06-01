function Mostrar_Ocultar1() {//Función control de visibilidad de botones:
    var contenedor1 = document.getElementsByClassName("contenedor1")[0]

    if (contenedor1.style.visibility == "visible") {  //Esta función tiene el propósito de que cuando el usuario ingrese a la página NO se vea
        contenedor1.style.visibility = "hidden";      //la información a menos que haga click en el botón correspondiente.
    } else {                                          // Cuando el usuario desee dejar de ver la información, ésta desaparecerá
        contenedor1.style.visibility = "visible";     // haciendo click nuevamente en el mismo botón.
    }
}
function Mostrar_Ocultar2(){
    var contenedor2 = document.getElementsByClassName("contenedor2")[0]

    if (contenedor2.style.visibility == "visible") {
        contenedor2.style.visibility = "hidden";
    } else {
        contenedor2.style.visibility = "visible";
    }
}
function Mostrar_Ocultar3(){
    var contenedor3 = document.getElementsByClassName("contenedor3")[0]

    if (contenedor3.style.visibility == "visible") {
        contenedor3.style.visibility = "hidden";
    } else {
        contenedor3.style.visibility = "visible";
    }
}
function Mostrar_Ocultar4(){
    var contenedor4 = document.getElementsByClassName("contenedor4")[0]

    if (contenedor4.style.visibility == "visible") {
        contenedor4.style.visibility = "hidden";
    } else {
        contenedor4.style.visibility = "visible";
    }
}
function Mostrar_Ocultar5(){
    var contenedor5 = document.getElementsByClassName("contenedor5")[0]

    if (contenedor5.style.visibility == "visible") {
        contenedor5.style.visibility = "hidden";
    } else {
        contenedor5.style.visibility = "visible";
    }
}
