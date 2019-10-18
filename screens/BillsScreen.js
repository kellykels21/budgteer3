import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';
import Counter from '../components/Counter';


function BillsScreen() {
  const { navigate } = useNavigation()
  const mockData = require('../test/data/bills_screen_mock_data')

  return (
    <View style={styles.container}>
      <View style={[{ flex: 3 }, styles.topSection]}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
          alignRight={true}
        />
        <Counter number={"$250"} />
      </View>
      <View style={{ flex: 2 }}>
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
  }
});

export default BillsScreen