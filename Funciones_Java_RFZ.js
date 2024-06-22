function Mostrar_Ocultar(classsName) {
    let contenedor1 = document.getElementsByClassName(classsName)[0];

    if (contenedor1.style.visibility === "visible") {
        contenedor1.style.visibility = "hidden";
    } else {
        contenedor1.style.visibility = "visible";
    }
}

var puntero = false;
var color = '#000000'; // Default color

document.getElementById('colorPicker').addEventListener('input', function(event) {
    color = event.target.value;
});

function dibujar(event) {
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");

    canvas.addEventListener('mousedown', function () {
        puntero = true;
    });

    canvas.addEventListener('mouseup', function () {
        puntero = false;
    });

    canvas.addEventListener('mousemove', function (event) {
        if (puntero) {
            let rect = canvas.getBoundingClientRect();
            let posX = event.clientX - rect.left;
            let posY = event.clientY - rect.top;
            dibujarCirculo(posX, posY);
        }
    });

    function dibujarCirculo(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2, true);
        ctx.fillStyle = color; // Use the selected color
        ctx.fill();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    dibujar();
});
