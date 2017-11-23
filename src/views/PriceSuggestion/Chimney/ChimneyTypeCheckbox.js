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
            toggle: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCheckbox}>
                    <Checkbox
                      label={this.props.chimneyTypeLbl}
                      checked={this.state.toggle}
                      checkboxStyle={this.state.toggle ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                      onChange={() => this.setState({
                        toggle: !this.state.toggle,
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
