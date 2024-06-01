function Mostrar_Ocultar(){
var contenedor = document.getElementsByClassName("contenedor")[0]

if (contenedor.style.visibility == "visible"){
    contenedor.style.visibility = "hidden";
}else{
    contenedor.style.visibility = "visible";
}

}