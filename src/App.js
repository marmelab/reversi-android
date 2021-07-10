import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Navigation from './Navigation';
import RootReducer from './app/reducers/Root';
import gameSaga from './app/saga/GameSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(gameSaga);

const App = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);

export default App;
