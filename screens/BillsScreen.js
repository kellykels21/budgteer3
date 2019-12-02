import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks';

import HomeScreenNavigationTab from '../components/HomeScreenNavigationTab';
import Lister from '../components/Lister';
import Counter from '../components/Counter';
import SliderModal from '../screens/SliderModal';


function BillsScreen(props) {
  const { navigate } = useNavigation()
  const mockData = props.bills
  const [billTotal, setBillTotal] = useState(0)
  const [itemDetail, setItemDetail] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    getBillListTotal(mockData.data, setBillTotal)
  })

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
        <Counter number={`$${billTotal}`} />
      </View>

      <View style={{ flex: 3, padding: 15 }}>
        <Lister
          data={mockData.data}
          _onPressItem={(item) => { setItemDetail(item); setIsModalVisible(true) }} />
      </View>

      <View>
        <SliderModal isModalVisible={isModalVisible} setIsModalVisible={() => { setIsModalVisible(false) }} itemDetail={itemDetail} />
      </View>
    </View>
  )
}

BillsScreen.navigationOptions = {
  header: null,
}



function getBillListTotal(billList, setBillTotal) {
  let sum = 0

  billList.forEach((bill) => {
    sum += parseInt(bill.amount)
  })

  setBillTotal(sum)
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
    backgroundColor: "#F8F8F8"
  },
  itemDetailModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
  const user = state.get('user');
	return { bills: user.bills };
}

export default connect(mapStateToProps, mapDispatchToProps)(BillsScreen);