import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Checkbox from 'react-native-checkbox';
import globalStyles from '../../../styles/globalStyles';

export default class Chimney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pusset: false,
            firkantBeslag: false,
            feieluke: false,
            flexiroll: false,
            wakaflex: false,

            tegelforblendet: false,
            topavdekning: false,
            undertakTetting: false,
            feieplatform: false,

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.containerOfRoof, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Pusset pipe"
                    checked={this.state.pusset}
                    checkboxStyle={this.state.pusset ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        pusset: !this.state.pusset,

                    })} />
                    </View>

                    <Checkbox
                    label="Topavdekning"
                    checked={this.state.firkantBeslag}
                    checkboxStyle={this.state.firkantBeslag ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        firkantBeslag: !this.state.firkantBeslag,

                    })} />
                </View>
                <View style={[styles.containerOfRoof, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Komplett firkantet beslag"
                    checked={this.state.feieluke}
                    checkboxStyle={this.state.feieluke ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        feieluke: !this.state.feieluke,

                    })} />
                    </View>

                    <Checkbox
                    label="Feieplatform (Kun for takstein)"
                    checked={this.state.Flexiroll}
                    checkboxStyle={this.state.flexiroll ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        flexiroll: !this.state.flexiroll,

                    })} />
                </View>
                <View style={[styles.containerOfRoof, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Feieluke over tak"
                    checked={this.state.wakaflex}
                    checkboxStyle={this.state.wakaflex ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        wakaflex: !this.state.wakaflex,

                    })} />
                    </View>


                    <Checkbox
                    label="Tegelforblendet pipe"
                    checked={this.state.tegelforblendet}
                    checkboxStyle={this.state.tegelforblendet ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        tegelforblendet: !this.state.tegelforblendet,

                    })} />
                </View>
                <View style={[styles.containerOfRoof, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Flexiroll for tetting mot damsperre"
                    checked={this.state.topavdekning}
                    checkboxStyle={this.state.topavdekning ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        topavdekning: !this.state.topavdekning,

                    })} />
                    </View>

                    <Checkbox
                    label="Tetting mot undertak"
                    checked={this.state.undertakTetting}
                    checkboxStyle={this.state.undertakTetting ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        undertakTetting: !this.state.undertakTetting,

                    })} />
                </View>
                <View style={[styles.containerOfRoof, styles.flexDirectionRow, styles.borderBottom]}>
                    <Checkbox
                    label="Wakaflex - Benyttes som ekstra tetting rundt beslag i spesielt i vaerutsatte områder"
                    checked={this.state.feieplatform}
                    checkboxStyle={this.state.feieplatform ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        feieplatform: !this.state.feieplatform,

                    })} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: globalStyles.PADDING,
    },
    containerOfRoof: {
        paddingTop: globalStyles.PADDING * 0.5,
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    lblWidth: {
        width: 300,
    }
});
