import React from 'react';
import { View, StyleSheet } from 'react-native'

import CategoryCard from './CategoryCard';

import Swiper from 'react-native-swiper'

function CategoryCardSwiper({ cards }) {

  createCards = () => {
    let cardStack = []

    cards.forEach(card => {
      cardStack.push(
        <View>
          <CategoryCard name={card.category} cap={card.cap} amountSpent={card.amountSpent} />
        </View>
      )
    });

    return cardStack
  }

  return (
    <Swiper style={styles.wrapper} showsPagination={false} loop={false} >
      {this.createCards()}
    </Swiper>
  )
}

const styles = StyleSheet.create({
})
export default CategoryCardSwiper