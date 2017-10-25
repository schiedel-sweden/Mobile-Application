import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
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
                            <IncNumberInput piper={'antal piper: '} />

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
                    <Text>Hustyp</Text>
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
    rowSpaceBetween:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: globalStyles.DEVICE_WIDTH * 0.6,
        height: globalStyles.DEVICE_HEIGHT * 0.3,
    },
});
