import React from 'react';
import ButtonSwitchUser from '../../components/ButtonSwitchUser/ButtonSwitchUser';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default class Hero extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ButtonSwitchUser />
                <Image style={styles.img} source={require('./img/roof_image.png')} />
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../../images/Schiedel_logo.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.h1}>Välkomsttext här</Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
    },
    img: {
        bottom: 0,
        flex: 1,
        left: 0,
        resizeMode: 'cover',
        right: 0,
        top: 0,
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        left: 75,
        position: 'absolute',
        top: 150,
    },
    h1: {
        color: '#333333',
        fontSize: 36,
        left: 0,
        marginBottom: 10,
        top: 0,
    },
    text: {
        color: '#333333',
        fontSize: 14,
        left: 0,
        marginTop: 10,
        top: 0,
        width: 300,
    },
});
