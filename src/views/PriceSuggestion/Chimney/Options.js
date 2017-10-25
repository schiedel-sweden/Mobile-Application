import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Checkbox from 'react-native-checkbox';
import globalStyles from '../../../styles/globalStyles';

export default class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wireset: false,
            lokk: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.CheckboxWidth}>
                        <Checkbox
                        label="Wireset for heising/montering"
                        checked={this.state.wireset}
                        checkboxStyle={this.state.wireset
                          ?{backgroundColor: "#F9CE3C",}
                          :{backgroundColor: "#FFFFFF"}
                        }
                        onChange={() => this.setState({
                          wireset: !this.state.wireset,
                        })} />
                    </View>
                    <Checkbox
                    label="Lokk til tilluftsaddapter"
                    checked={this.state.lokk}
                    checkboxStyle={this.state.lokk
                      ?{backgroundColor: "#F9CE3C",}
                      :{backgroundColor: "#FFFFFF"}
                    }
                    onChange={() => this.setState({
                      lokk: !this.state.lokk,
                    })} />
                </View>
                <View style={[styles.flexDirectionRowSpaceBetween, styles.container]}>
                    <View style={
                                [styles.flexDirectionRowSpaceBetween
                                ,styles.lblWidth
                                ,styles.borderBottom]}>
                        <Text>Roykinnforing 125-160</Text>
                        <Text>00</Text>
                        <Text>mm</Text>
                    </View>
                    <View style={
                                [styles.flexDirectionRowSpaceBetween
                                ,styles.lblWidth
                                ,styles.borderBottom]}>
                        <Text>Roykinnforing 125-160</Text>
                        <Text>00</Text>
                        <Text>mm</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: globalStyles.PADDING * 0.5,
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    flexDirectionRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    lblWidth: {
        width: 260,
    },
    CheckboxWidth: {
        width: 300,
    },
});
