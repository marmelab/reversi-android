import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';
import { gamePropType } from '../propTypes';
import PlayerBadge from './PlayerBadge';
import { getCellTypeDistribution } from '../../reversi/board/Board';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#FFFFFF',
    },
    players: {
        flex: 3,
        flexDirection: 'row',
        borderLeftWidth: 3,
        borderColor: '#FFFFFF',
    },
    date: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const HistoryItem = ({ game }) => {

    const cellDistribution = getCellTypeDistribution(game.board);

    const date = moment(game.date);

    return (
        <View style={styles.view}>
            <View style={styles.date}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{date.format('Do')}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{date.format('MMM')}</Text>
            </View>
            <View style={styles.players}>
                {game.players.map((player) =>
                    <PlayerBadge
                        key={`player_${player.cellType}`}
                        player={player}
                        isCurrentPlayer={false}
                        countCells={cellDistribution[player.cellType]}
                    />,
                )}
            </View>
        </View>
    );

};

HistoryItem.propTypes = {
    game: gamePropType.isRequired,
};

export default HistoryItem;
