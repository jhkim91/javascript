var tetris = document.querySelector('#tetris');
var blockArr = [
	['red', true, [
		[1,1],
		[1,1]
	]],
	['blue', true, [
		[0,2,0],
		[2,2,2]
	]],
	['orange', true, [
		[3,3,0],
		[0,3,3]
	]],
	['skyblue', true, [
		[0,4,4],
		[4,4,0]
	]],
	['yellowgreen', true, [
		[5,5,5],
		[5,0,0]
	]],
	['pink', true, [
		[6,6,6],
		[0,0,6]
	]],
	['yellow', true, [
		[7,7,7,7]
	]],
];
var blockDict = {
	0: ['white', false, []],
	1: ['red', true, [
		[1,1],
		[1,1]
	]],
	2: ['blue', true, [
		[0,1,0],
		[1,1,1]
	]],
	3: ['orange', true, [
		[1,1,0],
		[0,1,1]
	]],
	4: ['skyblue', true, [
		[0,1,1],
		[1,1,0]
	]],
	5: ['yellowgreen', true, [
		[1,1,1],
		[1,0,0]
	]],
	6: ['pink', true, [
		[1,1,1],
		[0,0,1]
	]],
	7: ['yellow', true, [
		[1,1,1,1]
	]],
	10: ['red', false, []],
	20: ['blue', false, []],
	30: ['orange', false, []],
	40: ['skyblue', false, []],
	50: ['yellowgreen', false, []],
	60: ['pink', false, []],
	70: ['yellow', false, []],
};

var tetrisData = [];
stopDown = false;

function createFrame() {
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 20; i++ ) {
		var tr = document.createElement('tr');
		var arr = [];
		tetrisData.push(arr);
		fragment.appendChild(tr);
		for (var j = 0; j < 10; j++) {
			var td = document.createElement('td');
			tr.appendChild(td);
			arr.push(0);
		}
	}
	console.log(tetrisData);
	tetris.appendChild(fragment);
}

// 화면 그리기
function screenDrawing() {
	tetrisData.forEach(function(tr, i) {
		tr.forEach(function(td, j) {
			tetris.children[i].children[j].className = blockDict[td][0];
		})
	})
};

// 블록 생성기
function createBlock() {
	stopDown = false;
	var block = blockArr[Math.floor(Math.random() * 7)][2];
	console.log(block);
	block.forEach(function(tr, i) {
		tr.forEach(function(td, j) {
			// 블록 생성할때 이미 차있으면 게임오버
			tetrisData[i][j + 3] = td;
		})
	});
	screenDrawing();
}

// 블록 내리기
function blockDown() {
	for (var i = tetrisData.length - 1; i >= 0; i--) {
		tetrisData[i].forEach(function(td, j) {
			if (td > 0 && td < 10) {
				if (tetrisData[i + 1] && !stopDown) { // 아래 공간이있을경우
					tetrisData[i + 1][j] = td;
					tetrisData[i][j] = 0;
				} else { // 바닥에 도달했을경우
					stopDown = true;
					tetrisData[i][j] = td * 10;
				}
			}
		})
	}
	if (stopDown) {
		createBlock()
	}
	screenDrawing();
}

window.addEventListener('keydown', function(e) {
	switch (e.code) {
		case 'ArrowRight':
			break;
		case 'ArrowLeft':
			break;
		case 'ArrowDown':
			break;
		default:
			break;
	}
});

window.addEventListener('keyup', function(e) {
	switch (e.code) {
		case 'Space':
			break;
		case 'ArrowUp':
			break;
		default:
			break;
	}
});

createFrame();
createBlock();

setInterval(blockDown, 100);