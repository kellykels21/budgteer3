import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';

function CounterScreen() {
  const { navigate } = useNavigation()
  const mockData = require('../test/data/counter_screen_mock_data')

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <Lister
          data={mockData.data}></Lister>
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