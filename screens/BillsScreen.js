import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';

const mockData = [
  {
    _id: 1,
    vendor: 'Dominion',
    description: 'Electricity',
    amount: '100',
    paymentDate: Date.now(),
    type: 'Bill'
  },
  {
    _id: 2,
    vendor: 'Capital One',
    description: 'Mortgage Loan',
    amount: '1050',
    paymentDate: Date.now(),
    type: 'Bill'
  },
  {
    _id: 3,
    vendor: 'TowneBanke',
    description: 'Car Note',
    amount: '560',
    paymentDate: Date.now(),
    type: 'Bill'
  },
]

function BillsScreen() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
          alignRight={true}
        />
      </View>

      <View style={{ flex: 2 }}>
        <Lister
          data={mockData}></Lister>
      </View>
    </View>
  )
}

BillsScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});

export default BillsScreen