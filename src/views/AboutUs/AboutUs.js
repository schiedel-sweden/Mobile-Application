import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import globalStyles from '../../styles/globalStyles';

export default class AboutUs extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.childContainer}>
                    <View style={styles.grandContainer}>
                        <View
                            style={[
                                styles.infoBox,
                                {
                                    paddingTop:
                                        globalStyles.DEVICE_HEIGHT * 0.05,
                                },
                            ]}
                        >
                            <Text style={[styles.infoText, { fontSize: 18 }]}>
                                "Sed ut perspiciatis unde omnis iste natus error
                                sit suscipit laboriosam, nisi ut aliquid ex ea
                                commodi?."
                            </Text>
                        </View>
                        <View style={styles.detailsBox}>
                            <Text
                                style={[
                                    styles.detailsText,
                                    { fontWeight: '400' },
                                ]}
                            >
                                quae ab illo inventore veritatis et quasi
                                architecto beatae vitae
                            </Text>
                            <Text
                                style={[
                                    styles.detailsText,
                                    { fontWeight: '100' },
                                ]}
                            >
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et{' '}
                            </Text>
                            <Text
                                style={[
                                    styles.detailsText,
                                    { fontWeight: '100' },
                                ]}
                            >
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi
                                consequatur?
                            </Text>
                        </View>
                    </View>
                    <View style={styles.lastTextBox}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                Quis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae
                                consequatur
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Image
                            style={styles.img}
                            source={require('./footer.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    childContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grandContainer: {
        flex: 5,
        backgroundColor: '#EEEEEE',
        width: globalStyles.DEVICE_WIDTH,
        borderTopWidth: 0.5,
        justifyContent: 'space-around',
    },
    lastTextBox: {
        width: globalStyles.DEVICE_WIDTH,
        height: globalStyles.DEVICE_HEIGHT * 0.12,
        backgroundColor: '#B9B9B9',
        flex: 1,
        justifyContent: 'center',
    },
    img: {
        width: globalStyles.DEVICE_WIDTH,
        height: globalStyles.DEVICE_HEIGHT * 0.4,
    },
    infoBox: {
        width: globalStyles.DEVICE_WIDTH * 0.6,
        marginRight: globalStyles.DEVICE_WIDTH * 0.2,
        marginLeft: globalStyles.DEVICE_WIDTH * 0.2,
        padding: globalStyles.DEVICE_HEIGHT * 0.01,
    },
    infoText: {
        fontWeight: '500',
        textAlign: 'center',
        color: '#333333',
    },
    detailsBox: {
        width: globalStyles.DEVICE_WIDTH * 0.8,
        marginRight: globalStyles.DEVICE_WIDTH * 0.1,
        marginLeft: globalStyles.DEVICE_WIDTH * 0.1,
    },
    detailsText: {
        paddingTop: globalStyles.DEVICE_HEIGHT * 0.02,
        paddingBottom: globalStyles.DEVICE_HEIGHT * 0.02,
    },
});
