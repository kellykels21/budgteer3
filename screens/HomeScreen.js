import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TransactionsScreenNavigationTab from '../components/TransactionsScreenNavigationTab';

function HomeScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6e00ff', '#4500a1']}
        style={{ flex: 1, borderRadius: 5 }}>

        <TransactionsScreenNavigationTab
          navigateTo={() => { navigate('Counter') }}
          alignRight='true'
        />
      </LinearGradient>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default HomeScreen