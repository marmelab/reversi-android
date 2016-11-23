import React from 'react';

import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

import { getColor, TYPE_EMPTY } from '../../reversi/cell/Cell';

const styles = StyleSheet.create({
    cell: {
        padding: 5,
        alignItems: 'stretch',
        flex: -1,
    },
});

const discStyle = (color, inner) => ({
    flex: -1,
    borderRadius: 18,
    height: inner ? 15 : 36,
    width: inner ? 15 : 36,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
});

const Cell = ({ cell, onClick, isProposal = false }) =>
    <View style={styles.cell}>
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={discStyle((isProposal ? getColor(TYPE_EMPTY) : getColor(cell.type)), false)}>
                { isProposal ? <View style={discStyle(getColor(cell.type), true)} /> : <View /> }
            </View>
        </TouchableWithoutFeedback>
    </View>
;

Cell.propTypes = {
    cell: React.PropTypes.shape({
        type: React.PropTypes.number.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
    }),
    onClick: React.PropTypes.func,
    isProposal: React.PropTypes.bool,
};

export default Cell;
