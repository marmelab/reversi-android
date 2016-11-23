import React from 'react';
import { StyleSheet, View, Navigator, Text } from 'react-native';
import { Button } from 'react-native-material-design';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { placeCellChange } from '../actions/GameActions';
import { getCurrentAvailableCellChanges, getCurrentPlayer } from '../../reversi/game/Game';
import { getColor } from '../../reversi/cell/Cell';
import { getCellTypeDistribution } from '../../reversi/board/Board';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#027B46',
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    boardContainer: {
        flex: 4,
    },
    playersContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    player: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        marginRight: 5,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerScore: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerName: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 8,
    },
    currentPlayer: {
        borderWidth: 2,
        borderColor: '#000',
    },
});

const bulletStyle = color => ({
    flex: -1,
    borderRadius: 8,
    height: 16,
    width: 16,
    backgroundColor: color,
});

const Play = ({ game, onCellClick, navigator }) => {
    const goHome = () => {
        navigator.replace({ id: 'Welcome' });
    };

    const cellProposals = getCurrentAvailableCellChanges(game);
    const cellDistribution = getCellTypeDistribution(game.board);

    return (
        <View style={styles.view}>
            <View style={styles.header}>
                <Button onPress={goHome} text="Return to home" raised theme="light" />
            </View>
            <View style={styles.boardContainer}>
                <Board onCellClick={onCellClick} board={game.board} cellProposals={cellProposals} />
            </View>
            <View style={styles.playersContainer}>
                {game.players.map((player, i) =>
                    <View key={`player_${i}`} style={[styles.player, (player === getCurrentPlayer(game) ? styles.currentPlayer : {})]}>
                        <View style={styles.playerScore}>
                            <View style={bulletStyle(getColor(player.cellType))}></View>
                            <Text style={{fontSize: 30, marginLeft: 10}}>{cellDistribution[player.cellType]}</Text>
                        </View>
                        <Text style={styles.playerName}>{player.name}</Text>
                    </View>
                )}
            </View>
        </View>
    )
};

Play.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
    onCellClick: React.PropTypes.func.isRequired,
    game: React.PropTypes.shape({
        board: React.PropTypes.object,
    }),
};

const mapStateToProps = state => ({ game: state.Game });

const mapDispatchToProps = dispatch => (
    {
        onCellClick: (cell) => {
            dispatch(placeCellChange(cell));
        },
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Play);
