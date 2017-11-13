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
        this.state = {
            text: this.props.text,
        }
    }

    updateState = (newtext) => {
        this.setState({
            text: newtext,
        });
    }

    componentWillReceiveProps = (newprops) => {
        this.setState({
            text: newprops.text,
        });
    }



    render() {
        return (
            <View style={styles.border}>

                <Text>{this.state.text}</Text>

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
