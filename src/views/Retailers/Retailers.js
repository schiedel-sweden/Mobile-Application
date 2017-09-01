import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

const iconStyle = require('../../styles/navStyles');

export default class Retailers extends React.Component {
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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Återförsäljare yo dude</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
