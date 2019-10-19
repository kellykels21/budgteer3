import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressChart from '../components/ProgressChart';

function CounterScreen() {
  const { navigate } = useNavigation()
  const [transactionTotal, setTransactionTotal] = useState(0)
  const mockData = require('../test/data/counter_screen_mock_data')

  useEffect(() => {
    getTransactionListTotal(mockData.data, setTransactionTotal)
  })

  return (
    <View style={styles.container}>
      <View style={[styles.pageTitleContainer, { flex: 1 }]}>
        <Text style={styles.pageTitleText}>Transactions</Text>
      </View>

      <View style={{ zIndex: 1 }}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
          tabHeight='8%'
        />
      </View>

      <View style={{ flex: 2 }}>
        <View style={styles.chartContainer}>
          <ProgressChart textColor="black" fill={transactionTotal} size={235} />
        </View>
      </View>

      <View style={{ flex: 3 }}>
        <Lister
          data={mockData.data}></Lister>
      </View>
    </View>
  )
}

CounterScreen.navigationOptions = {
  header: null,
}

function getTransactionListTotal(transactionList, setTransactionTotal) {
  let sum = 0

  transactionList.forEach((transaction) => {
    sum += parseInt(transaction.amount)
  })

  setTransactionTotal(sum)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // top: hp(20)
  },
  pageTitleText: {
    fontWeight: '700',
    fontSize: 36,
    color: 'black'
  },
  pageTitleContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50
  }
});

export default CounterScreen