let moves = {
    'tackle': {
        name: 'TACKLE',
        damage: 4
    },
    'thundershock': {
        name: 'THUNDERSHOCK',
        damage: 6
	},
	'scratch': {
		name: 'SCRATCH',
		damage: 4
	},
	'ember': {
		name: 'EMBER',
		damage: 6
	}
};

class Pokemon {
	constructor(pokename, level, health, moves, img) {
		this.pokename = pokename;
		this.level = level;
		this.health = health;
		this.moves = moves;
		this.img = img;
	}
	decrementHealth(damage) {
		this.health -= damage;
	}
	attack(target, move) {
		target.decrementHealth(move.damage);
	}
};

pokemon = [];
pokemon.push(new Pokemon('pikachu', 5, 100, [moves['tackle'], moves['thundershock']], 'pikachu.png'));
pokemon.push(new Pokemon('charmander', 6, 100, [moves['scratch'], moves['ember']], 'charmander.png'));
pokemon.push(new Pokemon('squirtle', 7, 100, [moves['tackle'], moves['thundershock']], 'squirtle.png'));
pokemon.push(new Pokemon('evee', 5, 100, [moves['tackle'], moves['thundershock']], 'evee.png'));
pokemon.push(new Pokemon('bulbasaur', 8, 100, [moves['tackle'], moves['thundershock']], 'bulbasaur.png'));
pokemon.push(new Pokemon('ekans', 5, 100, [moves['tackle'], moves['thundershock']], 'ekans.png'));


let player = pokemon[0];
let enemy = pokemon[1];