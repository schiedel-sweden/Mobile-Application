import React from 'react';
import ButtonSwitchUser from '../../components/ButtonSwitchUser/ButtonSwitchUser';
import Style from '../../styles/globalStyles';
import { View, Text, StyleSheet, Image } from 'react-native';

import globalStyles from '../../styles/globalStyles';

export default class Hero extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ButtonSwitchUser />
                <Image
                    style={styles.img}
                    // source={require('./img/roof_image.png')}
                    // image size is 5mb + fix soon!
                    source={require('./img/roof.png')}
                />
                <View style={styles.logoWrapper}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/Schiedel_logo.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={globalStyles.h1}>Välkomsttext här</Text>
                    <Text style={[globalStyles.p, styles.pos]}>
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
        // bottom: 0,
        // flex: 1,
        // left: 0,
        resizeMode: 'cover',
        // right: 0,
        top: 0,
        flex: 1,
        width: globalStyles.DEVICE_WIDTH,
        height: globalStyles.DEVICE_HEIGHT * 0.4,
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
    pos: {
        marginTop: 10,
        top: 0,
        width: 300,
    },
});
