import React from 'react';
import Nav from '../../components/Nav/Nav'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Products extends React.Component {
    static navigationOptions = {
        title: 'Produkter',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/produkter.png')}
            style={[styles.icon]}
          />
      ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Produkter yo</Text>

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
