import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Counter: { screen: CounterScreen },
});

const App = createAppContainer(MainNavigator);


export default App


