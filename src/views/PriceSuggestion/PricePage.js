import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Image,
} from 'react-native';
import NumberPresented from '../../components/NumberInput/NumberPresented';
import NumberInput from '../../components/NumberInput/NumberInput';
import Checkbox from 'react-native-checkbox';

import GridBox from '../../components/GridBoxes/GridBox';
import GridBoxInc from '../../components/GridBoxes/GridBoxInc';
import BoxRow from '../../components/GridBoxes/BoxRow';

import ObjectSummarizer from '../../components/ObjectSummarizer/ObjectSummarizer'

import { QUOT_NUMBER } from '../../components/redux-items/actions.js';

import { returnState } from './HouseType.js';

import globalStyles from '../../styles/globalStyles';
import tcombFormStyle from '../../styles/tcombFormStyle';
import t from 'tcomb-form-native';
import _ from 'lodash';

const Form = t.form.Form;
const stylesheetRow = _.cloneDeep(t.form.Form.stylesheet);

stylesheetRow.fieldset = {
    flexDirection: 'row',
    justifyContent: 'space-between',
};

stylesheetRow.formGroup.normal.flex = 0.48;
stylesheetRow.formGroup.error.flex = 1;

const ShippingForm = t.struct({
    rebateText: t.String,
    shippingText: t.String,
});

const options = {
    auto: 'none',
    stylesheet: stylesheetRow,
    fields: {
        rebateText: {
            placeholder: 'Rabatt på totalsumma (%)',
            error: 'obligatoriskt!'

        },
        shippingText: {
            placeholder: 'Frakt (kr)',
            error: 'obligatoriskt!'
        }
    }
};

export default class PricePage extends Component {

    // TODO: Change from norwegian to english when we start calculating with
    // the data from client
    constructor(props) {
        super(props);
        this.state = {
            totalHeight: returnState.totalHeight,
            heightAboveRoof: returnState.heightAboveRoof,
            roofAngle: returnState.roofAngle,
            shipping: {
                rebateText: '',
                shippingText: '',
            },

            tillbud: props.propState.tillbud,
            ordrebekreftelse: props.propState.ordrebekreftelse,
            totalsum: props.propState.totalsum,

            andre: '',
            beskjed: '',

            pipe: props.propState.pipe,

            rowItems: props.propState.rowItems,

            nettoSum: props.propState.nettoSum,
            moms: props.propState.moms,
            totalSum: props.propState.totalSum,
        }
        this.updateShipping = this.updateShipping.bind(this);
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

    async updateShipping(value) {
        try {
            await this.setState({
                shipping: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }


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
                        <Text style={globalStyles.h3}>Angitte mått</Text>

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
                            <TextInput
                                style={{flex: 1}}
                                onChangeText={(text) => this.setState(previousState => {
                                    return {
                                        andre: text
                                    }

                                })}
                                value={this.state.andre}
                            />
                        </View>

                        <View style={[styles.borderBottom,{flex:1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING, paddingBottom: globalStyles.PADDING * 0.5}]}>
                            <View style={{flex: 0.18}}>
                                <Text>NOBBNUMMER</Text>
                            </View>
                            <View style={{flex: 0.25}}>
                                <Text>BESKRIVELSE</Text>
                            </View>
                            <View style={{flex: 0.13}}>
                                <Text>ANTALL</Text>
                            </View>
                            <View style={{flex: 0.13}}>
                                <Text>PRIS</Text>
                            </View>
                            <View style={{flex: 0.13}}>
                                <Text>SUM</Text>
                            </View>
                            <View style={{flex: 0.13}}>
                                <Text>RABATT (%)</Text>
                            </View>
                        </View>
                        <View style={{paddingBottom: globalStyles.PADDING * 0.5}}>
                            <View style={[styles.borderBottom,{paddingVertical: globalStyles.PADDING * 0.5}]}>
                                <ObjectSummarizer
                                    propState={this.state}
                                    parentCallback={this.sendCallback}
                                />
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flex: 0.92}}>
                                <Form
                                ref="shippingform"
                                value={this.state.shipping}
                                onChange={this.updateShipping}
                                type={ShippingForm}
                                options={options}
                                />
                            </View>
                            <View style={{paddingTop: 10}}>
                              <View style={[styles.discountButton,{justifyContent: 'flex-end', paddingVertical: 4}]}>
                                  <Image
                                      style={{height: 21, width: 21}}
                                      source={require('../../images/icons/round-arrow.png')} />
                              </View>
                            </View>
                            <View style={{paddingTop: 10}}>
                              <View style={[styles.discountButton,{justifyContent: 'flex-end', paddingVertical: 4}]}>
                                  <Image
                                      style={{height: 21, width: 21}}
                                      source={require('../../images/icons/add.png')} />
                              </View>
                            </View>
                        </View>

                        <View style={[styles.rowSpaceBetween,{paddingTop: globalStyles.PADDiNG}]}>
                            {/* total sum of all above */}
                            <NumberPresented
                                myNumber={this.state.nettoSum}
                                pretext="NETTO"
                                postfix="kr"
                            />
                            {/* 25% of the total sum */}
                            <NumberPresented
                                myNumber={this.state.moms}
                                pretext="MOMS (25%)"
                                postfix="kr"
                            />
                        </View>

                        <View>
                            <NumberPresented
                                myNumber={this.state.totalSum}
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
                                style={{flex: 1}}
                                multiline = {true}
                                numberOfLines = {4}
                                onChangeText={(text) => this.setState(previousState => {
                                    return {
                                        beskjed: text
                                    }

                                })}
                                value={this.state.beskjed}
                            />
                        </View>


                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                      paddingBottom: globalStyles.PADDING * 0.6, paddingTop: globalStyles.PADDING}}>

                            <View style={styles.receiptButton}>
                                <Image
                                    style={{height: 50, width: 50}}
                                    source={require('../../images/save.png')} />
                                <View style={{paddingTop: globalStyles.PADDING * 0.5}}>
                                    <Text style={{fontSize: 24}}>Lagre tillbud</Text>
                                </View>
                            </View>

                            <View style={styles.receiptButton}>
                                <Image
                                    style={{height: 50, width: 50}}
                                    source={require('../../images/printer.png')} />
                                <View style={{paddingTop: globalStyles.PADDING * 0.5}}>
                                    <Text style={{fontSize: 24}}>Skriv ut</Text>
                                </View>
                            </View>


                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: globalStyles.PADDING,}}>

                            <View style={styles.receiptButton}>
                                <Text style={{fontSize: 24}}>Lagre som PDF</Text>
                            </View>

                            <View style={styles.receiptButton}>
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
    discountButton: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    receiptButton: {
        flex: 0.48,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: globalStyles.PADDING * 0.5,
    }
});
