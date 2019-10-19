import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { LinearGradient } from 'expo-linear-gradient';

import TransactionsScreenNavigationTab from '../components/TransactionsScreenNavigationTab';
import BillsScreenNavigationTab from '../components/BillsScreenNavigationTab';
import ProgressChart from '../components/ProgressChart';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function HomeScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6e00ff', '#4500a1']}
        style={{ flex: 1, borderRadius: 5 }}>

        <TransactionsScreenNavigationTab
          navigateTo={() => { navigate('Counter') }}
        />

        <BillsScreenNavigationTab
          navigateTo={() => { navigate('Bills') }}
        />

        <View style={styles.chartContainer}>
          <ProgressChart textColor='white' fill={700} size={275} />
        </View>
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
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: hp(20)
  }
});

export default HomeScreen