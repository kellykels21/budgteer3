import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';

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

function CounterScreen() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <Lister
          data={mockData}></Lister>
      </View>
    </View>
  )
}

CounterScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});

export default CounterScreen