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
            pipeNumber: '',
            totalHeight: null,
            heightAboveRoof: null,
            roofAngle: null,
        };
        this.numberPipeCallback = this.numberPipeCallback.bind(this);
        this.heightAboveRoofCallback = this.heightAboveRoofCallback.bind(this);
        this.totalHeightCallback = this.totalHeightCallback.bind(this);
        this.roofAngleCallback = this.roofAngleCallback.bind(this);

    }

    parentCallback = () => {
        this.props.parentCallback(this.state);
    }


    componentWillMount = () => {

        this.setState({
            pipeNumber: this.props.propState.pipeNumber,
            totalHeight: this.props.propState.totalHeight,
            heightAboveRoof: this.props.propState.heightAboveRoof,
            roofAngle: this.props.propState.roofAngle,
        })
    }

    componentWillReceiveProps = (newprops) => {
        this.setState({
            pipeNumber: newprops.propState.pipeNumber,
            totalHeight: newprops.propState.totalHeight,
            heightAboveRoof: newprops.propState.heightAboveRoof,
            roofAngle: newprops.propState.roofAngle,
        })
    }
    /* callback that sends state to PriceSuggestion */
    callback = () => {
        this.props.parentCallback(this.state);
    }

    async numberPipeCallback(response){
        try {
            await this.setState({pipeNumber: response});
        }
        catch (error) {
            console.log(error);
        }
        this.callback();
    }
    async heightAboveRoofCallback(response) {
        await this.setState({heightAboveRoof: response});
        this.callback();
    }
    async totalHeightCallback(response) {
        await this.setState({totalHeight: response});
        this.callback();
    }
    async roofAngleCallback(response) {
        await this.setState({roofAngle: response});
        this.callback();
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
                        piper="antal piper: "
                        parentCallback={this.numberPipeCallback}
                        myNumber={this.state.pipeNumber}
                     />

                    <NumberInput
                        pretext="Höjd över tak (H2)"
                        postfix="mm"
                        parentCallback={this.heightAboveRoofCallback}
                        myNumber={this.state.heightAboveRoof}

                    />

                    <NumberInput
                        pretext="Total Höjd (H1)"
                        postfix="mm"
                        parentCallback={this.totalHeightCallback}
                        myNumber={this.state.totalHeight}
                    />

                    <NumberInput
                        pretext="Takvinkel (V)"
                        postfix="grader"
                        parentCallback={this.roofAngleCallback}
                        myNumber={this.state.roofAngle}
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
