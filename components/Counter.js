import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

function Counter(props) {
  return (
    <View>
      <Text style={styles.text}>{props.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "#FF0E75",
  },
})
export default Counter;