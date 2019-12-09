import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen";
import CounterScreen from "./screens/CounterScreen";
import BillsScreen from "./screens/BillsScreen";
import LoginScreen from "./screens/LoginScreen";
import handleCustomTransition from "./utils/TransitionHandler";

const MainNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Bills: { screen: BillsScreen },
    Home: { screen: HomeScreen },
    Counter: { screen: CounterScreen }
  },
  {
    initialRouteName: "Bills",
    transitionConfig: nav => handleCustomTransition(nav)
  }
);

const App = createAppContainer(MainNavigator);

export default App;
