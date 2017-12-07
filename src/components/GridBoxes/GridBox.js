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
        flex: 1,
        maxWidth: 200,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 4,
        paddingVertical: globalStyles.PADDING * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
