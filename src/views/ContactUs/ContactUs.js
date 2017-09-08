import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';

export default class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: 'Ditt namn', email: 'Din email', message: 'Ditt meddelande', empty: '' };

    }

    handlePress() {
        alert("pressed");
    }


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Kontakta oss</Text>
                </View>

                <View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </View>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                 />
                 <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                     onChangeText={(email) => this.setState({email})}
                     value={this.state.email}
                  />

                  <TextInput
                      multiline={true}
                      style={{height: 200, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(message) => this.setState({email})}
                      value={this.state.message}
                   />



                <Button
                    title="Skicka"
                    onPress={this.handlePress}/>

                <View>
                    <Image />

                    <Image />

                    <Image />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,

    },
    icon: {
        height: 24,
        width: 24,
    },
    text: {
        alignSelf: 'stretch',
        fontSize: 26,
        textAlign: 'center',
    },
});
