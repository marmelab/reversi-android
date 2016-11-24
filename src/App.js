import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import configureStore from './app/configureStore';

const App = () => (
    <Provider store={configureStore()}>
        <Navigation />
    </Provider>
);

export default App;
