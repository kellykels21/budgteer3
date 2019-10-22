import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Modal, TouchableHighlight } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';
import AmountCircleSlider from './AmountCircleSlider';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SliderModal(props) {
  return (
    <Modal
      visible={props.isModalVisible}
      style={styles.itemDetailModal}
      animationType={'slide'}
    >
      <View style={styles.chartContainer}>
        <AmountCircleSlider textColor='black' fill={700} size={275} />
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
})

export default SliderModal