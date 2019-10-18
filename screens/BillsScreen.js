import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';

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
        <Lister></Lister>
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