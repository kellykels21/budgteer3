import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { LinearGradient } from 'expo-linear-gradient';

import TransactionsScreenNavigationTab from '../components/TransactionsScreenNavigationTab';
import BillsScreenNavigationTab from '../components/BillsScreenNavigationTab';
import ProgressChart from '../components/ProgressChart';
import CategoryCardSwiper from '../components/CategoryCardSwiper';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function HomeScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6e00ff', '#4500a1']}
        style={{ flex: 1, borderRadius: 5 }}>

        <View style={{ zIndex: 1 }}>
          <TransactionsScreenNavigationTab
            navigateTo={() => { navigate('Counter') }}
          />
        </View>

        <View style={{ zIndex: 1 }}>
          <BillsScreenNavigationTab
            navigateTo={() => { navigate('Bills') }}
          />
        </View>

        <View style={styles.chartContainer}>
          <ProgressChart textColor='white' fill={700} size={275} />
        </View>

        <CategoryCardSwiper style={styles.categoryCardSwiper} />
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
    top: hp('15%'),
  },
  cardContainer: {
    justifyContent: 'center',
    backgroundColor: 'red',
    top: hp('50%'),
    zIndex: 0
  },
  categoryCardSwiper: {
    zIndex: 0
  }
});

export default HomeScreen