import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Modal, Text } from 'react-native'
import AmountCircleSlider from './AmountCircleSlider';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SliderModal(props) {
  return (
    <Modal
      visible={props.isModalVisible}
      style={styles.itemDetailModal}
      animationType={'slide'}
    >
      <View style={[styles.pageTitleContainer]}>
        <Text style={styles.pageTitleText}>{props.itemDetail.description}</Text>
      </View>

      <View style={styles.chartContainer}>
        <AmountCircleSlider textColor='black' fill={700} size={275} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Done"
          onPress={() => { props.setIsModalVisible(false) }}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('30%'),
  },
  pageTitleText: {
    fontWeight: '700',
    fontSize: 36,
    color: 'black'
  },
  pageTitleContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    top: hp('15%'),
  },
  buttonContainer: {
    top: hp('50%')
  }
})

export default SliderModal