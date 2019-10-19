import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function ProgressChart(props) {
  const fill = 600;
  return (
    <View style={{ zIndex: 1 }}>
      <AnimatedCircularProgress
        size={275}
        width={20}
        lineCap='round'
        fill={props.fill}
        rotation={0}
        tintColor="#FF0E75"
        arcSweepAngle={180}
        backgroundColor="#4B1CC6">
        {
          (fill) => (
            <Text style={[styles.text, { color: props.textColor }]}>${props.fill}</Text>
          )
        }
      </AnimatedCircularProgress>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontWeight: '700'
  },
})

export default ProgressChart