import React from 'react';
import Nav from '../../components/Nav/Nav'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
const iconStyle = require('../../styles/navStyles');

export default class Products extends React.Component {
    static navigationOptions = {
        title: 'Produkter',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/icons/produkter.png')}
            style={[iconStyle.icon]}
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
});
