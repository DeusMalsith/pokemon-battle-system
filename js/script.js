console.log('working');

function initGame() {
	
}


function attack1() {
	player.attack(enemy, player.moves[0]);
	console.log('attacked with first attack');
	console.log(enemy.health);
}

function attack2() {
	player.attack(enemy, player.moves[1]);
	console.log('attacked with 2nd attack');
	console.log(enemy.health);
}

document.getElementById('attack1').addEventListener('click', attack1);

document.getElementById('attack2').addEventListener('click', attack2);