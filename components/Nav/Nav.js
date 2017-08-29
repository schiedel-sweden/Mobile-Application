import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Nav extends React.Component {
    render() {
        return (
            <View style={styles.nav}>
                <Text style={styles.navButton}>Prisförslag</Text>
                <Text style={styles.navButton}>Produkter</Text>
                <Text style={styles.navButton}>Återförsäljare</Text>
                <Text style={styles.navButton}>Om oss</Text>
                <Text style={styles.navButton}>Kontakta oss</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#EEEEEE',
        borderColor: '#B9B9B9',
        borderTopWidth: 1,
        bottom:0,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-around',
        left: 0,
        position: 'absolute',
        right: 0,
    },
    navButton: {
        color: '#B9B9B9',
    }
});
