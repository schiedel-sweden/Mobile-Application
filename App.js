import React from 'react';
import {
    AsyncStorage,
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';
import globalStyles from './src/styles/globalStyles';
import Navigation from './src/components/Navigation/Navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: false,
            modalVisible: false
        };
    }

    checkLanguage = async () => {
        try {
            await AsyncStorage.getItem('language').then(language => {
                if (language) {
                    return language;
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    componentWillMount = async () => {
        const stateLanguage = await this.state.language;
        const language = await this.checkLanguage().then(language => {
            if (language && !stateLanguage) {
                return this.setState({ language });
            } else {
                return this.setState({ modalVisible: true });
            }
        });
    };

    setLanguage(visible, language) {
        this.setState({ modalVisible: visible, language });
    }

    render() {
        if (this.state.language) {
            return <Navigation />;
        } else {
            return (
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        animationType="slide"
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.buttonsContainer}>
                                <View style={styles.pos}>
                                    <Text style={globalStyles.h2}>
                                        Velg marked / Välj marknad
                                    </Text>
                                </View>
                                <TouchableHighlight
                                    style={styles.buttonSelectUser}
                                    onPress={() => {
                                        this.setLanguage(
                                            !this.state.modalVisible,
                                            'norwegian'
                                        );
                                    }}
                                >
                                    <Text style={styles.buttonText}>Norge</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.buttonSelectUser}
                                    onPress={() => {
                                        this.setLanguage(
                                            !this.state.modalVisible,
                                            'swedish'
                                        );
                                    }}
                                >
                                    <Text style={styles.buttonText}>
                                        Sverige
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        top: 25,
        width: 40,
        zIndex: 2
    },
    modalContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#B9B9B9',
        flex: 1
    },
    buttonsContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: 50
    },
    pos: {
        marginBottom: 60
    },
    buttonSelectUser: {
        backgroundColor: '#F9CE3C',
        borderColor: '#333333',
        borderRadius: 5,
        borderWidth: 3,
        marginBottom: 20,
        marginTop: 20,
        padding: 30,
        width: 300
    },
    buttonText: {
        fontSize: 26,
        textAlign: 'center'
    }
});
