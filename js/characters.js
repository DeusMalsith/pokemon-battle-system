let moves = {
    'tackle': {
        name: 'TACKLE',
        damage: 15,
        target: 'enemy'
    },
    'thundershock': {
        name: 'THUNDERSHOCK',
        damage: 25,
        target: 'enemy'
	},
	'scratch': {
		name: 'SCRATCH',
		damage: 4,
		target: 'enemy'
	},
	'ember': {
		name: 'EMBER',
		damage: 6,
		target: 'enemy'
	},
	'quick attack': {
		name: 'QUICK ATTACK',
		damage: 20,
		target: 'enemy'
	},
	'thunder': {
		name: 'THUNDER',
		damage: 40,
		target: 'enemy'
	},
	'fire blast': {
		name: 'FIRE BLAST',
		damage: 60,
		target: 'enemy'
	},
	'mega punch': {
		name: 'MEGA PUNCH',
		damage: 35,
		target: 'enemy'
	},
	'hydro pump': {
		name: 'HYDRO PUMP',
		damage: 60,
		target: 'enemy'
	},
	'skull bash': {
		name: 'SKULL BASH',
		damage: 35,
		target: 'enemy'
	},
	'acid': {
		name: 'ACID',
		damage: 28,
		target: 'enemy'
	},
	'belch': {
		name: 'BELCH',
		damage: 60,
		target: 'enemy'
	},
	'psychic': {
		name: 'PSYCHIC',
		damage: 40,
		target: 'enemy'
	},
	'rest': {
		name: 'REST',
		damage: -.6,
		target: 'self'
	},
	'solar beam': {
		name: 'SOLAR BEAM',
		damage: 60,
		target: 'enemy'
	},
	'body slam': {
		name: 'BODY SLAM',
		damage: 35,
		target: 'enemy'
	},
	'slash': {
		name: 'SLASH',
		damage: 35,
		target: 'enemy'
	},
	'hyper beam': {
		name: 'HYPERBEAM',
		damage: 70,
		target: 'enemy'
	},
	'hi jump kick': {
		name: 'HI JUMP KICK',
		damage: 50,
		target: 'enemy'
	},
	'mega kick': {
		name: 'MEGA KICK',
		damage: 60,
		target: 'enemy'
	},
	'lick': {
		name: 'LICK',
		damage: 35,
		target: 'enemy'
	},
	'low sweep': {
		name: 'LOW SWEEP',
		damage: 35,
		target: 'enemy'
	},
	'dynamic punch': {
		name: 'DYNAMIC PUNCH',
		damage: 50,
		target: 'enemy'
	}
};

class Pokemon {
	constructor(pokename, level, maxhealth, moves, imgfront, imgback) {
		this.pokename = pokename;
		this.level = level;
		this.health = maxhealth;
		this.maxhealth = maxhealth;
		this.moves = moves;
		this.imgfront = imgfront;
		this.imgback = imgback;
	}

	potion() {
		this.decrementHealth(this.maxhealth * -.3);
	}

	decrementHealth(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			death();
		}
	}
	attack(target, move) {
		if (move.target == 'self') {
			this.decrementHealth(this.maxhealth * move.damage)
		} else {
		target.decrementHealth(move.damage);
		}
	}
	//Death function will pull the next pokemon in the array into the battle
	death() {
		console.log('Death function');
	}
};

// Make a way for the enemy sprites to be front facing
pokemon = [];
pokemon.push(new Pokemon('pikachu', 50, 117, [moves['tackle'], moves['thundershock']], 'pikachu.png', 'pikachuback.png'));
pokemon.push(new Pokemon('charizard', 50, 163, [moves['fire blast'], moves['mega punch']], 'charizard.png', 'charizardback.png'));
pokemon.push(new Pokemon('blastoise', 50, 180, [moves['hydro pump'], moves['skull bash']], 'blastoise.png', 'blastoiseback.png'));
pokemon.push(new Pokemon('kadabra', 50, 128, [moves['psychic'], moves['rest']], 'kadabra.png', 'kadabraback.png'));
pokemon.push(new Pokemon('venusaur', 50, 171, [moves['solar beam'], moves['body slam']], 'venusaur.png', 'venusaurback.png'));
pokemon.push(new Pokemon('jolteon', 50, 152, [moves['quick attack'], moves['thunder']], 'jolteon.png', 'jolteonback.png'));
pokemon.push(new Pokemon('arbok', 50, 133, [moves['acid'], moves['belch']], 'arbok.png', 'arbokback.png'));
pokemon.push(new Pokemon('scyther', 50, 155, [moves['slash'], moves['hyper beam']], 'scyther.png', 'scytherback.png'));
pokemon.push(new Pokemon('starmie', 50, 146, [moves['hydro pump'], moves['rest']], 'starmie.png', 'starmieback.png'));
pokemon.push(new Pokemon('hitmonlee', 50, 138, [moves['hi jump kick'], moves['mega kick']], 'hitmonlee.png', 'hitmonleeback.png'));
pokemon.push(new Pokemon('haunter', 50, 120, [moves['lick'], moves['psychic']], 'haunter.png', 'haunterback.png'));
pokemon.push(new Pokemon('machamp', 50, 190, [moves['low sweep'], moves['dynamic punch']], 'machamp.png', 'machampback.png'));


let player = [];
let enemy = [];