import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,

} from 'react-native';

export default class Nav extends React.Component {

    openPriceView() {
        alert('Prisförslag');
    }
    openProductView() {
        alert('Produkter');
    }
    openRetailerView() {
        alert('Återförsäljare');
    }
    openAboutView() {
        alert('Om oss!');
    }
    openContactView() {
        alert('Kontakta Oss');
    }
    handleClick(){
        alert('Button clicked!');
    }
    render() {

        const buttonTextColor = '#B9B9B9';

        return (
            <View style={styles.nav}>

                <TouchableOpacity onPress={this.openPriceView}>
                    <Image source={require('../../images/icons/prisforslag.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.openProductView}>
                    <Image source={require('../../images/icons/produkter.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.openRetailerView}>
                    <Image source={require('../../images/icons/aterforsaljare.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.openAboutView}>
                    <Image source={require('../../images/icons/om-oss.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.openContactView}>
                    <Image source={require('../../images/icons/kontakta-oss.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>






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
    images: {
        height: 56,
        width: 56,
    }
});
