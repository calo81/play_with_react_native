import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
      <View>
      <Text style={styles.text}>Hello h</Text>
        <Button title="Go to Components" onPress={() => props.navigation.navigate("Components")}/>
        <TouchableOpacity  onPress={() => props.navigation.navigate("ListScreen")}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

