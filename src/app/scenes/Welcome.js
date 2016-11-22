import React from 'react';
import { StyleSheet, View, Navigator, Text, Image } from 'react-native';
import { Button } from 'react-native-material-design';

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        color: '#FFFFFF',
        textShadowColor: '#000000',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 5,
    },
    content: {
        flex: 2,
    },
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Welcome = ({ navigator }) => {
    const startPlayingAgainstComputer = () => {
        navigator.replace({ id: 'Play' });
    };

    return (
        <View style={styles.view}>
            <Image style={styles.backgroundImage} source={require('../../assets/background.png')}>
                <View style={styles.header}>
                    <Text style={styles.title}>Othello</Text>
                </View>
                <View style={styles.content}>
                    <Button text="Play against computer" onPress={startPlayingAgainstComputer} raised />
                    <Button text="Play against another player" raised />
                    <Button text="View my game history" raised theme="dark"/>
                </View>
            </Image>
        </View>
    );
};

Welcome.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
};

export default Welcome;
