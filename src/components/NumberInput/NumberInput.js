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
            myNumber: this.props.myNumber,
        }
    }

    callMe = () => {
        this.props.parentCallback(this.state.myNumber);
    }

    async onChangeText(text) {
        let newText = '';
        let numbers = '1234567890';

        if (text !== '') {
            for(let i = 0; i < text.length; i++) {
                if (numbers.indexOf(text[i]) > -1) {
                    newText = newText + text[i];
                }
                else {
                    // not a number
                    alert("please enter numbers only!");
                }
                await this.setState({myNumber: newText});

            }
        }
        else {
            await this.setState({myNumber: ''});
        }
        this.callMe();


    }




    render() {
        return (
            <View style={
                        [styles.container
                        ,styles.input
                        ,styles.rowSpaceBetween
                        ,styles.borderBottom
                        ,styles.lblWidth
                        ,this.props.style]
                      }>
                <Text>{this.props.pretext}</Text>

                <TextInput
                keyboardType = 'numeric'
                onChangeText = {(text) => this.onChangeText(text)}
                value = {this.state.myNumber}
                />

                <View style={styles.flexRow}>
                    <TextInput
                        style={{width: 40}}
                        keyboardType = 'numeric'
                        onChangeText = {(text) => this.onChangeText(text)}
                        placeholder='0'
                        value = {this.state.myNumber}
                    />

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
    flexRow:{
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#EEEEEE',
    }
});
