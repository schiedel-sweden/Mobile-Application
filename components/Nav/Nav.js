import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

export default class Nav extends React.Component {

    handleClick(){
        alert('Button clicked!');
    }
    render() {
        return (
            <View style={styles.nav}>

                <Button title="Prisförslag"
                    style={styles.navButton}
                    onPress={this.handleClick}
                />

                <Button title="Produkter"
                    style={styles.navButton}
                    onPress={this.handleClick}
                />

                <Button title="Återförsäljare"
                    style={styles.navButton}
                    onPress={this.handleClick}
                />

                <Button title="Om oss"
                    style={styles.navButton}
                    onPress={this.handleClick}
                />

                <Button title="Kontakta oss"
                    style={styles.navButton}
                    onPress={this.handleClick}
                />

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
