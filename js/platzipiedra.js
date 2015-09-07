var resultado;
var win = "Ganaste!";
var loose = "Perdiste!";

var opcionPiedra = ["",loose,win];
var opcionPapel = [win,"",loose];
var opcionTijera = [loose,win,""];

var opciones = ["Piedra", "Papel", "Tijera"];
var opcionMaquina = Math.floor(Math.random()*3);
var opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

if (! opciones[opcionUsuario]){
    alert("Tu elección es como Stephen Hawking: inválido!" + "\nResultado: " + loose);
} else {
    if (opcionUsuario == opcionMaquina){
        resultado = "Empataste";
    }
    else if (opcionUsuario == 0){
        resultado = opcionPiedra[opcionMaquina];
    }
    else if (opcionUsuario == 1){
        resultado = opcionPapel[opcionMaquina];
    }
    else {
        resultado = opcionTijera[opcionMaquina]
    }
    alert("Elegiste " + opciones[opcionUsuario] + "\nJavascript eligió " + opciones[opcionMaquina] + "\nResultado: " + resultado);
}