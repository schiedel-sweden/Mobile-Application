import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyles from '../../styles/globalStyles';

// import local views
import Skorstenstyp from './Skorstenstyp'
import Hustyp from './Hustyp'
import Skorsten from './Skorsten'
import Kundupgifter from './Kundupgifter'
import Prisforslag from './Prisforslag'
import Bestallning from './Bestallning'

import ButtonNav from './ButtonNav';

export default class PriceSuggestion extends Component {

    constructor(props) {
        super(props);
        // bind all functions
        this.skorstenstyp = this.skorstenstyp.bind(this);
        this.hustyp = this.hustyp.bind(this);
        this.skorsten = this.skorsten.bind(this);
        this.kundupgifter = this.kundupgifter.bind(this);
        this.prisforslag = this.prisforslag.bind(this);
        this.bestallning = this.bestallning.bind(this);
        // set initial state
        this.state = {
            activeTab: <Skorstenstyp />,
            currentTab: "skorstenstyp",

        }

    }

    // functions to set active tab to set tab file
    skorstenstyp(){
        this.setState({
            activeTab: <Skorstenstyp />,
            currentTab: "skorstenstyp",
        })
    };
    hustyp() {
        this.setState({
            activeTab: <Hustyp />,
            currentTab: "hustyp"
        })
    };
    skorsten() {
        this.setState({
            activeTab: <Skorsten />,
            currentTab: "skorsten"
        })
    };
    kundupgifter() {
        this.setState({
            activeTab: <Kundupgifter />,
            currentTab: "kundupgifter"
        })
    };
    prisforslag() {
        this.setState({
            activeTab: <Prisforslag />,
            currentTab: "prisforslag"
        })
    };
    bestallning() {
        this.setState({
            activeTab: <Bestallning />,
            currentTab: "bestallning"
        })
    };

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

                <View style={styles.body}>

                    <View>
                        <ButtonNav
                        style={this.state.currentTab == "skorstenstyp" ? styles.currentTab : styles.tabItem}
                        onPress={this.skorstenstyp}
                        tagline="SKORSTENSTYP" />
                    </View>

                    <View>
                        <ButtonNav
                        style={this.state.currentTab == "hustyp" ? styles.currentTab: styles.tabItem}
                        onPress={this.hustyp}
                        tagline="HUSTYP" />
                    </View>

                    <View>
                        <ButtonNav
                        style={this.state.currentTab == "skorsten" ? styles.currentTab : styles.tabItem}
                        onPress={this.skorsten}
                        tagline="SKORSTEN" />
                    </View>

                    <View>
                        <ButtonNav
                        style={this.state.currentTab == "kundupgifter" ? styles.currentTab : styles.tabItem}
                        onPress={this.kundupgifter}
                        tagline="KUNDUPGIFTER" />
                    </View>

                    <View>
                        <ButtonNav
                        style={this.state.currentTab == "prisforslag" ? styles.currentTab : styles.tabItem}
                        onPress={this.prisforslag}
                        tagline="PRISFÖRSLAG" />
                    </View>

                    <View>
                        <ButtonNav
                        style={this.state.currentTab == "bestallning" ? styles.currentTab : styles.tabItem}
                        onPress={this.bestallning}
                        tagline="BESTÄLLNING" />
                    </View>

                </View>

                
                <View>
                    {this.state.activeTab}
                </View>



            </View>

        );
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    separate: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    tabItem: {
        alignItems: 'center',
        height: 100,
        backgroundColor: "#FF0000"
    },
    currentTab: {
        alignItems: 'center',
        height: 100,
        backgroundColor: "#00FF00"
    }
});
