var tablero;
var fondo = {
    imagenURL: "Images/fondo.png"
};
function juegoCanvasInicio() {
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = function () {
        tablero.drawImage(fondo.imagen, 0, 0);
    };
}