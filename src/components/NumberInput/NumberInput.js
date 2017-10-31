import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

export default class NumberInput extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            myNumber: ''
        }
    }

    callMe = () => {
        this.props.parentCallback(this.state.myNumber);
    }

    onChangeText(text) {
        let newText = '';
        let numbers = '1234567890';

        for(let i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                // not a number
                alert("please enter numbers only!");
            }
            this.setState({myNumber: newText})
            this.callMe();
        }
    }




    render() {
        return (
            <View style={styles.input}>
                <Text>{this.props.pretext}</Text>
                <TextInput
                keyboardType = 'numeric'
                onChangeText = {(text) => this.onChangeText(text)}
                value = {this.state.myNumber.toString()}
                />

                <View>
                    <Text>{this.props.postfix}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EEEEEE',
    }
});
