import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function HomeScreenNavigationTab(props) {
  return (
    <View style={{
      left: props.alignRight ? null : -1,
      right: props.alignRight ? -1 : null,
      top: hp('25%'),
      position: 'absolute'
    }}>
      <TouchableOpacity onPress={() => { props.navigateTo() }} >
        <Image
          style={{ width: wp('10%'), height: hp('12%') }}
          source={props.alignRight ? require('../assets/home_tab_right.png') : require('../assets/home_tab_left.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreenNavigationTab