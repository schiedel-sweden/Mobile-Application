// TODO: Add the icons for the Button
// TODO: Add right button with styles and text
// TODO: Check on iPad
import React from 'react';
import Nav from '../../components/Nav/Nav'
import Hero from './Hero';
import ButtonLargeGetPrice from './ButtonLargeGetPrice';
import {
    StatusBar,
    ScrollView,
    Text,
    StyleSheet,
    View,
} from 'react-native';

export default class RetailerHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Välkommen',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.heroWrapper}>
                    <Hero />
                </View>
                <View style={styles.buttonLargeWrapper}>
                    <ButtonLargeGetPrice />
                    <ButtonLargeGetPrice />
                </View>
                <Nav />
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
