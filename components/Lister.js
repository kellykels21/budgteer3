import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'

const mockData = [
  {
    _id: 1,
    vendor: 'Target',
    description: 'School Stuff',
    amount: '50',
    paymentDate: Date.now(),
    type: 'Shopping'
  },
  {
    _id: 2,
    vendor: 'Walmart',
    description: 'Groceries',
    amount: '105',
    paymentDate: Date.now(),
    type: 'Groceries'
  },
  {
    _id: 3,
    vendor: 'Uber',
    description: 'Bar Hopping',
    amount: '15',
    paymentDate: Date.now(),
    type: 'Entertainment'
  },
]
function Lister(props) {
  return (
    <View>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this._onPressItem(item)}>
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
    marginTop: 2
  },
  leftItem: {
    padding: 10,
    backgroundColor: "yellow",
    fontSize: 18
  },
  listLeft: {
    flex: 2
  },
  rightItem: {
    padding: 10,
    backgroundColor: "yellow",
    fontSize: 18,
    textAlign: "right"
  },
  listRight: {
    flex: 2
  },
})

export default Lister