import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class PriceSuggestion extends React.Component {
    static navigationOptions = {
        title: 'Prisförslag',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/prisforslag.png')}
            style={[styles.icon]}
          />
      ),
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Prisförslag yo</Text>

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
