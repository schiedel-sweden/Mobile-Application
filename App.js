import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';

import AboutUs from './src/views/AboutUs/AboutUs.js';
import ContactUs from './src/views/ContactUs/ContactUs.js';
import PriceSuggestion from './src/views/PriceSuggestion/PriceSuggestion.js';
import Products from './src/views/Products/Products.js';
import Retailers from './src/views/RetailersView/RetailersView.js';

const App = TabNavigator({
    Retailers: { screen: Retailers },
    PriceSuggestion: { screen: PriceSuggestion },
    Products: { screen: Products },
    AboutUs: { screen: AboutUs },
    ContactUs: { screen: ContactUs },
},
{
    tabBarPosition: 'bottom'
}
);

export default App;
