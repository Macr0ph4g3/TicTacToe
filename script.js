
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

// Listens for clicks, reads Players and then pushes to GameBoard
    function Listener(){ 
        _gridSquares.forEach(gridSquare => {
            const squareIndex = gridSquare.dataset.index

        gridSquare.addEventListener('click', function handleClick(event) {
            if (_board[squareIndex] == "" && playerOne.turn == 1 ) {
                   updateBoard(squareIndex, playerOne.symbol)
                   playerOne.turn = "0"
                   playerTwo.turn = "1"
                   winCondition(_board)

            }
            if (_board[squareIndex] == "" && playerTwo.turn == 1){
                updateBoard(squareIndex, playerTwo.symbol)
                playerOne.turn = "1"
                playerTwo.turn = "0"
                winCondition(_board)


    
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

  const playerOne = _personFactory('playerOne', 0, 1, 'X') // Name, Score, Turn, Symbol
  const playerTwo = _personFactory('playerTwo', 0, 0, 'O') // Name, Score, Turn, Symbol
console.log(playerOne)
console.log(playerTwo)

//Win Conditions
function winCondition(array) {  

 let win1 = _board[0] + _board[1] + _board[2]
 let win2 = _board[3] + _board[4] + _board[5]
 let win3 = _board[6] + _board[7] + _board[8]
 let win4 = _board[0] + _board[3] + _board[6]
 let win5 = _board[1] + _board[4] + _board[7]
 let win6 = _board[2] + _board[5] + _board[8]
 let win7 = _board[0] + _board[4] + _board[8]
 let win8 = _board[2] + _board[4] + _board[6]

if (win1=="OOO"||win2=="OOO"||win3=="OOO"||win4=="OOO"||win5=="OOO"||win6=="OOO"||win7=="OOO"||win8=="OOO") {

        setTimeout(() => {
            if (playerOne.symbol=="O") {
                playerOne.score += 1
                alert(`${playerOne.name} Wins!`)
                console.log(win1, win2, win3, win4, win5, win6, win7, win8)

            }
                
            else { 
                playerTwo.score += 1
                alert(`${playerTwo.name} Wins!`)}
            }, 100) 
}
                            
            

     else if(win1=="XXX"||win2=="XXX"||win3=="XXX"||win4=="XXX"||win5=="XXX"||win6=="XXX"||win7=="XXX"||win8=="XXX"){
        setTimeout(() => {
            if (playerOne.symbol=="X")  {
                playerOne.score += 1
                alert(`${playerOne.name} Wins!`)
                console.log(win1, win2, win3, win4, win5, win6, win7, win8)  
                                        }
                
            else { 
                playerTwo.score += 1
                alert(`${playerTwo.name} Wins!`)}

            }, 100) 
}
            
            
            else if (win1.length=3 && win2.length==3 && win3.length==3 && win4.length==3 && win3.length==3 && win3.length==3 && win3.length==3 && win3.length==3 && win3.length==3) {
        setTimeout(() => {
            alert("It's a tie!!")
        })
    
}
}

// To-do
// Win / Tie conditions
// Score keeping



    arrayDisplay(_board)
    Listener()
    return {
        winCondition
    }
        
    })();

