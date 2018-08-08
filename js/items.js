var itemList = [];

let items = {
	'potion': {
		name: 'POTION',
		damage: -.3,
		target: 'self'
	}
};

itemList.push(items);

function potion() {
	playerPokemon.useItem(playerPokemon, items['potion']);
	console.log('healed for ' + items.potion.damage);
}