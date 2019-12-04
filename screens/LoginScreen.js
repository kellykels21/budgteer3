import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import LoginButton from '../components/LoginButton'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <LinearGradient
        colors={['#fd1d1d', '#833ab4']}
        style={styles.container}>
        <LoginButton iconName={'facebook'} text={'Sign in with Facebook'} />
        <LoginButton iconName={'twitter'} text={'Sign in with Twitter'} />
        <LoginButton text={'Sign Up'} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: wp('10%'),
    backgroundColor: 'grey',
  }
})
