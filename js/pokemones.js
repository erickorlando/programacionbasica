function Pokemon(nombrePokemon, vidaPoke, ataPoke) {
	var estructuraPokemon = {
		nombre: nombrePokemon,
		vida: vidaPoke,
		ataque: ataPoke
	};
	return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu", 100,55);
var bulbasaur = Pokemon("Bulbasaur",90,50);

document.writeln(bulbasaur.nombre);
document.write(pikachu.nombre);