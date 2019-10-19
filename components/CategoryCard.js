import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'

import * as Progress from 'react-native-progress';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function CategoryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.categoryTitleContainer}>
        <Text style={styles.categoryTitle}>Shopping</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <Progress.Bar
          progress={0.3}
          width={325}
          height={hp('2%')}
          borderRadius={15}
        />
      </View>

      <View style={styles.numberDisplayContainer}>
        <Text style={styles.numberDisplay}>125/250</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: hp('25%'),
    marginRight: 20,
    marginLeft: 20,
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 20,
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
    fontWeight: 700,
    color: 'white'
  },
  categoryTitleContainer: {
    marginBottom: 12
  },
  progressBarContainer: {
    marginBottom: 10
  },
  numberDisplayContainer: {
    alignItems: 'flex-end',
    marginRight: 15
  },
  numberDisplay: {
    fontSize: 24,
    fontWeight: 700,
    color: 'white'
  }
})

export default CategoryCard