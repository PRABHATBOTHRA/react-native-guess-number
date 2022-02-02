import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";
const StartGameScreen = () => {
  const [enetredValue, setEnetredValue] = useState();
  const [confirm, setConfirmValue] = useState(false);
  const [numberValue, setNumberValue] = useState();

  const numberInputHandler = (inputText) => {
    setEnetredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnetredValue("");
    setConfirmValue(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enetredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99 ",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmValue(true);
    setNumberValue(chosenNumber);
    setEnetredValue("");
    Keyboard.dismiss();
  };

  let confimedOutput;

  if (confirm) {
    confimedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{numberValue}</NumberContainer>
        <Button title="START GAME"></Button>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text> Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a Number</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            autoCorrected={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enetredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confimedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 10,
    alignItems:"center"
  },
});

export default StartGameScreen;
