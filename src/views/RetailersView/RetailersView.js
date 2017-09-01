// TODO: Add the icons for the Button
import React from 'react';
import Hero from './Hero';
import ButtonLargeLeft from './ButtonLargeLeft';
import ButtonLargeRight from './ButtonLargeRight';
import {
    StatusBar,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    View,
} from 'react-native';

const iconStyle = require('../../styles/navStyles');

export default class RetailersView extends React.Component {

    static navigationOptions = {
        title: 'Återförsäljare',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/aterforsaljare.png')}
            style={[iconStyle.icon]}
          />
      ),
    };

    render() {
        const iconStyle = require('../../styles/navStyles');
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <View style={styles.heroWrapper}>
                    <Hero />
                </View>
                <View style={styles.buttonLargeWrapper}>
                    <ButtonLargeLeft />
                    <ButtonLargeRight />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    heroWrapper: {
        borderBottomWidth: 2,
        borderColor: '#333333',
        flex: 0.5,
    },
    buttonLargeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.5,
    },
});
