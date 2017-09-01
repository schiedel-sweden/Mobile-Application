import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Retailers extends React.Component {
    static navigationOptions = {
        title: 'Återförsäljare',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/aterforsaljare.png')}
            style={[styles.icon]}
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
    icon: {
        height: 24,
        width: 24,
    },
});
