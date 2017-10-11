import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ChimneyType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            choice: '',
            options: ['permeter', 'solid vent', 'etesjepipe', 'rondo'],
        };

        this.touchMethod = this.touchMethod.bind(this);
    }
    touchMethod(i) {
        if (i == 0) {
            this.setState({ choice: 'permeter' });
        }
        if (i == 1) {
            this.setState({ choice: 'solid vent' });
        }
        if (i == 2) {
            this.setState({ choice: 'etesjepipe' });
        }
        if (i == 3) {
            this.setState({ choice: 'rondo' });
        }
    }

    render() {
        return (
            <View>
                <View>
                    {this.state.options.map(function(item, i) {
                        return (
                            <TouchableOpacity
                                onPress={function() {
                                    this.touchMethod(i);
                                }.bind(this)}
                                style={styles.items}
                                key={i}
                            >
                                <Text>{item}</Text>
                                <View>
                                    {i == 0 ? (
                                        <Text>PERMETER</Text>
                                    ) : i == 1 ? (
                                        <Text>SOLID VENT</Text>
                                    ) : i == 2 ? (
                                        <Text>ETESJEPIPE</Text>
                                    ) : i == 3 ? (
                                        <Text>RONDO</Text>
                                    ) : (
                                        <Text>FINNS IKKE</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    }, this)}
                </View>
                <View style={styles.center}>
                    <Text>SKORSTENSTYP</Text>
                    <Text>Current choice:</Text>
                    <Text>{this.state.choice}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    items: {
        alignItems: 'center',
        height: 50,
        backgroundColor: '#EEEEEE',
        margin: 10,
    },
    center: {
        alignItems: 'center',
    },
});
