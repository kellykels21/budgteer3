import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function BillsScreenNavigationTab(props) {
  return (
    <View style={{ top: hp('50%'), left: 0, position: 'absolute' }}>
      <TouchableOpacity onPress={() => { props.navigateTo() }} >
        <Image
          style={{ width: wp('10%'), height: hp('12%') }}
          source={require('../assets/trans_left_button.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default BillsScreenNavigationTab