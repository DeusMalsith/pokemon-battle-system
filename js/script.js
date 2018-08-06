console.log('working');

let turn = 0;



function attack1() {
	
	console.log('attacked with first attack');
}

function attack2() {
	console.log('attacked with 2nd attack');
}

document.getElementById('attack1').addEventListener('click', attack1);

document.getElementById('attack2').addEventListener('click', attack2);