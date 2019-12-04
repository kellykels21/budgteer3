import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginButton = ({width, iconName, text}) => {
  return (
    <TouchableOpacity style={[styles.button, styles.horizontalContainer, {width: width || '100%'}]}>
      {
        iconName
        ? <View style={[styles.horizontalContainer, {justifyContent: 'center', alignItems: "center"}]}>
            <FontAwesome name={iconName} size={23} color={'hotpink'} />
            <Text style={styles.separatorText}>{' | '}</Text>
          </View>
        : null
      }
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%')
  },
  buttonText: {
    fontSize: 16,
    color: 'hotpink',
  },
  separatorText: {
    color: 'hotpink',
    fontSize: 23,
  },
});

export default LoginButton
