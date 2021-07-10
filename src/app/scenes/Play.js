import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Navigator, Button } from 'react-native';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { placeCellChange, checkComputerTurn } from '../actions/GameActions';
import { getCurrentAvailableCellChanges, getCurrentPlayer, getWinner } from '../../reversi/game/Game';
import { getCellTypeDistribution } from '../../reversi/board/Board';
import Overlay from '../components/Overlay';
import PlayerBadge from '../components/PlayerBadge';
import { gamePropType } from '../../propTypes';

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

class Play extends Component {

    handleGoHomeClick = () => {
        this.props.navigator.replace({ id: 'Welcome' });
    }

    handleCellClick = (cell) => {
        if (getCurrentPlayer(this.props.game).isHuman) {
            try {
                this.props.placeCellChange(cell);
            } catch (e) {
                alert(e);
            }
            this.props.checkComputerTurn();
        }
    }

    render() {
        const game = this.props.game;

        const cellProposals = getCurrentAvailableCellChanges(game);
        const cellDistribution = getCellTypeDistribution(game.board);

        return (
            <View style={styles.view}>
                <View style={styles.header}>
                    <Button onPress={this.handleGoHomeClick} title="Back to home" color="#333" />
                </View>
                <View style={styles.boardContainer}>
                    <Board onCellClick={this.handleCellClick} board={game.board} cellProposals={cellProposals} />
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
                {game.isFinished && <Overlay winner={getWinner(game)} onClickButton={this.handleGoHomeClick} />}
            </View>
        );
    }
}

Play.propTypes = {
    navigator: PropTypes.instanceOf(Navigator),
    placeCellChange: PropTypes.func.isRequired,
    checkComputerTurn: PropTypes.func.isRequired,
    game: gamePropType,
};

export default connect(
    state => ({ game: state.Game }),
    { placeCellChange, checkComputerTurn },
)(Play);
