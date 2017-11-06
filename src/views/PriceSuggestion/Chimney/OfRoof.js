import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Checkbox from 'react-native-checkbox';
import globalStyles from '../../../styles/globalStyles';

export default class OfRoof extends Component {
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
        this.togglePusset = this.togglePusset.bind(this);
    }

    componentWillMount = () => {
        this.setState({
            pusset: this.props.propState.pusset,
            firkantBeslag: this.props.propState.firkantBeslag,
            feieluke: this.props.propState.feieluke,
            flexiroll: this.props.propState.flexiroll,
            wakaflex: this.props.propState.wakaflex,

            tegelforblendet: this.props.propState.tegelforblendet,
            topavdekning: this.props.propState.topavdekning,
            undertakTetting: this.props.propState.undertakTetting,
            feieplatform: this.props.propState.feieplatform,
        });
    }

    componentWillReceiveProps = (newprops) => {
        this.setState({
            pusset: newprops.propState.pusset,
            firkantBeslag: newprops.propState.firkantBeslag,
            feieluke: newprops.propState.feieluke,
            flexiroll: newprops.propState.flexiroll,
            wakaflex: newprops.propState.wakaflex,

            tegelforblendet: newprops.propState.tegelforblendet,
            topavdekning: newprops.propState.topavdekning,
            undertakTetting: newprops.propState.undertakTetting,
            feieplatform: newprops.propState.feieplatform,
        });
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }
    /* methods for updating the state and running the callback method to save the state in parent */
    async togglePusset() {
        try {
            await this.setState({
                pusset: !this.state.pusset,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleTopavdekning() {
        try {
            await this.setState({
                topavdekning: !this.state.topavdekning,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleFirkantBeslag() {
        try {
            await this.setState({
                firkantBeslag: !this.state.firkantBeslag,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleFeieplatform() {
        try {
            await this.setState({
                feieplatform: !this.state.feieplatform,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }
    }
    async toggleFeieluke() {
        try {
            await this.setState({
                feieluke: !this.state.feieluke,
            });
            this.callback();
        }
        catch (error) {
            console.log(error)
        }
    }
    async toggleTegelforblendet() {
        try {
            await this.setState({
                tegelforblendet: !this.state.tegelforblendet,
            });
            this.callback();
        }
        catch(error) {
            console.log(error);
        }
    }
    async toggleFlexiroll() {
        try {
            await this.setState({
                flexiroll: !this.state.flexiroll,
            });
            this.callback();
        }
        catch(error) {
            console.log(error);
        }
    }
    async toggleUndertakTetting() {
        try {
            await this.setState({
                undertakTetting: !this.state.undertakTetting,
            });
            this.callback();
        }
        catch(error) {
            console.log(error);
        }
    }
    async toggleWakaflex() {
        try {
            await this.setState({
               wakaflex: !this.state.wakaflex,
           });
           this.callback();
        }
        catch(error) {
            console.log(error);
        }
    }


    render() {
        return (
            <View>
                <View style={[styles.container, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Pusset pipe"
                    checked={this.state.pusset}
                    checkboxStyle={this.state.pusset ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.togglePusset()} />
                    </View>

                    <Checkbox
                    label="Topavdekning"
                    checked={this.state.topavdekning}
                    checkboxStyle={this.state.topavdekning ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleTopavdekning()} />
                </View>
                <View style={[styles.container, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Komplett firkantet beslag"
                    checked={this.state.firkantBeslag}
                    checkboxStyle={this.state.firkantBeslag ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleFirkantBeslag()} />
                    </View>

                    <Checkbox
                    label="Feieplatform (Kun for takstein)"
                    checked={this.state.feieplatform}
                    checkboxStyle={this.state.feieplatform ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleFeieplatform() } />
                </View>
                <View style={[styles.container, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Feieluke over tak"
                    checked={this.state.feieluke}
                    checkboxStyle={this.state.feieluke ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleFeieluke()} />
                    </View>


                    <Checkbox
                    label="Tegelforblendet pipe"
                    checked={this.state.tegelforblendet}
                    checkboxStyle={this.state.tegelforblendet ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleTegelforblendet() } />
                </View>
                <View style={[styles.container, styles.flexDirectionRow, styles.borderBottom]}>
                    <View style={styles.lblWidth}>
                    <Checkbox
                    label="Flexiroll for tetting mot damsperre"
                    checked={this.state.flexiroll}
                    checkboxStyle={this.state.flexiroll ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleFlexiroll() } />
                    </View>

                    <Checkbox
                    label="Tetting mot undertak"
                    checked={this.state.undertakTetting}
                    checkboxStyle={this.state.undertakTetting ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleUndertakTetting() } />
                </View>
                <View style={[styles.container, styles.flexDirectionRow, styles.borderBottom]}>
                    <Checkbox
                    label="Wakaflex - Benyttes som ekstra tetting rundt beslag i spesielt i vaerutsatte områder"
                    checked={this.state.wakaflex}
                    checkboxStyle={this.state.wakaflex ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.toggleWakaflex()} />
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
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    lblWidth: {
        width: 300,
    }
});
