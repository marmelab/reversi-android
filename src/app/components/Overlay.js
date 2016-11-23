import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
});

const Overlay = ({ winner, onClickButton }) => (
    <TouchableWithoutFeedback onPress={onClickButton}>
        <View style={styles.overlay}>
            <Text style={{ color: '#FFFFFF', fontSize: 50 }}>GAME OVER</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 30 }}>{ !winner ? 'It\'s a draw !' : `${winner.name} wins !`}</Text>
        </View>
    </TouchableWithoutFeedback>
);

Overlay.propTypes = {
    onClickButton: React.PropTypes.func,
};

export default Overlay;
