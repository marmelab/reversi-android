import React from 'react';
import { StyleSheet, View, Navigator, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { startNewGame } from '../actions/GameActions';

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
        marginTop: 16,
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
    button: {
        marginBottom: 10,
    },
});

const Welcome = ({ navigator, startNewGameAgainst }) => {
    const startPlaying = (playAgainstComputer) => {
        return () => {
            startNewGameAgainst(playAgainstComputer);
            navigator.replace({ id: 'Play' });
        };
    };

    return (
        <View style={styles.view}>
            <Image style={styles.backgroundImage} source={require('../../assets/background.png')}>
                <View style={styles.header}>
                    <Text style={styles.title}>Othello</Text>
                </View>
                <View style={styles.content}>
                    <Button title="Play against computer" onPress={startPlaying(true)} color="#333" />
                    <Button title="Play against another player" onPress={startPlaying(false)} color="#333" />
                    <Button title="View my game history" onPress={() => {}} color="#333" />
                </View>
            </Image>
        </View>
    );
};

Welcome.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
    startNewGameAgainst: React.PropTypes.func.isRequired,
};

export default connect(
    () => ({}),
    dispatch => ({
        startNewGameAgainst: againstComputer => dispatch(startNewGame(againstComputer)),
    }),
)(Welcome);
