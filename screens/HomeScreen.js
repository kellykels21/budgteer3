import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { LinearGradient } from "expo-linear-gradient";

import TransactionsScreenNavigationTab from "../components/TransactionsScreenNavigationTab";
import BillsScreenNavigationTab from "../components/BillsScreenNavigationTab";
import ProgressChart from "../components/ProgressChart";
import CircularProgressSlider from "../components/CircularProgressSlider";
import CategoryCardSwiper from "../components/CategoryCardSwiper";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MAX_VALUE = 1400;

function HomeScreen() {
  const { navigate } = useNavigation();
  const categories = require("../test/data/card_categories_mock_data");

  // Calc real count
  const initialCountValue = 179;
  const [degreeCount, setDegreeCount] = useState(initialCountValue);
  const realCount = Math.floor(((degreeCount + 1) / 360) * MAX_VALUE);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#6e00ff", "#000481"]}
        style={{ flex: 1, borderRadius: 5 }}
      >
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

        <CircularProgressSlider
          top={hp("5%")}
          value={initialCountValue} // initial degree value
          dialRadius={137.5} // radius of the circular
          dialWidth={15} // the width of the path
          btnRadius={20} // the radius of the cap.
          count={realCount}
          onValueChange={v => setDegreeCount(v)}
        />

        <View style={styles.categoryCardSwiper}>
          <CategoryCardSwiper cards={categories.data} />
        </View>
      </LinearGradient>
    </View>
  );
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
    alignItems: "center",
    justifyContent: "center",
    top: hp("15%")
  },
  cardContainer: {
    justifyContent: "center",
    backgroundColor: "red",
    top: hp("50%"),
    zIndex: 0
  },
  categoryCardSwiper: {
    flex: 1,
    zIndex: 0,
    top: hp("30%")
  }
});

export default HomeScreen;
