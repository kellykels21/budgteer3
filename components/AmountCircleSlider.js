import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function AmountCircleSlider(props) {
  return (
    <View>
      <AnimatedCircularProgress
        size={props.size}
        width={20}
        lineCap='round'
        fill={props.fill}
        rotation={0}
        tintColor="#FF0E75"
        arcSweepAngle={180}
        backgroundColor="#4B1CC6"
      >
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
export default AmountCircleSlider