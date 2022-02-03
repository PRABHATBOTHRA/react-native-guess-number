import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!</Text>
      <Text>Number of Rounds:{props.roundNumber}</Text>
      <Text>Number was :{props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
