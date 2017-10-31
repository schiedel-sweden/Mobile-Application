import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import IncNumberInput from '../../components/NumberInput/IncNumberInput';
import NumberInput from '../../components/NumberInput/NumberInput';
import globalStyles from '../../styles/globalStyles';

import { changeNumber } from '../../components/redux-items/actions.js';


export default class HouseType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postfix: 'mm',
            myNumber: '',
            totalHeight: null,
            heightAboveRoof: null,
            roofAngle: null,
        };
    }

    parentCallback = () => {
        this.props.parentCallback(this.state);
    }


    componentWillReceiveProps = (newprops) => {
        this.setState({
            postfix: newprops.propState.postfix,
            myNumber: newprops.propState.myNumber,
            totalHeight: newprops.propState.totalHeight,
            heightAboveRoof: newprops.propstate.heightAboveRoof,
            roofAngle: newprops.propState.roofAngle,
        })
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
                    <IncNumberInput
                        piper={'antal piper: '}
                     />

                    <NumberInput
                        pretext={'Höjd över tak (H2)'}
                        postfix={'mm'}
                        parentCallback={this.heightAboveRoofCallback}

                    />

                    <NumberInput
                        pretext={'Total Höjd (H1)'}
                        postfix={'mm'}
                        parentCallback={this.totalHeightCallback}
                    />

                    <NumberInput
                        pretext={'Takvinkel (V)'}
                        postfix={'grader'}
                        parentCallback={this.roofAngleCallback}
                    />
                </View>

                <View />
                <Text>Hustyp</Text>
            </View>
        );
    }
}
export function returnState() {
    return this.state;
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: globalStyles.DEVICE_WIDTH,
        height: globalStyles.DEVICE_HEIGHT * 0.4,
    },
});
