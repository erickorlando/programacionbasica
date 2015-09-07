function mostrar(pos){
	document.write(pos.coords.latitude + ", " +
		pos.coords.longitude);
}
function mostrarerror()
{
	document.write("No pude encontrar tu posición");
}

navigator.geolocation.getCurrentPosition(mostrar,mostrarerror);