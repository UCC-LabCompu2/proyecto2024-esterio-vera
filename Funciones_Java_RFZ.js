function Mostrar_Ocultar(classsName) {
    let contenedor1 = document.getElementsByClassName(classsName)[0];

    if (contenedor1.style.visibility === "visible") {
        contenedor1.style.visibility = "hidden";
    } else {
        contenedor1.style.visibility = "visible";
    }
}

/**
 * Esta función tiene el propósito de que cuando el usuario ingrese a la página NO se vea la información a menos que haga click en el botón correspondiente.
 * Cuando el usuario desee dejar de ver la información, ésta desaparecerá haciendo click nuevamente en el mismo botón.
 * @method Mostrar_Ocultar
 * @param {string} class - La clase que se le pasa a la función de los contenedores 1,2,3,4 o 5.
 * @return void
 */

document.addEventListener('DOMContentLoaded', () => {
    let puntero = false;
    let color = '#000000';

    document.getElementById('colorPicker').addEventListener('input', (event) => {
        color = event.target.value;
    });

    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");

    const getPositionX = (event) => event.clientX - canvas.getBoundingClientRect().left;
    const getPositionY = (event) => event.clientY - canvas.getBoundingClientRect().top;

    canvas.addEventListener('mousedown', () => {
        puntero = true;
    });

    canvas.addEventListener('mouseup', () => {
        puntero = false;
    });

    canvas.addEventListener('mousemove', (event) => {
        if (puntero) {
            const posX = getPositionX(event);
            const posY = getPositionY(event);
            dibujarCirculo(posX, posY);
        }
    });

    const dibujarCirculo = (x, y) => {
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2, true);
        ctx.fillStyle = color;
        ctx.fill();
    };
});

/**
 * Esta funcion permite que a la hora de dibujar. nuestra "brocha" tenga una forma circular con cierto radio especifico.
 * @method dibujarCirculo
 * @param {number} posicion - La posicion en donde se encuentra el mouse.
 * @return void
 */