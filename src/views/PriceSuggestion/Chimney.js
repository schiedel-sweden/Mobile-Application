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
            overRoof: this.props.propState.overRoof,
            options: this.props.propState.options,

        }
        this.listChimneyTypeCheckbox = this.listChimneyTypeCheckbox.bind(this);
        this.overRoofCallback = this.overRoofCallback.bind(this);
    }
    componentWillMount = () => {
        this.setState({
            overRoof: this.props.propState.overRoof,
            options: this.props.propState.options,
        });
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
    callback = () => {
        this.props.parentCallback(this.state);
    }


    async overRoofCallback(response){
        await this.setState({
            overRoof: response,
        });
        this.callback();
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
                    <OfRoof
                        propState={this.state.overRoof}
                        parentCallback={this.overRoofCallback}/>
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
