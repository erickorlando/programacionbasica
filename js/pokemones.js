function Pokemon(n,v,a)
{
    this.grito = "Pika!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function()
    {
        alert(this.grito);
    }
}

function inicio(){
    var rattata = new Pokemon("Rattata",40,2);
    rattata.vida = rattata.vida - 13;
    rattata.grito = "Ola ke ase!";
    
    nombrePokemon.textContent = rattata.nombre;
}

/*
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

console.log(bulbasaur);
*/