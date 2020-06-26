import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';

export default createAppContainer(
  createStackNavigator({
    Main,
  }),
);
