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
        borderTopWidth: 1,
        // backgroundColor is black to make it esey to style
        // backgroundColor: '#EEEEEE',
        backgroundColor: '#000',
        borderColor: '#B9B9B9',
        alignSelf: 'stretch',
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        bottom: 0,
    },
    navButton: {
        color: '#B9B9B9',
    }
});
