const gameLogic = (() => {
    let _board = ["","","","","","","","","",];

//Caching DOM elements
    const _gridSquares = document.querySelectorAll('.gridSquare')
    const turnHeader = document.getElementsByClassName('turnCounter')
    let victorytxt = document.getElementById("victory"); 
    const overlay = document.getElementById("overlay")
    const reset = document.getElementById("reset")
    const playerOneName = document.getElementsByClassName("playerOneName")
    const playerOneScore = document.getElementsByClassName("playerOneScore")
    const playerTwoName = document.getElementsByClassName("playerTwoName")
    const playerTwoScore = document.getElementsByClassName("playerTwoScore")




// Listens for clicks, reads Players and then pushes to GameBoard
    function Listener(){ 
        reset.addEventListener('click', function resetGame(event) {
            off()
            _board = ["","","","","","","","",""]
            arrayDisplay(_board)
        })
        _gridSquares.forEach(gridSquare => {
            const squareIndex = gridSquare.dataset.index

        gridSquare.addEventListener('click', function handleClick(event) {
            if (_board[squareIndex] == "" && playerOne.turn == 1 ) {
                   updateBoard(squareIndex, playerOne.symbol)
                   playerOne.turn = false
                   playerTwo.turn = true
                   displayController()
                   determineWin(_board)

            }
            if (_board[squareIndex] == "" && playerTwo.turn == 1){
                updateBoard(squareIndex, playerTwo.symbol)
                playerOne.turn = true
                playerTwo.turn = false
                displayController()
                determineWin(_board)


    
            }
        })
            
    }) }
    

// Updates Array and pushes arrayDisplay
    function updateBoard(number, value){
        _board[number] = value
        arrayDisplay(_board)
    }


// This function loops through _board array and pushes the value onto DOM    
    function arrayDisplay(_board) {
        _board.forEach((value, index) => {
            if (_board[index] != "") {
                _gridSquares[index].innerHTML = value
            }
            if (_board[index] == "") {
                _gridSquares[index].innerHTML = ""
            }
        })
    }


  const _personFactory = (name, score, turn, symbol) => {
      return { name, score, turn, symbol}   
  }

  const playerOne = _personFactory('Blady', 0, true, 'X') // Name, Score, Turn, Symbol
  const playerTwo = _personFactory('Sophie', 0, false, 'O') // Name, Score, Turn, Symbol


function overlayOn() {
    overlay.style.display = "flex";
  }
  
  function off() {
    overlay.style.display = "none";
  }

//Win Conditions
function determineWin(array) {  
 let win1 = _board[0] + _board[1] + _board[2]
 let win2 = _board[3] + _board[4] + _board[5]
 let win3 = _board[6] + _board[7] + _board[8]
 let win4 = _board[0] + _board[3] + _board[6]
 let win5 = _board[1] + _board[4] + _board[7]
 let win6 = _board[2] + _board[5] + _board[8]
 let win7 = _board[0] + _board[4] + _board[8]
 let win8 = _board[2] + _board[4] + _board[6]
 const winStates = [win1,win2,win3,win4,win5,win6,win7,win8]
console.log(winStates)
for (let i = 0; i < winStates.length; i++) {
    if( winStates[i] == "OOO" || winStates[i] == "XXX") {
        setTimeout(() => {
                        if (playerOne.symbol==winStates[i].slice(0,1)) {
                playerOne.score += 1
                overlayOn()
                displayController()
                victorytxt.innerHTML = `${playerOne.name} has won the game!` 
                            
                        }
                else { 
                    playerTwo.score += 1
                    overlayOn() 
                    displayController()
                    victorytxt.innerHTML = `${playerTwo.name} has won the game!`

                }


        }, .01);  
        break        

    } 
    else if (winStates[0].length == 3 && winStates[1].length == 3 && winStates[2].length == 3 ) {
                overlayOn()
                victorytxt.innerHTML = `It's a tie!`
                console.log(winStates[1].length)
                console.log(playerOne.score, playerTwo.score)

        
    }
}


}

function displayController() {
    console.log('this is display controller')
    playerOneName[0].innerHTML = playerOne.name;
    playerOneScore[0].innerHTML = playerOne.score;
console.log(playerTwo.turn == 1)
    playerTwoName[0].innerHTML = playerTwo.name;
    playerTwoScore[0].innerHTML = playerTwo.score;
    if (playerOne.turn == true) {
        turnHeader[0].innerHTML = `${playerOne.name}'s Turn!`
        console.log('it is player ones turn')
    }   
    if (playerTwo.turn == true ) {
        turnHeader[0].innerHTML = `${playerTwo.name}'s Turn!`

    }
}
// To-do
// 

function initialization(){
    
}
function basicAI(array){

}
    arrayDisplay(_board)
    Listener()
    displayController()

    return {
        determineWin
    }
        
    })();

