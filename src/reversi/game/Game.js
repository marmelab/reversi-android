import { create as createBoard } from '../board/Board'

export function create(players){
  return {
    board: createBoard(8, 8),
    players,
    playerIndex: 0
  }
}

export function switchPlayer(game){
  const newGame = Object.assign({}, game);
  newGame.playerIndex = (newGame.playerIndex === 0) ? 1 : 0;
  return newGame
}
