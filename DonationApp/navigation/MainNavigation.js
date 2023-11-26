import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';

const stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <stack.Screen name={Routes.Home} component={Home} />
    </stack.Navigator>
  );
};

export default MainNavigation;
