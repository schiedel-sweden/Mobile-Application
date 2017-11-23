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
            region: false,
            modalVisible: false
        };
    }

    checkRegion = async () => {
        try {
            await AsyncStorage.getItem('region').then(region => {
                if (region) {
                    return region;
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    componentWillMount = async () => {
        const stateRegion = await this.state.region;
        const region = await this.checkRegion().then(region => {
            if (region && !stateRegion) {
                return this.setState({ region });
            } else {
                return this.setState({ modalVisible: true });
            }
        });
    };

    saveRegionToStorage(region) {
        try {
            AsyncStorage.setItem('region', region);
        } catch (e) {
            console.log(e);
        }
    }

    setRegion = async region => {
        const saveRegionToStorage = await this.saveRegionToStorage(region);
        const setRegion = await this.setState({ modalVisible: false, region });
    };

    render() {
        if (this.state.region) {
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
                                        this.setRegion('norway');
                                    }}
                                >
                                    <Text style={styles.buttonText}>
                                        Norsk marked
                                    </Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.buttonSelectUser}
                                    onPress={() => {
                                        this.setRegion('sweden');
                                    }}
                                >
                                    <Text style={styles.buttonText}>
                                        Svenska Marknaden
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
        width: 350
    },
    buttonText: {
        fontSize: 26,
        textAlign: 'center'
    }
});
