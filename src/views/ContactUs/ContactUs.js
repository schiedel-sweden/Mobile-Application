import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

const iconStyle = require('../../styles/navStyles');

export default class ContactUs extends React.Component {
    static navigationOptions = {
        title: 'Kontakta oss',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/kontakta-oss.png')}
            style={[iconStyle.icon]}
          />
      ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Kontakta oss my dude</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        height: 24,
        width: 24,
    },
});
