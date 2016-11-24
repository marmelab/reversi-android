import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Navigator, Text, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { startNewGame } from '../actions/GameActions';
import HistoryItem from '../components/HistoryItem';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#027B46',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        flex: 4,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 3,
        borderColor: '#FFFFFF'
    },
    scroll: {
        flex: 1,
    },
});

class GameHistory extends Component {

    handleGoHomeClick = () => {
        this.props.navigator.replace({ id: 'Welcome' });
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.header}>
                    <Button onPress={this.handleGoHomeClick} title="Back to home" color="#333" />
                </View>
                <View style={styles.content}>
                    <ScrollView style={styles.scroll}>
                        {this.props.games.map((game, i) =>
                            <HistoryItem key={i} game={game} />
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

GameHistory.propTypes = {
    navigator: PropTypes.instanceOf(Navigator),
};

export default connect(
    state => ({ games: state.GameHistory })
)(GameHistory);
