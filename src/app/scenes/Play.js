import React from 'react';
import { StyleSheet, View, Navigator } from 'react-native';
import { Button } from 'react-native-material-design';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { placeCellChange } from '../actions/GameActions';
import { getCurrentAvailableCellChanges, getCurrentPlayer, getWinner } from '../../reversi/game/Game';
import { getCellTypeDistribution } from '../../reversi/board/Board';
import Overlay from '../components/Overlay';
import PlayerBadge from '../components/PlayerBadge';

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
                {game.players.map(player =>
                    <PlayerBadge
                        key={`player_${player.cellType}`}
                        player={player}
                        isCurrentPlayer={player === getCurrentPlayer(game)}
                        countCells={cellDistribution[player.cellType]}
                    />,
                )}
            </View>
            {game.isFinished && <Overlay winner={getWinner(game)} />}
        </View>
    );
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
