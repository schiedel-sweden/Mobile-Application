import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

export default class GridBox extends Component {


    /**
    * component needs the following props:
    * text: String
    * closeable: Boolean
    * style: StyleSheet
    */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.border}>
                <Text>{this.props.text}</Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    border: {
        maxWidth: 200,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
});
