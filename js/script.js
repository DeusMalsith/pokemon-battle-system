console.log('working');

let playerPokemon;
let enemyPokemon;

//Starts the game and sets the beginning pokemon at random
//Pokemon max of six
function initGame() {
	for (var i = 0; i < 6; i++) {
		player.push(pokemon.splice(Math.floor(Math.random() * pokemon.length), 1)[0]);
		enemy.push(pokemon.splice(Math.floor(Math.random() * pokemon.length), 1)[0]);
	}

	playerPokemon = player[0];
	console.log(playerPokemon);
	enemyPokemon = enemy[0];
	console.log(enemyPokemon);
}

initGame();

function switchPokemon() {
	console.log('switched pokemon');
}

function attack1() {
	playerPokemon.attack(enemyPokemon, playerPokemon.moves[0]);
	console.log('attacked with first attack');
	console.log(enemyPokemon.health);
}

function attack2() {
	playerPokemon.attack(enemyPokemon, playerPokemon.moves[1]);
	console.log('attacked with 2nd attack');
	console.log(enemyPokemon.health);
}

// Set in way where this works for enemy
function rest() {
	playerPokemon.incrementHealth(playerPokemon, playerPokemon.moves[1]);
	console.log('healed');
	console.log(playerPokemon.health);
}

document.getElementById('attack1').addEventListener('click', attack1);

document.getElementById('attack2').addEventListener('click', attack2);