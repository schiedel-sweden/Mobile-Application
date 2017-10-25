import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

export default class IncNumberInput extends React.Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state ={
            myNumber: ''
        }
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
        }
    }

    increment(text) {
        let num = parseInt(this.state.myNumber);

        num = num + 1;

        strNum = num.toString();
        this.setState({
            myNumber: strNum
        })

    }

    decrement(text) {
        let num = parseInt(this.state.myNumber);
        num = num - 1;
        strNum = num.toString();
        this.setState({
            myNumber: strNum
        })

    }


    render() {
        return (
            <View style={
                        [styles.container
                        ,styles.input
                        ,styles.rowSpaceBetween
                        ,styles.borderBottom
                        ,styles.lblWidth,]
                      }>
                <Text>{this.props.piper}</Text>
                <TextInput
                keyboardType = 'numeric'
                onChangeText = {(text) => this.onChangeText(text)}
                value = {this.state.myNumber.toString()}
                />

                <View>
                    <TouchableOpacity
                    onPress={() => this.increment(this.state.myNumber)}>
                        <Text>Inc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => this.decrement(this.state.myNumber)}
                    >
                        <Text>Dec</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: globalStyles.PADDING,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    lblWidth: {
        width: 285,
    },
    input: {
        backgroundColor: '#EEEEEE',
    }
});
