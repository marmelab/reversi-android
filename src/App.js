import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import Navigation from './Navigation';
import RootReducer from './app/reducers/Root';
import rootSaga from './app/sagas/Root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(rootSaga);

const App = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);

export default App;
