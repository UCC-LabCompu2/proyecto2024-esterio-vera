function Mostrar_Ocultar(classsName) {//Función control de visibilidad de botones:
    var contenedor1 = document.getElementsByClassName(classsName)[0]

    if (contenedor1.style.visibility === "visible") {  //Esta función tiene el propósito de que cuando el usuario ingrese a la página NO se vea
        contenedor1.style.visibility = "hidden";      //la información a menos que haga click en el botón correspondiente.
    } else {                                          // Cuando el usuario desee dejar de ver la información, ésta desaparecerá
        contenedor1.style.visibility = "visible";     // haciendo click nuevamente en el mismo botón.
    }
}

var puntero;

function dibujar(event) {//función para poder dibujar
    var canvas = document.getElementById("main-canvas");//
    var ctx = canvas.getContext("2d");//  retorna un contexto de dibujo en el lienzo

    var posX = event.clientX;//variable en el eje x
    var posY = event.clientY;//variable en el eje y
    console.log(posX, posY);//para imprimir los valores y ver en que posición está realmente ubicado el mpuse

    canvas.onmousedown = function () {//puntero para cuando el click izqquierdo está presionado
        puntero = true
    };
    canvas.onmouseup = function () {//puntero para cuando el click izqquierdo no está presionado
        puntero = false
    };

    if (puntero) {//activación del pincel segun la cordenada
        ctx.fillRect(posX - 30, posY - 310, 10, 10);//los numeros que se restan contribuyen a la calibración del pincel
        ctx.fill;

    }


}