import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { create as createCell } from '../../reversi/cell/Cell';

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

const Board = ({ board, onCellClick, cellProposals }) => {
    const resolveCell = (cell) => {
        const proposalIndex = cellProposals.findIndex(c => c.x === cell.x && c.y === cell.y);
        if (proposalIndex !== -1) {
            const proposalCell = cellProposals[proposalIndex];
            return (<Cell isProposal onClick={() => onCellClick(proposalCell)} cell={proposalCell} key={`cell-${cell.x}-${cell.y}`} />);
        }
        return (<Cell cell={cell} key={`cell-${cell.x}-${cell.y}`} />);
    };

    return (
        <View style={styles.table}>
            {board.cells.map((row, y) =>
                <View style={styles.row} key={`row-${y}`}>
                    {row.map((cellType, x) => resolveCell(createCell(x, y, cellType)))}
                </View>,
            )}
        </View>
    );
};

Board.propTypes = {
    board: React.PropTypes.shape({
        cells: React.PropTypes.array.isRequired,
    }),
    cellProposals: React.PropTypes.arrayOf(
        React.PropTypes.object,
    ),
    onCellClick: React.PropTypes.func.isRequired,
};

export default Board;
