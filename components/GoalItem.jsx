import { StyleSheet, Text, View, Pressable } from "react-native"

const GoalItem = (props) => {
    console.log("printing props id", props.onDeleteItem)
  return (
   
    <View style={styles.goalItem}>
       <Pressable android_ripple={{color: "#210644"}} onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
        {/* this style in the pressable is for ios device */}
         <Text style={styles.goalText}>{props.text}</Text>
         </Pressable>
    </View>
   
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
       borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: "#fff",
        padding: 8,
      },
})