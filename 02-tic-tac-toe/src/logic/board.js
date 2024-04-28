import { WINNER_COMBOS } from "../constans"

export const checkWinnerFrom = (boardToCheck) => {

    //revisamos todas las combinaciones ganadores 
    //para ver si X y O gano 

    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo 
      if(
        boardToCheck[a] && 
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
  }

export const checkEndGame = (newBoard) => {

    //revisamos si hay un empate 
    //si no hay mas espacios vacios 
    // en el tablero 
    
    return newBoard.every((square) => square != null)
  }