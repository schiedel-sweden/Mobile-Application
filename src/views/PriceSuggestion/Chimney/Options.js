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
        this.toggleWireset = this.toggleWireset.bind(this);
        this.toggleLokk = this.toggleLokk.bind(this);
    }
    componentWillMount = () => {
        this.setState({
            wireset: this.props.propState.wireset,
            lokk: this.props.propState.lokk,
        });
    }
    componentWillReceiveProps = (newprops) => {
        this.setState({
            wireset: newprops.propState.wireset,
            lokk: newprops.propState.lokk,
        });
    }
    callback = () => {
        this.props.parentCallback(this.state);
    }
    async toggleWireset() {
        try {
            await this.setState({
                wireset: !this.state.wireset,
            });
            this.callback();
        }
        catch(error) {
            console.log(error + " here");
        }
    }
    async toggleLokk() {
        try {
            await this.setState({
                lokk: !this.state.lokk,
            });
            this.callback();
        }
        catch(error) {
            console.log(error);
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
                        checkboxStyle={this.state.wireset ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.toggleWireset()} />
                    </View>
                    <Checkbox
                    label="Lokk til tilluftsaddapter"
                    checked={this.state.lokk}
                    checkboxStyle={this.state.lokk ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleLokk()} />
                </View>
                {/* TODO: Make it so you can edit numbers that are now currently hardcoded as "00" below */}
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
