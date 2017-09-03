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
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 40}}>
                        <TouchableOpacity onPress={() => {
                             this.setModalVisible(!this.state.modalVisible)
                        }}>
                            <Text>Hide Modal</Text>
                        </TouchableOpacity>
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
});
