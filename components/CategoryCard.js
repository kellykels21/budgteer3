import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import * as Progress from 'react-native-progress';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

function CategoryCard({ name, cap, amountSpent }) {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fd1d1d', '#833ab4']}
        style={{ flex: 1, borderRadius: 5, padding: 20, }}>
        <View style={styles.categoryTitleContainer}>
          <Text style={styles.categoryTitle}>{name}</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={getPercentage(amountSpent, cap)}
            width={wp('75%')}
            height={hp('2%')}
            borderRadius={15}
          />
        </View>

        <View style={styles.numberDisplayContainer}>
          <Text style={styles.numberDisplay}>${amountSpent}/{cap}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

function getPercentage(amountSpent, cap) {
  return amountSpent / cap
}

const styles = StyleSheet.create({
  container: {
    height: hp('27%'),
    width: wp('100%'),
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.16,
    elevation: 20,
  },
  categoryTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: 'white'
  },
  categoryTitleContainer: {
    marginBottom: 12
  },
  progressBarContainer: {
    marginBottom: 10,
  },
  numberDisplayContainer: {
    alignItems: 'flex-end',
    marginRight: 20
  },
  numberDisplay: {
    fontSize: 24,
    fontWeight: "700",
    color: 'white'
  }
})

export default CategoryCard