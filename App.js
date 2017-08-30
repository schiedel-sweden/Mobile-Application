import React from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';
import RetailerHomeScreen from './src/views/RetailerHomeScreen/RetailerHomeScreen';

const App = StackNavigator({
    RetailerHomeScreen: { screen: RetailerHomeScreen },
});

export default App;
