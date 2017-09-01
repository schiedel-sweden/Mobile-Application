import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class ButtonLargeRight extends React.Component {
    render() {

        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image
                      source={require('../../images/icons/produkter.png')}
                      style={styles.icon}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.h2}>
                        Produkter
                    </Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.h4}>
                        Kolla in vårt sortiment där du kan finna alla våra
                        skorstnar och
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#333333',
        borderRightWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    icon: {
        height: 65,
        margin: 30,
        width: 65,
    },
    h2: {
        color: '#333333',
        fontSize: 24,
        margin: 10,
        textAlign: 'center',
    },
    h4: {
        color: '#333333',
        fontSize: 14,
        margin: 10,
        textAlign: 'center',
        width: 210,
    },
});
