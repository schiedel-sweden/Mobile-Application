import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import Checkbox from 'react-native-checkbox';

export default class Chimney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle1: true,
            toggle2: false,

            pusset: false,
            firkantBeslag: false,
            feieluke: false,
            flexiroll: false,
            wakaflex: false,

            tegelforblendet: false,
            topavdekning: false,
            undertakTetting: false,
            feieplatform: false,

            wireset: false,
            lokk: false,


        }
    }

    render() {
        return (
            <View>
                <View>
                <Text>Typ av skorsten</Text>
                    <Checkbox
                    label="Alternative 1"
                    checked={this.state.toggle1}
                    checkboxStyle={this.state.toggle1 ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        toggle1: !this.state.toggle1,
                        toggle2: !this.state.toggle2,
                    })} />

                    <Checkbox
                    label="Alternative 2"
                    checked={this.state.toggle2}
                    checkboxStyle={this.state.toggle2 ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        toggle2: !this.state.toggle2,
                        toggle1: !this.state.toggle1,

                    })} />
                </View>

                <View>
                    <Text>Över tak</Text>

                    <Checkbox
                    label="Pusset pipe"
                    checked={this.state.pusset}
                    checkboxStyle={this.state.pusset ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        pusset: !this.state.pusset,

                    })} />
                    <Checkbox
                    label="Komplett firkantet beslag"
                    checked={this.state.firkantBeslag}
                    checkboxStyle={this.state.firkantBeslag ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        firkantBeslag: !this.state.firkantBeslag,

                    })} />
                    <Checkbox
                    label="Feieluke over tak"
                    checked={this.state.feieluke}
                    checkboxStyle={this.state.feieluke ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        feieluke: !this.state.feieluke,

                    })} />

                    <Checkbox
                    label="Flexiroll for tetting mot damsperre"
                    checked={this.state.Flexiroll}
                    checkboxStyle={this.state.flexiroll ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        flexiroll: !this.state.flexiroll,

                    })} />
                    <Checkbox
                    label="Wakaflex - Benyttes som ekstra tetting rundt beslag i spesielt i vaerutsatte områder"
                    checked={this.state.wakaflex}
                    checkboxStyle={this.state.wakaflex ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        wakaflex: !this.state.wakaflex,

                    })} />


                    <Checkbox
                    label="Tegelforblendet pipe"
                    checked={this.state.tegelforblendet}
                    checkboxStyle={this.state.tegelforblendet ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        tegelforblendet: !this.state.tegelforblendet,

                    })} />

                    <Checkbox
                    label="Topavdekning"
                    checked={this.state.topavdekning}
                    checkboxStyle={this.state.topavdekning ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        topavdekning: !this.state.topavdekning,

                    })} />

                    <Checkbox
                    label="Tetting mot undertak"
                    checked={this.state.undertakTetting}
                    checkboxStyle={this.state.undertakTetting ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        undertakTetting: !this.state.undertakTetting,

                    })} />

                    <Checkbox
                    label="Feieplatform (Kun for takstein)"
                    checked={this.state.feieplatform}
                    checkboxStyle={this.state.feieplatform ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        feieplatform: !this.state.feieplatform,

                    })} />




                </View>
                <View>
                    <Text>Tillval</Text>

                    <Checkbox
                    label="Wireset for heising/montering"
                    checked={this.state.wireset}
                    checkboxStyle={this.state.wireset ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        wireset: !this.state.wireset,

                    })} />

                    <Checkbox
                    label="Lokk til tilluftsaddapter"
                    checked={this.state.lokk}
                    checkboxStyle={this.state.lokk ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.setState({
                        lokk: !this.state.lokk,

                    })} />
                </View>
            </View>

        );
    }
}
