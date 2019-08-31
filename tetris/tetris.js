var tetris = document.querySelector('#tetris');

function createFrame() {
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 20; i++ ) {
		var tr = document.createElement('tr');
		fragment.appendChild(tr);
		for (var j = 0; j < 10; j++) {
			var td = document.createElement('td');
			tr.appendChild(td);
		}
	}
	console.log(tetris, fragment);
	tetris.appendChild(fragment);
}
createFrame();

