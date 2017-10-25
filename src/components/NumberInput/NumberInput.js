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




    render() {
        return (
            <View style={
                        [styles.container
                        ,styles.input
                        ,styles.flexDirectionRow
                        ,styles.borderBottom
                        ,styles.lblWidth,]
                      }>
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
    container: {
        paddingTop: globalStyles.PADDING,
    },
    flexDirectionRow: {
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
