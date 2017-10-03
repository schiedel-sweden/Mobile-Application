import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const ButtonNav = props => {

        return (

                <TouchableOpacity
                style={props.style}
                onPress={props.onPress}>
                    <View>
                        <Text>{props.tagline}</Text>
                    </View>
                </TouchableOpacity>

        );

}

export default ButtonNav;
