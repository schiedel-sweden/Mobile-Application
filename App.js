import React from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';
import RetailerHomeScreen from './src/views/RetailerHomeScreen/RetailerHomeScreen';
import AboutUs from './src/views/AboutUs/AboutUs.js';
import ContactUs from './src/views/ContactUs/ContactUs.js';
import PriceSuggestion from './src/views/PriceSuggestion/PriceSuggestion.js';
import Products from './src/views/Products/Products.js';
import Retailers from './src/views/Retailers/Retailers.js';

const App = StackNavigator({
    RetailerHomeScreen: { screen: RetailerHomeScreen },
    AboutUs: { screen: AboutUs },
    ContactUs: { screen: ContactUs },
    PriceSuggestion: { screen: PriceSuggestion },
    Products: { screen: Products },
    Retailers: { screen: Retailers },
});

export default App;
