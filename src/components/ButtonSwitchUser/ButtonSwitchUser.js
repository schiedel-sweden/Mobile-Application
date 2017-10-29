import React from 'react';
import {
    Modal,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    AsyncStorage,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default class ButtonSwitchUser extends React.Component {
    state = {
      modalVisible: false,
      userType: '',
    }

    componentDidMount() {
      AsyncStorage.getItem('userType').then((value) =>
      this.setState({ userType : value }));
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    /**
    * @param String
    */
    setUserType(value) {
      AsyncStorage.setItem('userType', value);
      this.setState({ userType : value });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {}}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.hideModalButton}
                            onPress={() => {
                             this.setModalVisible(!this.state.modalVisible)
                        }}>
                        <Image style={styles.img}
                            source={
                                require('../../images/icons/cross.png')
                            } />
                        </TouchableOpacity>

                        <View style={styles.buttonsContainer}>
                            <View style={styles.pos}>
                                <Text style={globalStyles.h2}>Växla användare</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonSelectUser}
                                onPress={() => {
                                 this.setUserType("retailer")
                                 this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={styles.buttonText}>
                                    Återförsäljare
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSelectUser}
                                onPress={() => {
                                 this.setUserType("constructor")
                                 this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={styles.buttonText}>
                                    Montör
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSelectUser}
                                onPress={() => {
                                 this.setUserType("individual")
                                 this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={styles.buttonText}>
                                    Privatperson
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity style={styles.showModalButton} onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                }}>
                    <Image style={styles.img}
                        source={
                            require('../../images/icons/switch_user.png')
                        } />
                </TouchableOpacity>
            </View>
        );
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
        zIndex: 2,
    },
    modalContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#B9B9B9',
        flex: 1,
        opacity: 0.8,
    },
    hideModalButton: {
        alignItems: 'center',
        flex: 1,
        height: 65,
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        top: 25,
        width: 50,
        zIndex: 2,
    },
    showModalButton: {
        alignItems: 'center',
        flex: 1,
        height: 65,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        width: 50,
        zIndex: 1,
    },
    buttonsContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
    },
    pos: {
        marginBottom: 60,
    },
    buttonSelectUser: {
        backgroundColor: '#F9CE3C',
        borderColor: '#333333',
        borderRadius: 5,
        borderWidth: 3,
        marginBottom: 20,
        marginTop: 20,
        padding: 30,
        width: 300,
    },
    buttonText: {
        fontSize: 26,
        textAlign: 'center',
    },
    img: {
        height: 30,
        width: 30,
    },
});
