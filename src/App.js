import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import Navigation from './Navigation';
import RootReducer from './app/reducers/Root';

const store = createStore(RootReducer, applyMiddleware(createLogger()));

const App = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);

export default App;
