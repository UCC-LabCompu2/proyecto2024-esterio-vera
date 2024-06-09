function Mostrar_Ocultar(classsName) {//Función control de visibilidad de botones:
    var contenedor1 = document.getElementsByClassName(classsName)[0]

    if (contenedor1.style.visibility === "visible") {  //Esta función tiene el propósito de que cuando el usuario ingrese a la página NO se vea
        contenedor1.style.visibility = "hidden";      //la información a menos que haga click en el botón correspondiente.
    } else {                                          // Cuando el usuario desee dejar de ver la información, ésta desaparecerá
        contenedor1.style.visibility = "visible";     // haciendo click nuevamente en el mismo botón.
    }
}
var puntero
//Guardar el elemento y el contexto
function dibujar(event){
    var canvas = document.getElementById("main-canvas");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

   canvas.onmousedown = function (){
       puntero = true
   };
   canvas.onmouseup = function (){
       puntero = false
   };

   if(puntero){
       ctx.fillRect(posX-35,posY-310,10,10);
       ctx.fill;

   }


}