import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text, Image } from 'react-native'
import AmountCircleSlider from './AmountCircleSlider';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
        <AmountCircleSlider textColor='black' fill={700} size={300} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { props.setIsModalVisible() }} >
          <Image
            style={{ width: wp('80%'), height: hp('8%'), borderRadius: 35 }}
            source={require('../assets/purple_button.png')}>
          </Image>
        </TouchableOpacity>
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
    alignItems: "center",
    top: hp('50%')
  }
})

export default SliderModal