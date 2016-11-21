import { create } from '../../../src/reversi/game/Game'
import { create as createBoard } from '../../../src/reversi/board/Board'
import { create as createPlayer } from '../../../src/reversi/player/Player'
import { TYPE_WHITE, TYPE_BLACK } from '../../../src/reversi/cell/Cell'

describe('Game', () => {

  it('create should return valid game', () => {

    const players = [
      createPlayer('john', TYPE_WHITE),
      createPlayer('doe', TYPE_BLACK)
    ]

    const expectedGame = {
      board: createBoard(8, 8),
      players,
      playerIndex: 0
    }

    expect(create(players)).toEqual(expectedGame);

  });

});
