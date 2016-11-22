import React from 'react';
import { StyleSheet, View, Navigator } from 'react-native';
import { Button } from 'react-native-material-design';
import Board from '../components/Board';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#027B46',
    },
    boardContainer: {
        flex: 1,
    },
});

const Play = () => (
    <View style={styles.view}>
        <Button text="Hey" />
        <View style={styles.boardContainer}>
            <Board />
        </View>
    </View>
);

Play.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
};

export default Play;
