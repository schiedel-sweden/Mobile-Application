import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

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
                    <Text style={globalStyles.h2}>
                        Produkter
                    </Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={globalStyles.p, styles.pos}>
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
        borderLeftWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    icon: {
        height: 65,
        margin: 25,
        width: 65,
    },
    pos: {
        marginTop: 15,
        textAlign: 'center',
        width: 210,
    },
});
