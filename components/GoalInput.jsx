import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native"

const GoalInput = (props) => {
  console.log("props: ", props)
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType = "slide">
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Your courseee goals!"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.button}>
        <Button title="Cancel" onPress={props.onCancel} />
      </View>
    </View>
    
  </View>
  </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 24,
        padding: 16
      },
      textInput: {
        width: "100%",
        borderColor: "#cccccc",
        borderWidth: 1,
        padding: 8,
        marginBottom: 32
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       
      },
      button: {
        width: '30%',
        marginHorizontal: 20
      }
})