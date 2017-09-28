import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

import globalStyles from '../../styles/globalStyles';

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            empty: '',
        };
    }
    handlePress() {
        alert('pressed');
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text, globalStyles.h2]}>
                        Kontakta oss
                    </Text>
                </View>

                <View>
                    <Text style={globalStyles.p}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    onChangeText={name => this.setState({ name })}
                    placeholder="Ditt namn"
                    autoCapitalize="words"
                    returnKeyLabel="next"
                    selectionColor="#F9CE3C"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                    placeholder="Din epost adress"
                    autoCapitalize="none"
                    returnKeyLabel="next"
                    selectionColor="#F9CE3C"
                    keyboardType="email-address"
                />

                <TextInput
                    multiline={true}
                    style={styles.textAria}
                    onChangeText={message => this.setState({ message })}
                    placeholder="Ditt meddelande"
                    returnKeyLabel="send"
                    selectionColor="#F9CE3C"
                />

                <Button
                    title="Skicka"
                    onPress={this.handlePress}
                    style={styles.button}
                />

                {/* <View>
                    <Image />

                    <Image />

                    <Image />
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 45,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#fff',
        padding: 15,
        margin: 15,
    },
    textAria: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#fff',
        padding: 15,
        margin: 15,
        flex: 0.3,
    },
    button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#fff',
        padding: 15,
        margin: 15,
    },
});
