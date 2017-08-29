import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

export default class Nav extends React.Component {

    handleClick(){
        alert('Button clicked!');
    }
    render() {

        const buttonTextColor = '#B9B9B9';

        return (
            <View style={styles.nav}>

                <Button title="Prisförslag"
                    color={buttonTextColor}
                    onPress={this.handleClick}
                />

                <Button title="Produkter"
                    color={buttonTextColor}
                    onPress={this.handleClick}
                />

                <Button title="Återförsäljare"
                    color={buttonTextColor}
                    onPress={this.handleClick}
                />

                <Button title="Om oss"
                    color={buttonTextColor}
                    onPress={this.handleClick}
                />

                <Button title="Kontakta oss"
                    color={buttonTextColor}
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
});
