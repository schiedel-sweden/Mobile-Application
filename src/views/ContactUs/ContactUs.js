import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyles from '../../styles/globalStyles';

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            empty: '',
            ingress: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        };
    }
    handlePress() {
        alert('pressed');
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header />
                <KeyboardAvoidingView behavior="padding" style={styles.body}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTitle}>
                            <Text style={globalStyles.h2}>Kontakta oss</Text>
                        </View>
                        <View style={styles.headerIngress}>
                            <Text style={globalStyles.p}>
                                {this.state.ingress}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={name => this.setState({ name })}
                            placeholder="Ditt namn"
                            autoCapitalize="words"
                            returnKeyLabel="next"
                            selectionColor="#F9CE3C"
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={email => this.setState({ email })}
                            placeholder="Din epost adress"
                            autoCapitalize="none"
                            returnKeyLabel="next"
                            selectionColor="#F9CE3C"
                            keyboardType="email-address"
                        />
                    </View>
                    <View>
                        <TextInput
                            multiline={true}
                            numberOfLines={8}
                            style={styles.textAria}
                            onChangeText={message => this.setState({ message })}
                            placeholder="Ditt meddelande"
                            returnKeyLabel="send"
                            selectionColor="#F9CE3C"
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            onPress={this.handlePress}
                            style={styles.button}
                        >
                            <Text>Skicka!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerWrapper}>
                        <View>
                            <Text>IMAGE</Text>
                        </View>
                        <View>
                            <Text>IMAGE</Text>
                        </View>
                        <View>
                            <Text>IMAGE</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B9B9B9',
    },
    body: {
        padding: globalStyles.PADDING,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        marginBottom: globalStyles.PADDING,
    },
    headerIngress: {
        marginBottom: globalStyles.PADDING,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        marginVertical: 10,
    },
    textAria: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        marginVertical: 10,
    },
    buttonWrapper: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        paddingVertical: 12,
        paddingHorizontal: 17,
        backgroundColor: '#F9CE3C',
        marginVertical: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
    },
});
