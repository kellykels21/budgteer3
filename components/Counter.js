import React from 'react';
import { View, StyleSheet } from 'react-native'
import Ticker from "react-native-ticker";

function Counter(props) {
  return (
    <View>
      <Ticker text={props.number} textStyle={styles.text} rotateTime={250} />
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