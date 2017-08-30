import React from 'react';
import App from '../../../App.js';
import {
    StyleSheet,
    View,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,


} from 'react-native';
import {StackNavigator, NavigationAction} from 'react-navigation';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        //const { navigate } = this.props.navigation;

        const buttonTextColor = '#B9B9B9';
        const {navigate} =this.props.navigation;


        return (
            <View style={styles.nav}>

                <TouchableOpacity onPress={() => navigate('PriceSuggestion')}>

                    <Image source={require('../../images/icons/prisforslag.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('Products')}>
                    <Image source={require('../../images/icons/produkter.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('Retailers')}>
                    <Image source={require('../../images/icons/aterforsaljare.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('AboutUs')}>
                    <Image source={require('../../images/icons/om-oss.png')}
                    style={styles.images}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('ContactUs')}>
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
