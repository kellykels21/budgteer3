import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text, Image } from 'react-native'
import CircularProgressSlider from "../components/CircularProgressSlider"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MAX_VALUE = 500;

function SliderModal(props) {
  const initialCountValue = 179;
  const [degreeCount, setDegreeCount] = useState(initialCountValue);
  const realCount = Math.floor(((degreeCount + 1) / 360) * MAX_VALUE);

  return (
    <Modal
      visible={props.isModalVisible}
      animationType={'slide'}
    >
      <View style={styles.itemDetailModal}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitleText}>{props.itemDetail.description}</Text>
        </View>
        <View style={styles.chartContainer}>
          <CircularProgressSlider

            value={initialCountValue} // initial degree value
            dialRadius={137.5} // radius of the circular
            dialWidth={15} // the width of the path
            btnRadius={20} // the radius of the cap.
            count={realCount}
            onValueChange={v => setDegreeCount(v)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { props.setIsModalVisible() }} >
            <Image
              style={{ width: 250, height: 70, borderRadius: 35 }}
              source={require('../assets/purple_button.png')}>
            </Image>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  itemDetailModal: {
    flex: 1,
    paddingTop: "25%",
  },
  pageTitleText: {
    fontWeight: '700',
    fontSize: 36,
    color: 'black'
  },
  textContainer: {
    alignItems: "center",
    top: "10%"
  },
  chartContainer: {
    alignItems: "center",
    top: "10%",
    paddingTop: "15%",
  },
  buttonContainer: {
    alignItems: "center",
    top: "30%"
  }
})

export default SliderModal