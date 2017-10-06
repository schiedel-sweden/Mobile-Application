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

import ButtonNav from './ButtonNav';

export default class PriceSuggestion extends Component {
    constructor(props) {
        super(props);
        // bind all functions
        this.chimneytype = this.chimneytype.bind(this);
        this.housetype = this.housetype.bind(this);
        this.chimney = this.chimney.bind(this);
        this.customerdetails = this.customerdetails.bind(this);
        this.pricepage = this.pricepage.bind(this);
        this.order = this.order.bind(this);
        // set initial state
        this.quotationnumber = 192381;
        this.state = {
            activeTab: <Chimney />,
            currentTab: 'chimneytype',
        };
    }

    // functions to set active tab to set tab file
    chimneytype() {
        this.setState({
            activeTab: <ChimneyType />,
            currentTab: 'chimneytype',
        });
    }
    // pass offertnummer as the prop "offNum"
    housetype() {
        this.setState({
            activeTab: <HouseType quotNum={this.quotationnumber} />,
            currentTab: 'housetype',
        });
    }
    chimney() {
        this.setState({
            activeTab: <Chimney />,
            currentTab: 'chimney',
        });
    }
    customerdetails() {
        this.setState({
            activeTab: <CustomerDetails />,
            currentTab: 'customerdetails',
        });
    }
    pricepage() {
        this.setState({
            activeTab: <PricePage />,
            currentTab: 'pricepage',
        });
    }
    order() {
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
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.body}>
                    <View style={styles.navWrapper}>
                        <View>
                            <ButtonNav
                                style={
                                    this.state.currentTab == 'chimneytype'
                                        ? styles.currentTab
                                        : styles.tabItem
                                }
                                onPress={this.chimneytype}
                                tagline="SKORSTENSTYP"
                            />
                        </View>

                        <View>
                            <ButtonNav
                                style={
                                    this.state.currentTab == 'housetype'
                                        ? styles.currentTab
                                        : styles.tabItem
                                }
                                onPress={this.housetype}
                                tagline="HUSTYP"
                            />
                        </View>

                        <View>
                            <ButtonNav
                                style={
                                    this.state.currentTab == 'chimney'
                                        ? styles.currentTab
                                        : styles.tabItem
                                }
                                onPress={this.chimney}
                                tagline="SKORSTEN"
                            />
                        </View>

                        <View>
                            <ButtonNav
                                style={
                                    this.state.currentTab == 'customerdetails'
                                        ? styles.currentTab
                                        : styles.tabItem
                                }
                                onPress={this.customerdetails}
                                tagline="KUNDUPGIFTER"
                            />
                        </View>

                        <View>
                            <ButtonNav
                                style={
                                    this.state.currentTab == 'pricepage'
                                        ? styles.currentTab
                                        : styles.tabItem
                                }
                                onPress={this.pricepage}
                                tagline="PRISFÖRSLAG"
                            />
                        </View>

                        <View>
                            <ButtonNav
                                style={
                                    this.state.currentTab == 'order'
                                        ? styles.currentTab
                                        : styles.tabItem
                                }
                                onPress={this.order}
                                tagline="BESTÄLLNING"
                            />
                        </View>
                    </View>
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
    body: {
        backgroundColor: '#EEEEEE',
    },
    navWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#949494',
    },
    tabItem: {
        // alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderWidth: 2,
        borderColor: '#333333',
        // alignItems: 'stretch',
        // flexGrow: 1,
        flex: 1,
    },
    currentTab: {
        // alignItems: 'center',
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        height: '100%',
        // alignItems: 'stretch',
        // borderWidth: 3,
        // borderColor: '#333333',
        // flexGrow: 1,
        flex: 1,
    },
});
