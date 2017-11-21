import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

import AboutUs from '../../views/AboutUs/AboutUs.js';
import ContactUs from '../../views/ContactUs/ContactUs.js';
import PriceSuggestion from '../../views/PriceSuggestion/PriceSuggestion.js';
import Products from '../../views/Products/Products.js';
import Retailers from '../../views/RetailersView/RetailersView.js';

const iconStyle = require('../../styles/navStyles');

const Navigation = TabNavigator(
    {
        Retailers: {
            screen: Retailers,
            navigationOptions: {
                tabBarLabel: 'Återförsäljare',
                tabBarIcon: ({ focused }) => {
                    const imgSource = focused
                        ? require('../../images/icons/aterforsaljare_focus.png')
                        : require('../../images/icons/aterforsaljare.png');

                    return <Image source={imgSource} style={iconStyle.icon} />;
                }
            }
        },

        PriceSuggestion: {
            screen: PriceSuggestion,
            navigationOptions: {
                tabBarLabel: 'Prisförslag',
                tabBarIcon: ({ focused }) => {
                    const imgSource = focused
                        ? require('../../images/icons/prisforslag_focus.png')
                        : require('../../images/icons/prisforslag.png');

                    return <Image source={imgSource} style={iconStyle.icon} />;
                }
            }
        },
        Products: {
            screen: Products,
            navigationOptions: {
                tabBarLabel: 'Produkter',
                tabBarIcon: ({ focused }) => {
                    const imgSource = focused
                        ? require('../../images/icons/produkter_focus.png')
                        : require('../../images/icons/produkter.png');

                    return <Image source={imgSource} style={iconStyle.icon} />;
                }
            }
        },

        AboutUs: {
            screen: AboutUs,

            navigationOptions: {
                tabBarLabel: 'Om oss',
                tabBarIcon: ({ focused }) => {
                    const imgSource = focused
                        ? require('../../images/icons/om-oss_focus.png')
                        : require('../../images/icons/om-oss.png');

                    return <Image source={imgSource} style={iconStyle.icon} />;
                }
            }
        },

        ContactUs: {
            screen: ContactUs,
            navigationOptions: {
                tabBarLabel: 'Kontakta oss',
                tabBarIcon: ({ focused }) => {
                    const imgSource = focused
                        ? require('../../images/icons/kontakta-oss_focus.png')
                        : require('../../images/icons/kontakta-oss.png');

                    return <Image source={imgSource} style={iconStyle.icon} />;
                }
            }
        }
    },
    {
        tabBarPosition: 'bottom'
    }
);

export default Navigation;
