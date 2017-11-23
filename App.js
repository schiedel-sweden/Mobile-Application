import React from 'react';
import {
    AsyncStorage,
    Modal,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
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
                <View style={{ marginTop: 22 }}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        animationType="slide"
                    >
                        <View style={{ marginTop: 50 }}>
                            <Text>Välj marknad / Velg marked</Text>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setLanguage(
                                            !this.state.modalVisible,
                                            'Norska'
                                        );
                                    }}
                                >
                                    <Text>Norska</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
            );
        }
    }
}
