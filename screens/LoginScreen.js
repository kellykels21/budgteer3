import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import LoginButton from '../components/LoginButton';
import SliderModal from '../screens/SliderModal';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  setIsModalVisible = (value) => {
    this.setState({
      isModalVisible: value,
    })
  }

  render() {
    const {isModalVisible} = this.state;
    const itemDetail = {
      description: 'Please provide your annual salary',
    }

    return (
      <LinearGradient
        colors={['#fd1d1d', '#833ab4']}
        style={styles.container}>
        <LoginButton iconName={'facebook'} text={'Sign in with Facebook'} onPress={() => this.setIsModalVisible(true)} />
        <LoginButton iconName={'twitter'} text={'Sign in with Twitter'} onPress={() => this.setIsModalVisible(true)} />
        <LoginButton text={'Sign Up'} />

        <View>
          <SliderModal isModalVisible={isModalVisible} setIsModalVisible={() => this.setIsModalVisible(false)} itemDetail={itemDetail} />
        </View>
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
