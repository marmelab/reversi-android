import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { create as createBoard } from '../../reversi/board/Board';

const styles = StyleSheet.create({
    table: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#027B46',
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

const board = createBoard(8, 8);

export default () => (
    <View style={styles.table}>
        {board.cells.map((row, y) =>
            <View style={styles.row} key={`row-${y}`}>
                {row.map((cell, x) =>
                    <Cell key={`cell-${x}-${y}`} />,
                )}
            </View>,
        )}
    </View>
);
