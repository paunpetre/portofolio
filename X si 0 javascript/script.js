var board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
var currentPlayer = 'x';
var isGameFinished = 0;
var rand = document.getElementById('rand');
rand.innerHTML = 'x';
var mesaj = document.getElementById('mesaj');
var scorx = document.getElementById('scorX');
var scor0 = document.getElementById('scor0');
var scor_x = 0;
var scor_0 = 0;
var reset = document.getElementById('reset');

window.onload=function() {
	var joc = document.getElementById('joc');
	var board = " ";
	for(var i = 0; i < 3; i++) {
		board += '<div class="same-line">'; 
		for(var j = 0; j < 3; j++) {
			board += '<div class="cell" id="'+ i + j +'" onclick = "place('+ i + ', ' + j + ')" ></div>';
		}
		board += '</div>';
	}
	joc.innerHTML = board;
}

function place(i,j) {

	if(isGameFinished == 1) {
		alert("Jocul deja s-a terminat");
		return;
	}
	if(board[i][j] != ' ') {
		alert("Celula este deja ocupata!");
		return;
	}
	board[i][j] = currentPlayer;
	if(currentPlayer == 'x') {
		currentPlayer = '0';
		rand.innerHTML = '0';
	} else {
		currentPlayer = 'x';
		rand.innerHTML = 'x';
	}
	document.getElementById('' + i + j).innerHTML = board[i][j];
	gameFinished();
}

function gameFinished() {
	var winner = '-';
	for(var i = 0; i < 3; ++i) {
		if(board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] != ' '){
			winner = board[i][0];
		}
		if(board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] != ' '){
			winner = board[0][i];
		}
	}

	if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != ' '){
		winner = board[0][0];
	}
	if(board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != ' ') {
		winner = board[0][2];
	}
	console.log(winner);
	var freeCells = 0;

	for(var i = 0; i < 3; ++i) {
		for (var j = 0; j < 3; ++j) {
			if(board[i][j] == ' ') {
				freeCells = 1;
			}
		}
	}
	if(winner == 'x') {
		isGameFinished = 1;
		mesaj.innerHTML = 'X a castigat';
		scor_x += 1;
		scorx.innerHTML = scor_x;

		return;
	}
	if(winner == '0') {
		isGameFinished = 1;
		mesaj.innerHTML = '0 a castigat';
		scor_0 += 1;
		scor0.innerHTML = scor_0;
		return;
	}
	if(freeCells == 0) {
		isGameFinished = 1;
		mesaj.innerHTML = 'S-a terminat remiza';
		return;
	}

}

reset.onclick = function() {
	mesaj.innerHTML = ' ';
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			board[i][j] = ' ';
			document.getElementById('' + i + j).innerHTML = '';
			currentPlayer = 'x';
			isGameFinished = 0;
			rand.innerHTML = 'x';
		}
	}
}