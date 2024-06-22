function Mostrar_Ocultar(classsName) {//Función control de visibilidad de botones:
    var contenedor1 = document.getElementsByClassName(classsName)[0]

    if (contenedor1.style.visibility === "visible") {  //Esta función tiene el propósito de que cuando el usuario ingrese a la página NO se vea
        contenedor1.style.visibility = "hidden";      //la información a menos que haga click en el botón correspondiente.
    } else {                                          // Cuando el usuario desee dejar de ver la información, ésta desaparecerá
        contenedor1.style.visibility = "visible";     // haciendo click nuevamente en el mismo botón.
    }
}

var puntero = false;

function dibujar(event) {//función para poder dibujar
    var canvas = document.getElementById("main-canvas");
    var ctx = canvas.getContext("2d");

    canvas.addEventListener('mousedown', function () {
        puntero = true;
    });

    canvas.addEventListener('mouseup', function () {
        puntero = false;
    });

    canvas.addEventListener('mousemove', function (event) {
        if (puntero) {
            var rect = canvas.getBoundingClientRect();
            var posX = event.clientX - rect.left;
            var posY = event.clientY - rect.top;
            dibujarCirculo(posX, posY);
        }
    });

    function dibujarCirculo(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2, true); // Dibuja un círculo con radio 5
        ctx.fill();
    }


}