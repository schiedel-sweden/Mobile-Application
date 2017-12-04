import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Image,
} from 'react-native';
import NumberInput from '../../components/NumberInput/NumberInput';
import Checkbox from 'react-native-checkbox';

import GridBox from '../../components/GridBoxes/GridBox';
import GridBoxInc from '../../components/GridBoxes/GridBoxInc';
import BoxRow from '../../components/GridBoxes/BoxRow';

import ObjectSummarizer from '../../components/ObjectSummarizer/ObjectSummarizer'

import { QUOT_NUMBER } from '../../components/redux-items/actions.js';

import { returnState } from './HouseType.js';

import globalStyles from '../../styles/globalStyles';




export default class PricePage extends Component {

    // TODO: Change from norwegian to english when we start calculating with
    // the data from client
    constructor(props) {
        super(props);
        this.state = {
            totalHeight: returnState.totalHeight,
            heightAboveRoof: returnState.heightAboveRoof,
            roofAngle: returnState.roofAngle,

            rebateText: 'Rabatt på totalsumma (%)',
            shippingText: 'Frakt (kr)',

            tillbud: props.propState.tillbud,
            ordrebekreftelse: props.propState.ordrebekreftelse,
            totalsum: props.propState.totalsum,

            beskjed: '',

            pipe: props.propState.pipe,

            rowItems: props.propState.rowItems,

            nettoSum: props.propState.nettoSum,
            moms: props.propState.moms,
            totalSum: props.propState.totalSum,


        };
    }

    componentWillReceiveProps = async (newprops) => {
        await this.setState(previousState => {
            return {
                pipe: newprops.propState.pipe,
                rowItems: newprops.propState.rowItems,

                nettoSum: newprops.propState.nettoSum,
                moms: newprops.propState.moms,
                totalSum: newprops.propState.totalSum,



                tillbud: newprops.propState.tillbud,
                ordrebekreftelse: newprops.propState.ordrebekreftelse,
                totalsum: newprops.propState.totalsum,
            }


        });

    }

    sendCallback = async (rowItems) => {
        await this.setState({
            rowItems: rowItems.rowItems
        });
        this.setTotalSum();
    }

    setTotalSum = async () => {
        let netto = 0;
        let rowItems = this.state.rowItems;
        for(let i = 0; i < this.state.rowItems.length; i++) {
            netto += rowItems[i].sum
        }
        let moms = netto / 4;
        // if moms is NaN, make it 0
        // should only be needed to be done when first browsing the page
        moms = moms ? moms : 0;

        let total = netto + moms;
        // if total is NaN, make it 0
        // should only be needed to be done when first browsing the page
        total = total ? total : 0;

        await this.setState(previousState => {
            return {
                nettoSum: netto,
                totalSum: total,
                moms: moms,
            }

        });
        this.parentCallback();


    }

    parentCallback = () => {
        this.props.parentCallback(this.state);
    }

    checkBoxCallback = async (type) => {
        switch (type) {
            case "totalsum":
                await this.setState({totalsum: !this.state.totalsum});
                this.parentCallback();
                break;
            case "ordrebekreftelse":
                await this.setState({ordrebekreftelse: !this.state.ordrebekreftelse});
                this.parentCallback();
                break;
            case "tillbud":
                await this.setState({tillbud: !this.state.tillbud});
                this.parentCallback();
                break;

        }
    }


    render () {
        {/*this.testCall();*/}
        return (
            <View >
            {/* offertnummer */}
                <View>
                    <Text>Offertnummer: { QUOT_NUMBER }</Text>
                </View>
                <View style={styles.container}>
                {/* chosen chimney */}
                    <View style={styles.sectionContainer}>
                        <Text style={globalStyles.h3}>Din pipe</Text>
                        <View style={styles.textDescription}>
                            <Text>{this.state.pipe}</Text>
                        </View>
                    </View>
                {/* information from hustyp page */}
                    <View style={styles.sectionContainer}>
                        <Text style={globalStyles.h3}>Angitte mått:</Text>

                        <View style={styles.rowSpaceBetween}>
                            <NumberInput
                                pretext="Høyde gulv pipetopp:"
                                postfix="mm"
                            />
                            <NumberInput
                                pretext="Höjd över tak (H2):"
                                postfix="mm"
                                parentCallback={this.heightAboveRoofCallback}
                                myNumber={this.state.heightAboveRoof}
                            />
                        </View>

                        <View style={styles.rowSpaceBetween}>
                            <NumberInput
                                pretext="Takvinkel:"
                                postfix="°"
                                parentCallback={this.roofAngleCallback}
                                myNumber={this.state.roofAngle}
                            />
                            <NumberInput
                                pretext="Total høyde:"
                                postfix="mm"
                                parentCallback={this.totalHeightCallback}
                                myNumber={this.state.totalHeight}
                            />
                        </View>

                        <View style={styles.rowSpaceBetween}>
                            {/* Dont know where this info comes from */}
                            <NumberInput
                                pretext="Ytterelement:"
                                postfix="cm"
                            />
                            {/* Dont know where this info comes from */}
                            <NumberInput
                                pretext="Forningsrør:"
                                postfix=""
                            />
                        </View>

                        <View style={styles.rowSpaceBetween}>
                            {/* Dont know where this info comes from */}
                            <NumberInput
                                pretext="Utsparningsmål:"
                                postfix="cm"
                            />
                        </View>

                        <View style={styles.textDescription}>
                            <Text>Andre:</Text>
                        </View>

                        <View style={[styles.borderBottom,{flex:1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING}]}>
                            <Text>NOBBNUMMER</Text>

                            <Text>BESKRIVELSE</Text>

                            <Text>ANTALL</Text>

                            <Text>PRIS</Text>

                            <Text>SUM</Text>

                            <Text>RABATT (%)</Text>
                        </View>
                        <View style={styles.borderBottom}>
                            <ObjectSummarizer
                                propState={this.state}
                                parentCallback={this.sendCallback}
                            />
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING}}>

                            <TextInput
                                style={{flex: 1, backgroundColor: "#d3d3d3"}}
                                onChangeText={(text) => this.setState(previousState => {
                                    return {
                                        rebateText: text
                                    }

                                })}
                                value={this.state.rebateText}
                            />

                            <TextInput
                                style={{flex: 1, backgroundColor: "#d3d3d3"}}
                                onChangeText={(text) => this.setState(previousState => {
                                    return {
                                        shippingText: text
                                    }

                                })}
                                value={this.state.shippingText}
                            />
                        </View>

                        <View style={[styles.rowSpaceBetween,{paddingTop: globalStyles.PADDiNG}]}>
                            {/* total sum of all above */}
                            {/*parentCallback={NO callback}
                              myNumber={this.state.nettoSum} issues WARNING*/}
                            <NumberInput
                                pretext="NETTO"
                                postfix="kr"
                            />
                            {/* 25% of the total sum */}
                            {/*parentCallback={NO callback}
                               myNumber={this.state.moms} issues WARNING*/}
                            <NumberInput
                                pretext="MOMS (25%)"
                                postfix="kr"
                            />
                        </View>

                        <View>
                            {/*parentCallback={NO callback}
                               myNumber={this.state.totalSum} issues WARNING*/}
                            <NumberInput
                                pretext="SUM"
                                postfix="kr"
                            />
                        </View>

                        <View style={[styles.borderBottom,{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING*1.5}]}>
                            <Checkbox
                                label="Tillbud"
                                checked={this.state.tillbud}
                                checkboxStyle={this.state.tillbud ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                                onChange={() => this.checkBoxCallback("tillbud")} />

                            <Checkbox
                                label="Ordrebekreftelse"
                                checked={this.state.ordrebekreftelse}
                                checkboxStyle={this.state.ordrebekreftelse ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                                onChange={() => this.checkBoxCallback("ordrebekreftelse")} />

                            <Checkbox
                                label="Vis kun totalsum"
                                checked={this.state.totalsum}
                                checkboxStyle={this.state.totalsum ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                                onChange={() => this.checkBoxCallback("totalsum")} />
                        </View>

                        <View style={styles.textDescription}>
                            <Text>BESKJED:</Text>

                            <TextInput
                                style={{flex: 1, backgroundColor: "#d3d3d3"}}
                                onChangeText={(text) => this.setState(previousState => {
                                    return {
                                        beskjed: text
                                    }

                                })}
                                value={this.state.beskjed}
                            />
                        </View>


                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View>
                                <Image
                                    style={{height: 250, width: 250, backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5,}}
                                    source={require('../../images/save.png')} />
                            </View>

                            <View>
                                <Image
                                    style={{height: 250, width: 250, backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5,}}
                                    source={require('../../images/printer.png')} />
                            </View>


                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>

                            <View style={{backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5, }}>
                                <Text style={{fontSize: 24}}>Lagre som PDF</Text>
                            </View>

                            <View style={{backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5, }}>
                                <Text style={{fontSize: 24}}>Send PDF med e-post</Text>
                            </View>

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
        paddingBottom: globalStyles.PADDING,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    textDescription: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: globalStyles.PADDING,
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
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
    }
});
