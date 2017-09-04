import React from 'react';
// https://facebook.github.io/react-native/docs/modal.html
import {
    Modal,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

export default class ButtonSwitchUser extends React.Component {
    state = {
      modalVisible: false,
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal style={styles.modal}
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {}}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.hideModalButton} onPress={() => {
                             this.setModalVisible(!this.state.modalVisible)
                        }}>
                            <Text>Hide Modal</Text>
                        </TouchableOpacity>

                        <View style={styles.buttonsContainer}>
                            <Text style={styles.h2}>Växla användare</Text>
                            <TouchableOpacity style={styles.buttonSelectUser} onPress={() => {alert('button pressed!')}}>
                                <Text style={styles.buttonText}>Återförsäljare</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSelectUser} onPress={() => {alert('button pressed!')}}>
                                <Text style={styles.buttonText}>Montör</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSelectUser} onPress={() => {alert('button pressed!')}}>
                                <Text style={styles.buttonText}>Privatperson</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                }}>
                    <Image style={styles.img} source={require('../../images/icons/kontakta-oss.png')} />
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
    img: {
        height: 25,
        width: 25,
    },
    modal: {
        // flex: 1,
    },
    modalContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#B9B9B9',
        flex: 1,
        // opacity: 0.98,
    },
    hideModalButton: {
        alignSelf: 'stretch',
        right: 0,
        top: 25,
    },
    buttonsContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
    },
    h2: {
        color: '#333333',
        fontSize: 26,
        fontWeight: 'bold',
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
});
