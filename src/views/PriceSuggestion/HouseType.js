import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

import IncNumberInput from '../../components/NumberInput/IncNumberInput';

import NumberInput from '../../components/NumberInput/NumberInput';

export default class HouseType extends Component {
    constructor(props) {
        super(props);
        this.state={
            postfix: 'mm',
            myNumber: '',
        }
    }

    render() {
        return (
            <View>
                <View>
                    {/* prop passed in PriceSuggestion */}
                    <Text>Offertnummer: {this.props.offNum}</Text>
                </View>
                {/* Image is HUGE, scale down?*/}
                <View>
                    <Image style={styles.image} source={require('../../images/hus-skiss.png')} />
                </View>

                <View>

                    <IncNumberInput piper={'antal piper: '}/>

                    <NumberInput pretext={'Höjd över tak (H2)'} postfix={this.state.postfix} />

                    <NumberInput pretext={'Total Höjd (H1)'} postfix={this.state.postfix} />

                    <NumberInput pretext={'Takvinkel (V)'} postfix={'grader'} />

                </View>

                <View>

                </View>
                <Text>Hustyp</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {

        width: 600,
        height: 350,
    }
});
