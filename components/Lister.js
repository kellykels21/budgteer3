import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'
import Swipeout from 'react-native-swipeout';

const swipeoutBtns = [
  {
    text: 'Delete',
    backgroundColor: '#ff3333',
    onPress: () => { } // NEED TO IMPLEMENT 
  }
]

function deleteItem(item) {
  console.log(item)
}
function Lister(props) {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props._onPressItem(item)}>
            <Swipeout
              right={swipeoutBtns}
              backgroundColor='transparent'>
              <View style={styles.listItem}>
                <View style={styles.listLeft}>
                  <Text style={styles.leftItem}>{item.vendor}</Text>
                  <Text style={styles.leftItem}>{item.description}</Text>
                </View>

                <View style={styles.listRight}>
                  <Text style={styles.rightItem}>${item.amount}</Text>
                  <Text style={styles.rightItem}>
                    {new Date(item.paymentDate).toDateString()}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#dedede',
                  borderBottomWidth: 1,
                  width: "100%",
                  alignItems: "center",
                }}
              />
            </Swipeout>
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    marginTop: 2,
  },
  leftItem: {
    padding: 10,
    backgroundColor: "transparent",
    fontSize: 18
  },
  listLeft: {
    flex: 2
  },
  rightItem: {
    padding: 10,
    backgroundColor: "transparent",
    fontSize: 18,
    textAlign: "right"
  },
  listRight: {
    flex: 2
  },
})

export default Lister