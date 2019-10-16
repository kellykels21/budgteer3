import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { LinearGradient } from 'expo-linear-gradient';

import TransactionsScreenNavigationTab from '../components/TransactionsScreenNavigationTab';

function HomeScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6e00ff', '#020024']}
        style={{ flex: 1, borderRadius: 5 }}>
        <TransactionsScreenNavigationTab
          navigateTo={() => { navigate('Counter') }}
          alignRight='true'
        />
      </LinearGradient>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default HomeScreen