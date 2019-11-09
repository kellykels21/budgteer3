import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native'

import CategoryCard from './CategoryCard';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function CategoryCardSwiper({ cards }) {

  createCards = (data) => {
    const card = data.item
    return (
      <View>
        <CategoryCard name={card.category} cap={card.cap} amountSpent={card.amountSpent} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        pagingEnabled={true}
        horizontal={true}
        renderItem={card => this.createCards(card)}
        keyExtractor={card => card._id}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default CategoryCardSwiper