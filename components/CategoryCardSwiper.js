import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'

import CategoryCard from './CategoryCard';

import Swiper from 'react-native-swiper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function CategoryCardSwiper() {
  return (
    <Swiper style={styles.wrapper} showsPagination={false} loop={false} >
      <View style={styles.slide1}>
        <CategoryCard />
      </View>
      <View >
        <CategoryCard />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
})
export default CategoryCardSwiper