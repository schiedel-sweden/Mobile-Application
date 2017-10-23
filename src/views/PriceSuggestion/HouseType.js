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
                {/* Image is HUGE, scale down?*/}
                <View style={[{ flex: 1 }]}>
                    <Image
                        style={styles.image}
                        source={require('../../images/hus-skiss.png')}
                    />
                </View>

                <View>
                    <IncNumberInput piper={'antal piper: '} />

                    <NumberInput
                        pretext={'Höjd över tak (H2)'}
                        postfix={this.state.postfix}
                    />

                    <NumberInput
                        pretext={'Total Höjd (H1)'}
                        postfix={this.state.postfix}
                    />

                    <NumberInput pretext={'Takvinkel (V)'} postfix={'grader'} />
                </View>

                <View />
                <Text>Hustyp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: globalStyles.DEVICE_WIDTH,
        height: globalStyles.DEVICE_HEIGHT * 0.4,
    },
});
