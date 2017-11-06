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
        this.state={
            number: this.props.number,
        }

    }
    increment = () => {
        this.setState({
            number: this.state.number +1,
        });
    }

    decrement = () => {
        this.setState({
            number: this.state.number - 1,
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={this.decrement}>
                    <Text style={styles.minus}>-</Text>
                </TouchableOpacity>

                <TextInput
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
        maxWidth: 200,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

});
