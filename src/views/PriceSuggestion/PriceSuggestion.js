import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyles from '../../styles/globalStyles';

// import local views
import ChimneyType from './ChimneyType';
import HouseType from './HouseType';
import Chimney from './Chimney';
import CustomerDetails from './CustomerDetails';
import PricePage from './PricePage';
import Order from './Order';

import { QUOT_NUMBER } from '../../components/redux-items/actions.js';

import ButtonNav from './ButtonNav';

export default class PriceSuggestion extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            activeTab: null,
            currentTab: '',

            chimneyTypeState: {
                choice: '',
                options: ['permeter', 'solid vent', 'etesjepipe', 'rondo'],
            },
            houseTypeState: {
                myNumber: '',
                pipeNumber: null,
                totalHeight: null,
                heightAboveRoof: null,
                roofAngle: null,
            },
            chimneyState: {
                listChimneyTypeLbl: ["Alternative 1", "Alternative 2"],
            },
            customerDetailState: {
                // "top" form
                company: {
                    company: '',
                },
                name: {
                    name: '',
                    surname: '',
                },
                adress: {
                    adress: '',
                    postnumber: null,
                },
                city: {
                    city: '',
                    country: '',
                },
                contact: {
                    phone: null,
                    email: '',
                },

                // "bottom" form
                receiver: {
                    receiver: '',
                },
                receiverAdress: {
                    adress: '',
                    postnumber: null,
                },
                receiverCity: {
                    city: '',
                    country: '',
                },

                checked: false,

            },
            // might not be needed as the state is set in the component from HouseType.js, testing has to be done
            prisePageState: null,
            orderState: null,

        };
    }

    componentWillMount = () => {
        this.setState({
            activeTab: <ChimneyType
                            propState={this.state.chimneyTypeState}
                            parentCallback={this.chimneyTypeCallback} />,
            currentTab: 'chimneytype',
        });
    }


    chimneyTypeCallback = (state) => {
        this.setState({chimneyTypeState: state});
    }
    houseTypeCallback = (state) => {
        this.setState({houseTypeState: state});
    }
    chimneyCallback = (state) => {
        this.setState({chimneyState: state});
    }
    customerDetailCallback = (state) => {
        this.setState({customerDetailState: state});
    }
    pricePageCallback = (state) => {
        this.setState({pricePageState: state});
    }
    orderCallback = (state) => {
        this.setState({orderState: state});
    }


    // functions to set active tab to set tab file
    chimneytype = () => {
        this.setState({
            activeTab: <ChimneyType
                            propState={this.state.chimneyTypeState}
                            parentCallback={this.chimneyTypeCallback} />,
            currentTab: 'chimneytype',
        });
    }
    // pass offertnummer as the prop "offNum"
    housetype = () => {
        this.setState({
            activeTab: <HouseType
                            quotNum={ QUOT_NUMBER }
                            propState={this.state.houseTypeState}
                            parentCallback={this.houseTypeCallback}/>,
            currentTab: 'housetype',
        });
    }
    chimney = () => {
        this.setState({
            activeTab: <Chimney />,
            currentTab: 'chimney',
        });
    }
    customerdetails = () => {
        this.setState({
            activeTab: <CustomerDetails />,
            currentTab: 'customerdetails',
        });
    }
    pricepage = () => {
        this.setState({
            activeTab: <PricePage />,
            currentTab: 'pricepage',
        });
    }
    order = () => {
        this.setState({
            activeTab: <Order />,
            currentTab: 'order',
        });
    }
    // 6 views!

    // 1: SKORSTENSTYP
    // 2: HUSTYP
    // 3: SKORSTEN
    // 4: KUNDUPGIFTER
    // 5: PRISFÖRSLAG
    // 6: BESTÄLLNING
    render = () => {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.navWrapper}>
                    <ButtonNav
                        style={
                            this.state.currentTab == 'chimneytype'
                                ? [styles.currentTab, styles.tab]
                                : [styles.tabItem, styles.tab]
                        }
                        onPress={this.chimneytype}
                        tagline="SKORSTENSTYP"
                    />

                    <ButtonNav
                        style={
                            this.state.currentTab == 'housetype'
                                ? [styles.currentTab, styles.tab]
                                : [styles.tabItem, styles.tab]
                        }
                        onPress={this.housetype}
                        tagline="HUSTYP"
                    />

                    <ButtonNav
                        style={
                            this.state.currentTab == 'chimney'
                                ? [styles.currentTab, styles.tab]
                                : [styles.tabItem, styles.tab]
                        }
                        onPress={this.chimney}
                        tagline="SKORSTEN"
                    />

                    <ButtonNav
                        style={
                            this.state.currentTab == 'customerdetails'
                                ? [styles.currentTab, styles.tab]
                                : [styles.tabItem, styles.tab]
                        }
                        onPress={this.customerdetails}
                        tagline="KUNDUPGIFTER"
                    />

                    <ButtonNav
                        style={
                            this.state.currentTab == 'pricepage'
                                ? [styles.currentTab, styles.tab]
                                : [styles.tabItem, styles.tab]
                        }
                        onPress={this.pricepage}
                        tagline="PRISFÖRSLAG"
                    />

                    <ButtonNav
                        style={
                            this.state.currentTab == 'order'
                                ? [styles.currentTab, styles.tab]
                                : [styles.tabLastChild, styles.tab]
                        }
                        onPress={this.order}
                        tagline="BESTÄLLNING"
                    />
                </View>
                <ScrollView style={styles.body}>
                    <View>{this.state.activeTab}</View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navWrapper: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        backgroundColor: '#949494',
    },
    tab: {
        justifyContent: 'center',
        flexGrow: 1,
        height: '100%',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#333333',
    },
    tabItem: {
        borderRightWidth: 2,
        borderRightColor: '#333333',
        borderBottomWidth: 2,
        borderBottomColor: '#333333',
    },
    currentTab: {
        backgroundColor: '#EEEEEE',
        borderBottomWidth: 2,
        borderBottomColor: '#EEEEEE',
    },
    tabLastChild: {
        borderBottomWidth: 2,
        borderBottomColor: '#333333',
    },
    body: {
        backgroundColor: '#EEEEEE',
    },
});
