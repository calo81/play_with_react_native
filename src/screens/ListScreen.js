import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {key: '1', name: 'John'},
        {key: '2', name: 'Luis'}
    ]
    return (
        <FlatList
            data={friends}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}/>
    )
}

const styles = StyleSheet.create({
    listScreen: {
        fontSize: 30
    }
})

export default ListScreen