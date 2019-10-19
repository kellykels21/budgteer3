import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function ProgressChart() {
  const fill = 100;
  return (
    <View>
      <AnimatedCircularProgress
        size={275}
        width={20}
        lineCap='round'
        fill={fill}
        rotation={0}
        tintColor="#FF0E75"
        backgroundColor="#4B1CC6">
        {
          (fill) => (
            <Text style={styles.text}>${fill}</Text>
          )
        }
      </AnimatedCircularProgress>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "white",
  },
})

export default ProgressChart