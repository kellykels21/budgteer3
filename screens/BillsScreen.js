import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';
import Counter from '../components/Counter';


function BillsScreen() {
  const { navigate } = useNavigation()
  const mockData = require('../test/data/bills_screen_mock_data')

  return (
    <View style={styles.container}>
      <View style={[styles.pageTitleContainer, { flex: 1 }]}>
        <Text style={styles.pageTitleText}>Bills</Text>
      </View>

      <View style={{ zIndex: 1 }}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
          alignRight={true}
          tabHeight='10%'
        />
      </View>

      <View style={[{ flex: 2 }, styles.topSection]}>
        <Counter number={"$250"} />
      </View>

      <View style={{ flex: 3 }}>
        <Lister data={mockData.data} />
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
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: "center",
  },
  topSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8"
  },
  pageTitleText: {
    fontWeight: '700',
    fontSize: 36,
    color: 'black'
  },
  pageTitleContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
  }
});

export default BillsScreen