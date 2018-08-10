console.log('working');

let playerPokemon;
let enemyPokemon;

//Starts the game and sets the beginning pokemon at random
//Pokemon max of six for enemy and player
function initGame() {
	for (var i = 0; i < 6; i++) {
		var tempPokemon = pokemon.splice(Math.floor(Math.random() * pokemon.length), 1)[0];
		tempPokemon.owner = 'player';
		playerParty.push(tempPokemon);
		tempPokemon = pokemon.splice(Math.floor(Math.random() * pokemon.length), 1)[0];
		tempPokemon.owner = 'enemy';
		enemyParty.push(tempPokemon);
	}
	playerPokemon = playerParty[0];
	console.log(playerPokemon);
	enemyPokemon = enemyParty[0];

	showPokemon();
}

function showPokemon(){
	console.log(enemyPokemon);
	document.getElementById('pkmnback').src = playerPokemon.imgback;
	document.getElementById('pkmn').src = enemyPokemon.imgfront;
	document.getElementById('pkmnback-name').textContent = playerPokemon.pokename;
	document.getElementById('pkmn-name').textContent = enemyPokemon.pokename;
	document.getElementById('pkmnback-maxhp').textContent = playerPokemon.maxhealth
	document.getElementById('pkmnback-hp').textContent = playerPokemon.health
}

initGame();

function switchPokemon() {
	console.log('switched pokemon');
}

function itemButton() {

}

function attack1() {
	playerPokemon.attack(enemyPokemon, playerPokemon.moves[0]);
	//console.log('attacked with first attack');
	//console.log(enemyPokemon.health);
	enemyPokemon.faint(enemyPokemon, enemyParty);
	setTimeout(enemyAttack, 1000);
	showPokemon();
}

function attack2() {
	playerPokemon.attack(enemyPokemon, playerPokemon.moves[1]);
	//console.log('attacked with 2nd attack');
	console.log(enemyPokemon.health);
	enemyPokemon.faint(enemyPokemon, enemyParty);
	setTimeout(enemyAttack, 1000);
	showPokemon();
}

function enemyAttack() {
	var attackMove = Math.floor(Math.random() * enemyPokemon.moves.length);
	//console.log('attacked with',enemyPokemon.moves[attackMove].name);
	enemyPokemon.attack(playerPokemon,enemyPokemon.moves[attackMove]);
	//console.log(playerPokemon.health);
	showPokemon();
	playerPokemon.faint(playerPokemon, playerParty);
}

// // Set in way where this works for enemy
// function rest() {
// 	playerPokemon.incrementHealth(playerPokemon, playerPokemon.moves[1]);
// 	console.log('healed');
// 	console.log(playerPokemon.health);
// }

function endGame() {
	console.log('game over');
}

document.getElementById('attack1').addEventListener('click', attack1);

document.getElementById('attack2').addEventListener('click', attack2);

document.getElementById('items').addEventListener('click', potion);