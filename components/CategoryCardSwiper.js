import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native'

import CategoryCard from './CategoryCard';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

function CategoryCardSwiper(props) {

  createCards = (data) => {
    const card = data.item
    return (
      <View style={styles.card}>
        <CategoryCard name={card.category} cap={card.cap} amountSpent={card.amountSpent} onClick={item => props.setupModalItem(item)} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.cards}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={card => this.createCards(card)}
        keyExtractor={card => card._id}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default CategoryCardSwiper