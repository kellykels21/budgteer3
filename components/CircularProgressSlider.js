import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CircleSlider from "../components/CircleSlider";

const CircularProgressSlider = props => {
  return (
    <View style={[styles.chartContainer, { top: hp(props.top) }]}>
      <CircleSlider {...props} />
      <View style={styles.countTextWrapper}>
        <Text style={styles.countText}>{`$${props.count}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  countTextWrapper: {
    position: "absolute"
  },
  countText: {
    fontSize: 60,
    fontWeight: "700",
    color: "white"
  }
});

export default CircularProgressSlider;
