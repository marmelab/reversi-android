import { takeEvery } from 'redux-saga';
import { put, select, call } from 'redux-saga/effects';
import { placeCellChange, addGameToHistory, CHECK_COMPUTER_TURN, PLACE_CELL_CHANGE } from '../actions/GameActions';
import { getCurrentPlayer, playerCanPlay } from '../../reversi/game/Game';
import { create as createCell } from '../../reversi/cell/Cell';

function* checkComputerTurn(action) {
    const game = yield select(state => state.Game);
    const currentPlayer = getCurrentPlayer(game);

    if (game.isFinished || currentPlayer.isHuman || !playerCanPlay(currentPlayer, game)) {
        return;
    }

    const retrieveCellChange = (cellType, cells) => {
        return fetch(`http://192.168.0.31:8080/?type=${cellType}`, {
            method: 'POST',
            body: JSON.stringify(cells),
        }).then(response => response.json());
    };

    try {
        const cell = yield call(retrieveCellChange, currentPlayer.cellType, game.board.cells);
        yield put(placeCellChange(createCell(cell.X, cell.Y, cell.CellType)));
    } catch (e) {
        alert(e);
    }
}

function* checkForFinishedGame(action) {
    const game = yield select(state => state.Game);
    if (game.isFinished){
        yield put(addGameToHistory(game));
    }
}

function* checkComputerTurnAsync() {
    yield takeEvery(CHECK_COMPUTER_TURN, checkComputerTurn);
}

function* checkForFinishedGameAsync() {
    yield takeEvery(PLACE_CELL_CHANGE, checkForFinishedGame);
}

export default function* () {
  yield [
    checkComputerTurnAsync(),
    checkForFinishedGameAsync()
  ]
}
