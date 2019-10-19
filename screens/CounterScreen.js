import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';

import Counter from '../components/Counter';

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

      <View style={{ zIndex: 1, backgroundColor: "#F8F8F8" }}>
        <HomeScreenNavigationTab
          navigateTo={() => { navigate('Home') }}
          tabHeight='8%'
        />
      </View>


      <View style={[{ flex: 2 }, styles.chartContainer]}>
        <Counter number={`$${transactionTotal}`} />
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
    backgroundColor: "#F8F8F8",
  },
  pageTitleText: {
    fontWeight: '700',
    fontSize: 36,
    color: 'black'
  },
  pageTitleContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
    backgroundColor: "#F8F8F8"
  }
});

export default CounterScreen