import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const hello = "hello man"
    return <View>
        <Text style={styles.textStyle}>This is th components screen</Text>
        <Text style={styles.textStyle2}>{hello}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    textStyle2: {
        fontSize: 30
    }
})

export default ComponentsScreen