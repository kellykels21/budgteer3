import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';

function CounterScreen() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <HomeScreenNavigationTab
        navigateTo={() => { navigate('Home') }}
      />
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