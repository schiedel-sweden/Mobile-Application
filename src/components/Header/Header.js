import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import ButtonSwitchUser from '../ButtonSwitchUser/ButtonSwitchUser';

export default class Header extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ButtonSwitchUser />
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../../images/Schiedel_logo.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        // flex: 2,
        justifyContent: 'center',
        height: 85,
        backgroundColor: '#EEEEEE',
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 35,
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
    },
});
