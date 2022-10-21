
// //Person Object
// const peopleObject = (() => {

//     const _personFactory = (name, score, turn, symbol) => {
//       return { name, score, turn, symbol}   
//   }

//   const playerOne = _personFactory('playerOne', 0, 1, 'X') // Name, Score, Turn, Symbol
//   const playerTwo = _personFactory('playerTwo', 0, 0, 'O') // Name, Score, Turn, Symbol
  
//   function currentTurn(playerOne) {
//     console.log(playerOne.turn)
//     return { playerOne }
//   }

//   return {
//     currentTurn
//   }

// })()


const gameLogic = (() => {
    let _board = ["","","","","","","","","",];

//Caching DOM elements
    const _gridSquares = document.querySelectorAll('.gridSquare')
    const turnHeader = document.querySelector('.turnCounter')
    let victorytxt = document.getElementById("victory"); 
    const overlay = document.getElementById("overlay")
// Listens for clicks, reads Players and then pushes to GameBoard
    function Listener(){ 
        _gridSquares.forEach(gridSquare => {
            const squareIndex = gridSquare.dataset.index

        gridSquare.addEventListener('click', function handleClick(event) {
            if (_board[squareIndex] == "" && playerOne.turn == 1 ) {
                   updateBoard(squareIndex, playerOne.symbol)
                   playerOne.turn = "0"
                   playerTwo.turn = "1"
                   determineWin(_board)

            }
            if (_board[squareIndex] == "" && playerTwo.turn == 1){
                updateBoard(squareIndex, playerTwo.symbol)
                playerOne.turn = "1"
                playerTwo.turn = "0"
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

  const playerOne = _personFactory('Blady(one)', 0, 1, 'X') // Name, Score, Turn, Symbol
  const playerTwo = _personFactory('Sophie(two)', 0, 0, 'O') // Name, Score, Turn, Symbol


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

for (let i = 0; i < winStates.length; i++) {
    if( winStates[i] == "OOO" || winStates[i] == "XXX") {
        console.log(winStates)
        console.log(winStates[i], i)
        setTimeout(() => {
                        if (playerOne.symbol=="O") {
                playerOne.score += 1
                overlayOn()
                victorytxt.innerHTML = `${playerOne.name} has won the game!` }
                else { 
                    playerTwo.score += 1
                    overlayOn() 
                    victorytxt.innerHTML = `${playerTwo.name} has won the game!`}

        }, 100);          

    } 
    else if (winStates[1].length == 3 && winStates[0].length == 3 && winStates[2].length == 3) {
                overlayOn()
                victorytxt.innerHTML = `It's a tie!`
                console.log(winStates[1].length)
        
    }
}


}

// To-do
// Score keeping



    arrayDisplay(_board)
    Listener()
    
    return {
        determineWin
    }
        
    })();

