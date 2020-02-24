import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screen/Home';
import AddItem from '../screen/AddItem';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    AddItem: {
      screen: AddItem,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    HomeNavigator,
  },
  {
    initialRouteName: 'HomeNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

class Router extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Router;
