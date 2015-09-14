var tablero;
var fondo = {
    imagenOK: false,
    imagenURL: "Images/fondo.png"
};

var tifis = {
    x: 200,
    y: 100,
    frenteURL: "Images/diana-frente.png",
    frenteOK: false
}

function juegoCanvasInicio() {
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;
}
function confirmarFondo(){
    fondo.imagenOK = true;
    dibujar();
}
function dibujar(){
    if (fondo.imagenOK == true)
    {
        tablero.drawImage(fondo.imagen,0,0);
    }
}