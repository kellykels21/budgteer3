import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function HomeScreenNavigationTab(props) {
  return (
    <View style={{ alignItems: 'flex-start', top: hp('50%') }}>
      <TouchableOpacity onPress={() => { props.navigateTo() }} >
        <Image
          style={{ width: wp('10%'), height: hp('12%') }}
          source={require('../assets/home_tab.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreenNavigationTab