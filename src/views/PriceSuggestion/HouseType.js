import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
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
                <View style={styles.container}>
                    {/* Image is HUGE, scale down?*/}
                    <View style={[{ alignItems: 'center', }]}>
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
export function returnState() {
    return this.state;
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
