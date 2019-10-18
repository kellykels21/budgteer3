import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';
import BillsScreen from './screens/BillsScreen';
import handleCustomTransition from './utils/TransitionHandler'

const MainNavigator = createStackNavigator({
  Bills: { screen: BillsScreen },
  Home: { screen: HomeScreen },
  Counter: { screen: CounterScreen },
},
  {
    initialRouteName: 'Home',
    transitionConfig: (nav) => handleCustomTransition(nav),
  });

const App = createAppContainer(MainNavigator);


export default App


