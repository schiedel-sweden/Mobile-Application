import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Checkbox from 'react-native-checkbox';
import globalStyles from '../../styles/globalStyles';
import ChimneyTypeCheckbox from './Chimney/ChimneyTypeCheckbox';
import OfRoof from './Chimney/OfRoof';

export default class Chimney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listChimneyTypeLbl: ["Alternative 1", "Alternative 2"],

            wireset: false,
            lokk: false,
        }
        this.listChimneyTypeCheckbox = this.listChimneyTypeCheckbox.bind(this);
    }

    /**
    * @return ChimneyTypeCheckbox[...]
    */
    listChimneyTypeCheckbox() {
        const listChimneyTypeCheckbox=  this.state.listChimneyTypeLbl.map((chimneyTypeLbl, i) =>
          <ChimneyTypeCheckbox
              key={i}
              chimneyTypeLbl={chimneyTypeLbl}
          />
        );
        return listChimneyTypeCheckbox;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sectionContainer}>
                    <Text>Typ av skorsten</Text>
                    {this.listChimneyTypeCheckbox()}
                </View>

                <View style={styles.sectionContainer}>
                    <Text>Över tak</Text>
                    <OfRoof />
                </View>
                <View style={styles.sectionContainer}>
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

const styles = StyleSheet.create({
    container: {
        padding: globalStyles.PADDING,
    },
    sectionContainer: {
        paddingHorizontal: globalStyles.PADDING,
    },
});
