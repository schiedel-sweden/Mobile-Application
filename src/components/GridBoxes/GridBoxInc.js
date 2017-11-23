import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

export default class GridBoxInc extends Component {


    /**
    * component needs the following props:
    * text: String
    * closeable: Boolean
    * style: StyleSheet
    */
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
        }

    }

    increment = async () => {
        await this.setState({
            number: this.state.number +1,
        });
        await this.callMe();
        this.props.onChange();

    }

    decrement = async () => {
        if (this.state.number >= 1) {
            await this.setState({
                number: this.state.number - 1,
            });
            await this.callMe();
            this.props.onChange();
        }

    }

    callMe = () => {
        this.props.parentCallback(this.state.number);
    }




    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={this.decrement}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.textinput}
                    editable={false}
                    value={this.state.number.toString()} />

                <TouchableOpacity
                    onPress={this.increment}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: 90,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    textinput: {
        flex: 1,
    },



});
