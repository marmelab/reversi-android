import { takeEvery } from 'redux-saga';
import { PLACE_CELL_CHANGE } from '../actions/ActionTypes';

export function* watchPlaceCellAsync() {
    console.log('sagaz');
    yield takeEvery(PLACE_CELL_CHANGE, function* () {
        console.log('ok');
        yield 'ok';
    });
}
