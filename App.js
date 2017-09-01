import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet, Image} from 'react-native';

import AboutUs from './src/views/AboutUs/AboutUs.js';
import ContactUs from './src/views/ContactUs/ContactUs.js';
import PriceSuggestion from './src/views/PriceSuggestion/PriceSuggestion.js';
import Products from './src/views/Products/Products.js';
import Retailers from './src/views/RetailersView/RetailersView.js';

const iconStyle = require('./src/styles/navStyles');

const App = TabNavigator({
    Retailers: { screen: Retailers,
        navigationOptions: {
            tabBarLabel: 'Återförsäljare',
            tabBarIcon: ({ focused }) => {
                  let imgSource = focused ? require('./src/images/icons/aterforsaljare_focus.png') : require('./src/images/icons/aterforsaljare.png');

                  return <Image
                    source={imgSource}
                    style={iconStyle.icon}
                  />
              },
        },
    },

    PriceSuggestion: { screen: PriceSuggestion,
        navigationOptions: {
            tabBarLabel: 'Prisförslag',
            tabBarIcon: ({ focused }) => {
                  let imgSource = focused ? require('./src/images/icons/prisforslag_focus.png') : require('./src/images/icons/prisforslag.png');

                  return <Image
                    source={imgSource}
                    style={iconStyle.icon}
                  />
              },
        },
    },
    Products: { screen: Products,
        navigationOptions: {
            tabBarLabel: 'Produkter',
            tabBarIcon: ({ focused }) => {
                  let imgSource = focused ? require('./src/images/icons/produkter_focus.png') : require('./src/images/icons/produkter.png');

                  return <Image
                    source={imgSource}
                    style={iconStyle.icon}
                  />
              },
        },
    },

    AboutUs: { screen: AboutUs,

        navigationOptions: {
            tabBarLabel: 'Om oss',
            tabBarIcon: ({ focused }) => {
                  let imgSource = focused ? require('./src/images/icons/om-oss_focus.png') : require('./src/images/icons/om-oss.png');

                  return <Image
                    source={imgSource}
                    style={iconStyle.icon}
                  />
              },
        },
    },

    ContactUs: { screen: ContactUs,
        navigationOptions: {
            tabBarLabel: 'Kontakta oss',
            tabBarIcon: ({ focused }) => {
                  let imgSource = focused ? require('./src/images/icons/kontakta-oss_focus.png') : require('./src/images/icons/kontakta-oss.png');

                  return <Image
                    source={imgSource}
                    style={iconStyle.icon}
                  />
              },
        },
    },

},
{
    tabBarPosition: 'bottom'
}
);

export default App;
