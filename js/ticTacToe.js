/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = [];
var cpt = 0;
var myMove;
var aiSymbole;
var mySymbole;
function getWinner(board) {
    
    // Check if someone won
    vals = [true, false];
    var allNotNull = true;
    for (var k = 0; k < vals.length; k++) {
        var value = vals[k];
        
        // Check rows, columns, and diagonals
        var diagonalComplete1 = true;
        var diagonalComplete2 = true;
        for (var i = 0; i < 3; i++) {
            if (board[i][i] != value) {
                diagonalComplete1 = false;
            }
            if (board[2 - i][i] != value) {
                diagonalComplete2 = false;
            }
            var rowComplete = true;
            var colComplete = true;
            for (var j = 0; j < 3; j++) {
                if (board[i][j] != value) {
                    rowComplete = false;
                }
                if (board[j][i] != value) {
                    colComplete = false;
                }
                if (board[i][j] == null) {
                    allNotNull = false;
                }
            }
            if (rowComplete || colComplete) {
                return value ? 1 : 0;
            }
        }
        if (diagonalComplete1 || diagonalComplete2) {
            return value ? 1 : 0;
        }
    }
    if (allNotNull) {
        return -1;
    }
    return null;
}

function restartGame(turn) {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    
    myMove = turn;
    if(myMove){
        cpt = 0;
        
        updateMove();
        makeMove();
    }
    if(!myMove){
        cpt = 1;
        
        updateMove();
        
    }
    
}

function updateMove() {
    try{
        
        
        updateButtons();
        var winner = getWinner(board);
        $("#winner").text(winner == 1 ? "AI Won!" : winner == 0 ? "You Won!" : winner == -1 ? "Tie!" : "");
    }catch(e){}
}

function updateButtons() {
    try{
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            $("#c" + i + "" + j).text(board[i][j] == false ? mySymbole : board[i][j] == true ? aiSymbole : "");
        }
    }
    }catch(e){}
}
var numNodes = 0;

function recurseMinimax(board, player) {
    numNodes++;
    var winner = getWinner(board);
    if (winner != null) {
        switch(winner) {
            case 1:
                // AI wins
                return [1, board]
            case 0:
                // opponent wins
                return [-1, board]
            case -1:
                // Tie
                return [0, board];
        }
    } else {
        // Next states
        var nextVal = null;
        var nextBoard = null;
        
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                    board[i][j] = player;
                    var value = recurseMinimax(board, !player)[0];
                    if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
                        nextBoard = board.map(function(arr) {
                            return arr.slice();
                        });
                        nextVal = value;
                    }
                    board[i][j] = null;
                }
            }
        }
        return [nextVal, nextBoard];
    }
}

function makeMove() {
    if(cpt == 0){
        cpt++;
        board[0][0] = 1;
        myMove = false;
        updateMove();
        
    }else{
        board = minimaxMove(board);
        console.log(numNodes);
        myMove = false;
        updateMove();
    }
}

function minimaxMove(board) {
    numNodes = 0;
    return recurseMinimax(board, true)[1];
}
if (myMove) {
    makeMove();
}

$(document).ready(function() {
    
    $(".case").click(function() {
        try{
            
            
            var cell = $(this).attr("id");
            var row = parseInt(cell[1]);
            var col = parseInt(cell[2]);
            if (!myMove) {
                board[row][col] = false;
                myMove = true;
                updateMove();
                makeMove();
            }
        }catch(e){}});
    $("#btnX").click(function(){
        var b = false;
        aiSymbole = "o";
        mySymbole = "x";
        restartGame(b);
    });
    $("#btnO").click(function(){
        var b = true;
        aiSymbole = "x";
        mySymbole = "o";
        restartGame(b);
    });
    
});

updateMove();