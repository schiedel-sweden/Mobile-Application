import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ChimneyTypeCheckbox from './Chimney/ChimneyTypeCheckbox';
import OfRoof from './Chimney/OfRoof';
import Options from './Chimney/Options';

export default class Chimney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listChimneyTypeLbl: ["Alternative 1", "Alternative 2"],
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
                    <Text style={globalStyles.h3}>Typ av skorsten</Text>
                    {this.listChimneyTypeCheckbox()}
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={globalStyles.h3}>Över tak</Text>
                    <OfRoof />
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={globalStyles.h3}>Tillval</Text>
                    <Options />
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
        paddingBottom: globalStyles.PADDING,
    },
});
