import React, { PropTypes } from 'react';

import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

import { cellPropType } from '../propTypes';
import { getColor, TYPE_EMPTY } from '../../reversi/cell/Cell';
import Appear from './Appear';

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
                { isProposal ? <Appear><View style={discStyle(getColor(cell.type), true)} /></Appear> : <View /> }
            </View>
        </TouchableWithoutFeedback>
    </View>
;

Cell.propTypes = {
    cell: cellPropType,
    onClick: PropTypes.func,
    isProposal: PropTypes.bool,
};

export default Cell;
