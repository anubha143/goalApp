import { Button, StyleSheet, TextInput, View } from "react-native"

const GoalInput = ({goalInputHandler, addGoalHandler}) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Your course goals!"
      onChangeText={goalInputHandler}
    />
    <Button title="Add Goals" onPress={addGoalHandler} />
  </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 24,
      },
      textInput: {
        width: "70%",
        borderColor: "#cccccc",
        borderWidth: 1,
        marginRight: 8,
        padding: 8,
      },
})