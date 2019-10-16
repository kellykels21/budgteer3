import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function TransactionsScreenNavigationTab(props) {
  return (
    <View style={{ alignItems: 'flex-end', top: hp('50%') }}>
      <TouchableOpacity onPress={() => { props.navigateTo() }} >
        <Image
          style={{ width: wp('10%'), height: hp('12%') }}
          source={require('../assets/trans_right_button.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default TransactionsScreenNavigationTab