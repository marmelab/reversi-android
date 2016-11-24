import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getColor } from '../../reversi/cell/Cell';
import { playerPropType } from '../propTypes';

const styles = StyleSheet.create({
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

const PlayerBadge = ({ player, countCells, isCurrentPlayer = false }) => (
    <View style={[styles.player, (isCurrentPlayer ? styles.currentPlayer : {})]}>
        <View style={styles.playerScore}>
            <View style={bulletStyle(getColor(player.cellType))} />
            <Text style={{ fontSize: 30, marginLeft: 10 }}>{countCells}</Text>
        </View>
        <Text style={styles.playerName}>{player.name}</Text>
    </View>
);

PlayerBadge.propTypes = {
    player: playerPropType.isRequired,
    isCurrentPlayer: PropTypes.bool,
    countCells: PropTypes.number.isRequired,
};

export default PlayerBadge;
