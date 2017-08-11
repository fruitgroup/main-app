import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import Tabs from './src/components/tabs/Tabs';

const Routes = {
    Tabs : {
      name: 'Tabs',
      description: 'All Tab Items',
      screen:  Tabs,
    },

};

const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: Tabs,
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  }

);

export default () => <AppNavigator /> ;