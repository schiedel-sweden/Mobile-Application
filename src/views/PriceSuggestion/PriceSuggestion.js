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
                overRoof: {
                    pusset: false,
                    firkantBeslag: false,
                    feieluke: false,
                    flexiroll: false,
                    wakaflex: false,

                    tegelforblendet: false,
                    topavdekning: false,
                    undertakTetting: false,
                    feieplatform: false,
                },
                options: {
                    wireset: false,
                    lokk: false,
                }

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
            prisePageState: {
                pipe: null,
                rowItems: [
                    {
                        number: 123,
                        antal: 0,
                        pris: 3000,
                        sum: 0,
                        rabatt: 0,
                    },
                    {
                        number: 231,
                        antal: 0,
                        pris: 1500,
                        sum: 0,
                        rabatt: 0,
                    },
                    {
                        number: 312,
                        antal: 0,
                        pris: 2000,
                        sum: 0,
                        rabatt: 0,
                    },
                ],

                nettoSum: 0,
                moms: 0,
                totalSum:0,

                tillbud: false,
                ordrebekreftelse: false,
                totalsum: false,

                totalHeight: '',
                heightAboveRoof: 0,
                roofAngle: 0,

                gulvPipetopp: '',
                heightAboveRoof: '',
                roofAngle: '',
                ytterelement: '',
                forningsror: '',
                utsparningsmal: '',

                andre: '',
                beskjed: '',

            },
            orderState: {
                rowItems: [
                    {
                        number: 123,
                        antal: 0,
                        pris: 3000,
                        sum: 0,
                        rabatt: 0,
                    },
                    {
                        number: 231,
                        antal: 0,
                        pris: 1500,
                        sum: 0,
                        rabatt: 0,
                    },
                    {
                        number: 312,
                        antal: 0,
                        pris: 2000,
                        sum: 0,
                        rabatt: 0,
                    },
                ],

                kranbil: false,
                plukket: false,
                kjorer: false,

                nettoSum: 0,
                moms: 0,
                totalSum:0,
                date: null,
                chosenDate: null,
            },

        };
    }

    componentWillMount = async () => {

        await this.setState(previousState => {
            return {
                activeTab: <ChimneyType
                                propState={this.state.chimneyTypeState}
                                parentCallback={this.chimneyTypeCallback} />,
                currentTab: 'chimneytype',

            }

        });
    }


    chimneyTypeCallback = (state) => {
        // create new object for prisePageState, and set the pipe
        const newChoice = Object.assign({}, this.state.prisePageState, { pipe: state.choice });
        // update state with new choice
        this.setState({prisePageState: newChoice});
        this.setState(previousState => {
            return {
                chimneyTypeState: state,
            }

        });

    }
    houseTypeCallback = (state) => {
        // create new object for prisePageState, set different items
        const prisePageStateChange = Object.assign({}, this.state.prisePageState, { totalHeight: state.totalHeight,
                                                                                    heightAboveRoof: state.heightAboveRoof,
                                                                                    roofAngle: state.roofAngle});
        this.setState({prisePageState: prisePageStateChange});
        this.setState(previousState => {
            return {
                houseTypeState: state
            }

        });
    }
    chimneyCallback = (state) => {
        this.setState(previousState => {
            return {
                chimneyState: state
            }

        });
    }
    customerDetailCallback = (state) => {
        this.setState(previousState => {
            return {
                customerDetailState: state
            }

        });
    }
    prisePageCallback = (state) => {
        // create new object for orderPageState, and set the different items
        const orderStateChange = Object.assign({}, this.state.orderState, { rowItems: state.rowItems,
                                                                            nettoSum: state.nettoSum,
                                                                            moms:     state.moms,
                                                                            totalSum: state.totalSum,});
        const houseTypeStateChange = Object.assign({}, this.state.houseTypeState, { totalHeight: state.totalHeight,
                                                                                    heightAboveRoof: state.heightAboveRoof,
                                                                                    roofAngle: state.roofAngle});
        this.setState({houseTypeState: houseTypeStateChange});
        // apply state changes
        this.setState({orderState: orderStateChange});
        this.setState(previousState => {
            return {
                prisePageState: state,
            }

        });
    }
    orderCallback = (state) => {
        // create new object for orderPageState, and set the different items
        const prisePageStateChange = Object.assign({}, this.state.prisePageState, { rowItems: state.rowItems,
                                                                                nettoSum: state.nettoSum,
                                                                                moms:     state.moms,
                                                                                totalSum: state.totalSum,});
        // apply state changes
        this.setState({prisePageState: prisePageStateChange});
        this.setState(previousState => {
            return {
                orderState: state,
            }

        });
    }


    // functions to set active tab to set tab file
    chimneytype = () => {
        this.setState(previousState => {
            return {
                activeTab: <ChimneyType
                                propState={this.state.chimneyTypeState}
                                parentCallback={this.chimneyTypeCallback} />,
                currentTab: 'chimneytype',
            }

        });
    }
    // pass offertnummer as the prop "offNum"
    housetype = () => {
        this.setState(previousState => {
            return {
                activeTab: <HouseType
                                quotNum={ QUOT_NUMBER }
                                propState={this.state.houseTypeState}
                                parentCallback={this.houseTypeCallback}/>,
                currentTab: 'housetype',
            }

        });
    }
    chimney = () => {
        this.setState(previousState => {
            return {
                activeTab: <Chimney
                                propState={this.state.chimneyState}
                                parentCallback={this.chimneyCallback}/>,
                currentTab: 'chimney',
            }

        });
    }
    customerdetails = () => {
        this.setState(previousState => {
            return {
                activeTab: <CustomerDetails
                                propState={this.state.customerDetailState}
                                parentCallback={this.customerDetailCallback}/>,
                currentTab: 'customerdetails',
            }

        });
    }
    pricepage = () => {
        this.setState(previousState => {
            return {
                activeTab: <PricePage
                                propState={this.state.prisePageState}
                                parentCallback={this.prisePageCallback}/>,
                currentTab: 'pricepage',
            }

        });
    }
    order = () => {
        this.setState(previousState => {
            return {
                activeTab: <Order
                                propState={this.state.orderState}
                                parentCallback={this.orderCallback}
                                />,
                currentTab: 'order',
            }

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
        borderRightWidth: 2,
        borderRightColor: '#333333',
        backgroundColor: '#EEEEEE',
        borderBottomWidth: 2,
        borderBottomColor: '#EEEEEE',
    },
    tabLastChild: {
        borderBottomWidth: 2,
        borderBottomColor: '#333333',
        borderRightWidth: 2,
        borderRightColor: '#EEEEEE',
    },
    body: {
        backgroundColor: '#EEEEEE',
    },
});
