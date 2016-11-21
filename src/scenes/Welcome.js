import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Subheader } from 'react-native-material-design';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#29bc7c',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Welcome = () => {
    return (
        <View style={styles.view}>
        <Subheader text="Normal Subheader" inset/>
          <Text>dsdssd</Text>
          <Button value="My Button" text="test" />
        </View>
    );
};

export default Welcome;
