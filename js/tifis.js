var tablero;
var teclas =
    {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

var fondo = {
    imagenOK: false,
    imagen: new Image(),
    imagenURL: "Images/fondo.png"
};

var tifis = {
    x: 100,
    y: 100,
    frente: new Image(),
    frenteURL: "Images/diana-frente.png",
    frenteOK: false,
    atras: new Image(),
    atrasURL: "Images/diana-atras.png",
    atrasOK: false,
    der: new Image(),
    derURL: "Images/diana-der.png",
    derOK: false,
    izq: new Image(),
    izqURL: "Images/diana-izq.png",
    izqOK: false,
    velocidad: 20
}

var liz = {
    x: 100,
    y: 250,
    imagenOK: false,
    imagen: new Image(),
    imagenURL: "Images/liz.png"
}

function juegoCanvasInicio() {
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    // fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = function () {
        fondo.imagenOK = true;
        dibujar();
    };

    tifis.frente.src = tifis.frenteURL;
    tifis.frente.onload = function () {
        tifis.frenteOK = true;
        dibujar();
    };
    tifis.atras.src = tifis.atrasURL;
    tifis.atras.onload = function () {
        tifis.atrasOK = true;
        dibujar();
    };
    tifis.izq.src = tifis.izqURL;
    tifis.izq.onload = function () {
        tifis.izqOK = true;
        dibujar();
    };
    tifis.der.src = tifis.derURL;
    tifis.der.onload = function () {
        tifis.derOK = true;
        dibujar();
    };


    liz.imagen.src = liz.imagenURL;
    liz.imagen.onload = function () {
        liz.imagenOK = true;
        dibujar();
    }

    document.addEventListener("keydown", teclado);
}

function teclado(datos) {
    // Guardo el numero de la tecla oprimida.
    var codigo = datos.keyCode;

    switch (codigo) {
        case teclas.UP:
            tifis.y -= tifis.velocidad;
            break;
        case teclas.DOWN:
            tifis.y += tifis.velocidad;
            break;
        case teclas.LEFT:
            tifis.x -= tifis.velocidad;
            break;
        case teclas.RIGHT:
            tifis.x += tifis.velocidad;
            break;
    }

    dibujar(codigo);
}


function dibujar(direccion) {
    if (fondo.imagenOK == true) {
        tablero.drawImage(fondo.imagen, 0, 0);
    }
    var posicionTifis = tifis.frente;
    if (tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK) {
        switch (direccion) {
            case teclas.UP:
                posicionTifis = tifis.atras;
                break;
            case teclas.DOWN:
                posicionTifis = tifis.frente;
                break;
            case teclas.LEFT:
                posicionTifis = tifis.izq;
                break;
            case teclas.RIGHT:
                posicionTifis = tifis.der;
                break;
        }
        tablero.drawImage(posicionTifis, tifis.x, tifis.y);
    }
    if (liz.imagenOK) {
        tablero.drawImage(liz.imagen, liz.x, liz.y);
    }
}
function movimiento() {
    tifis.x += 10;
    dibujar();
}