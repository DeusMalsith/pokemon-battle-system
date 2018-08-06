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
	constructor(health, moves, img) {
		this.health = health;
		this.moves = moves;
		this.img = img;
	}
};

let pikachu = new Pokemon(100, [moves['tackle'], moves['thundershock']], 'pikachu.png');
let charmander = new Pokemon(100, [moves['scratch'], moves['ember']], 'charmander.png');