var itemList = [];

let items = {
	'potion': {
		name: 'POTION',
		damage: -.3,
		target: 'self',
		amount: 3
	}
};

itemList.push(items);

function potion() {
	playerPokemon.useItem(playerPokemon, items['potion']);
	console.log('healed for ' + items.potion.damage);
}