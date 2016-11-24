import React, { PropTypes, Component } from 'react';
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

class Welcome extends Component {

    startPlaying = playAgainstComputer => (
        () => {
            this.props.startNewGameAgainst(playAgainstComputer);
            this.props.navigator.replace({ id: 'Play' });
        }
    )

    goToGameHistory = () => {
        this.props.navigator.replace({ id: 'GameHistory' });
    }

    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.backgroundImage} source={require('../../assets/background.png')}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Othello</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={{marginBottom: 30}}>
                            <Button title="Play against computer" onPress={this.startPlaying(true)} color="#333" />
                        </View>
                        <View style={{marginBottom: 30}}>
                            <Button title="Play against another player" onPress={this.startPlaying(false)} color="#333" />
                        </View>
                        <View style={{marginBottom: 30}}>
                            <Button title="View my game history" onPress={this.goToGameHistory} color="#333" />
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

Welcome.propTypes = {
    navigator: PropTypes.instanceOf(Navigator),
    startNewGameAgainst: PropTypes.func.isRequired,
};

export default connect(
    () => ({}),
    dispatch => ({ startNewGameAgainst: againstComputer => dispatch(startNewGame(againstComputer)) }),
)(Welcome);
