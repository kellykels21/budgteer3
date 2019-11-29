import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { LinearGradient } from "expo-linear-gradient";

import TransactionsScreenNavigationTab from "../components/TransactionsScreenNavigationTab";
import BillsScreenNavigationTab from "../components/BillsScreenNavigationTab";
import ProgressChart from "../components/ProgressChart";
import CategoryCardSwiper from "../components/CategoryCardSwiper";
import SliderModal from '../components/SliderModal';

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MAX_VALUE = 1400;


function HomeScreen() {
  const { navigate } = useNavigation();
  const categories = require("../test/data/card_categories_mock_data");
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [itemDetail, setItemDetail] = useState({})

  // Calc real count
  const initialCountValue = 179;
  const [degreeCount, setDegreeCount] = useState(initialCountValue);
  const realCount = Math.floor(((degreeCount + 1) / 360) * MAX_VALUE);

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1 }}>
        <TransactionsScreenNavigationTab
          navigateTo={() => {
            navigate("Counter");
          }}
        />
      </View>

      <View style={{ zIndex: 1 }}>
        <BillsScreenNavigationTab
          navigateTo={() => {
            navigate("Bills");
          }}
        />
      </View>
      <LinearGradient
        colors={["#6e00ff", "#000481"]}
        style={{ flex: 1 }}
      >
        <View style={styles.chartContainer}>
          <ProgressChart textColor='white' fill={700} size={275} />
        </View>

        <View style={styles.categoryCardSwiper}>
          <CategoryCardSwiper cards={categories.data} setupModalItem={item => setupModalItem(item, setItemDetail(), setIsModalVisible())} />
        </View>
      </LinearGradient>

      <View>
        <SliderModal isModalVisible={isModalVisible} setIsModalVisible={() => { setIsModalVisible(false) }} itemDetail={itemDetail} />
      </View>
    </View>
  );

  function setupModalItem(name) {
    console.log('Hey you hit a card: ' + name)
    setItemDetail({ description: name })
    setIsModalVisible(true)
  }
}



HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  },
  chartContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryCardSwiper: {
    flex: 1,
  }
});

export default HomeScreen;
