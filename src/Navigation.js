import React from 'react';
import { Navigator, View } from 'react-native';
import Welcome from './app/scenes/Welcome';
import Play from './app/scenes/Play';
import GameHistory from './app/scenes/GameHistory';

export default () => {
    const renderNavigationScene = (route, navigator) => {
        switch (route.id) {
        case 'Welcome':
            return <Welcome navigator={navigator} title="Welcome" />;
        case 'Play':
            return <Play navigator={navigator} title="Play" />;
        case 'GameHistory':
            return <GameHistory navigator={navigator} title="GameHistory" />;
        default:
            return <View />;
        }
    };

    return (
        <Navigator
            initialRoute={{ id: 'Welcome' }}
            renderScene={renderNavigationScene}
        />
    );
};
