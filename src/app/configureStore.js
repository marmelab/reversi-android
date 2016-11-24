import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/Root';
import gameSaga from './saga/GameSaga';

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(RootReducer, applyMiddleware(sagaMiddleware, createLogger()));
    sagaMiddleware.run(gameSaga);
    return store;
}
