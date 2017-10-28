import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import IncNumberInput from '../../components/NumberInput/IncNumberInput';
import NumberInput from '../../components/NumberInput/NumberInput';
import globalStyles from '../../styles/globalStyles';

export default class HouseType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postfix: 'mm',
            myNumber: '',
        };
    }

    render() {
        return (
            <View>
                <View>
                    {/* prop passed in PriceSuggestion */}
                    <Text>Offertnummer: {this.props.quotNum}</Text>
                </View>
                <View style={styles.container}>
                    {/* Image is HUGE, scale down?*/}
                    <View style={[{ alignItems: 'center', }]}>
                        <Image
                            style={styles.image}
                            source={require('../../images/hus-skiss.png')}
                        />
                    </View>

                    <View style={styles.sectionContainer}>
                        <View style={styles.rowSpaceBetween}>
                            <IncNumberInput piper={'Antal piper: '} />

                            <NumberInput
                                pretext={'Höjd över tak (H2)'}
                                postfix={this.state.postfix}
                            />
                        </View>
                        <View style={styles.rowSpaceBetween}>
                            <NumberInput
                                pretext={'Total Höjd (H1)'}
                                postfix={this.state.postfix}
                            />

                            <NumberInput pretext={'Takvinkel (V)'} postfix={'grader'} />
                        </View>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={globalStyles.h3}>Beräkna total höjd (H1) och (H2)</Text>

                        <View style={styles.rowSpaceBetween}>
                            <NumberInput
                                pretext={'Total Höjd (H4)'}
                                postfix={this.state.postfix}
                            />

                            <NumberInput
                                pretext={'Avstand från mone (A2)'}
                                postfix={this.state.postfix}
                            />
                        </View>

                        <View style={[styles.lblWidth,styles.rowSpaceBetween]}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPress}>
                                <Text>Button</Text>
                            </TouchableOpacity>
                            <View style={{paddingTop: globalStyles.PADDING * 0.65}}>
                                <View style={styles.columnCenter}>
                                    <Text style={globalStyles.h2}>=</Text>
                                </View>
                            </View>
                            <NumberInput
                                style={{width: 140,}}
                                pretext={''}
                                postfix={this.state.postfix}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: globalStyles.PADDING,
        paddingHorizontal: globalStyles.PADDING * 2,
    },
    sectionContainer: {
        paddingVertical: globalStyles.PADDING,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    lblWidth: {
        width: 285,
    },
    button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
        marginTop: globalStyles.PADDING * 0.5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: globalStyles.DEVICE_WIDTH * 0.6,
        height: globalStyles.DEVICE_HEIGHT * 0.3,
    },
});
