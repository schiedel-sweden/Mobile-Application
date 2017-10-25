import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Checkbox from 'react-native-checkbox';
import globalStyles from '../../../styles/globalStyles';

export default class ChimneyTypeCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle1: true,
            toggle2: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCheckbox}>
                    <Checkbox
                      label={this.props.chimneyTypeLbl}
                      checked={this.state.toggle1}
                      checkboxStyle={this.state.toggle1 ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                      onChange={() => this.setState({
                        toggle1: !this.state.toggle1,
                        toggle2: !this.state.toggle2,
                    })} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: globalStyles.PADDING * 0.5,
    },
    containerCheckbox: {
        flexDirection: 'row',
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
});
