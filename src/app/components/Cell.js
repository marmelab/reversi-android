import React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    cell: {
        padding: 5,
        alignItems: 'stretch',
        flex: -1,
    },
    disc: {
        flex: -1,
        borderRadius: 20,
        height: 40,
        width: 40,
        backgroundColor: '#079153',
    },
});

const Cell = () =>
    <View style={styles.cell}>
        <View style={styles.disc} />
    </View>
;

export default Cell;
