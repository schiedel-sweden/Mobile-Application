import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Image,
} from 'react-native';
import Checkbox from 'react-native-checkbox';

import GridBox from '../../components/GridBoxes/GridBox';
import GridBoxInc from '../../components/GridBoxes/GridBoxInc';
import BoxRow from '../../components/GridBoxes/BoxRow';

import { QUOT_NUMBER } from '../../components/redux-items/actions.js';

import { returnState } from './HouseType.js';




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

    // add callback functions
    sendCallback = (sum, antal, number) => {
        let stateMarker = this.state.rowItems;
        for(let i = 0; i < this.state.rowItems.length; i++) {
            if (number === this.state.rowItems[i].number) {
                stateMarker[i].sum = sum;
                stateMarker[i].antal = antal;
                this.setState({stateMarker});
            }
        }
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

            {/* chosen chimney */}
                <View>
                    <Text>Din pipe</Text>
                    <Text>{this.state.pipe}</Text>
                </View>
            {/* information from hustyp page */}
                <View>
                    <Text>Angitte mått:</Text>

                    <View>
                        <Text>Høyde gulv pipetopp</Text>
                        <Text>xxxx mm</Text>
                    </View>

                    <View>
                        <Text>Takvinkel: </Text>
                        {/* insert info from HouseType*/}
                        <Text>{this.state.roofAngle}</Text>
                    </View>

                    <View>
                        <Text>Ytterelement: </Text>
                        {/* Dont know where this info comes from */}
                    </View>

                    <View>
                        <Text>Utsparningsmål: </Text>
                        {/* Dont know where this info comes from */}
                    </View>

                    <View>
                        <Text>Höjd över tak: </Text>
                        {/* H2 from HouseType */}
                        <Text>{this.state.heightAboveRoof}</Text>
                    </View>

                    <View>
                        <Text>Total høyde: </Text>
                        {/* h1 from HouseType */}
                        <Text>{this.state.totalHeight}</Text>
                    </View>

                    <View>
                        <Text>Forningsrør: </Text>
                        {/* Dont know where this info comes from */}
                    </View>

                    <View>
                        <Text>Andre: </Text>
                    </View>

                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>NOBBNUMMER</Text>

                        <Text>BESKRIVELSE</Text>

                        <Text>ANTALL</Text>

                        <Text>PRIS</Text>

                        <Text>SUM</Text>

                        <Text>RABATT (%)</Text>
                    </View>
                    <View>
                        {this.state.rowItems.map((item, index) => {
                            return <BoxRow
                                        key={index}
                                        number={item.number}
                                        beskrivelse='beskrivelsetext'
                                        antal={item.antal}
                                        pris={item.pris}
                                        sum={item.sum}
                                        rabatt={0}
                                        parentCallback={this.sendCallback} />
                        })}
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

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

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>NETTO</Text>
                            {/* total sum of all above */}
                            <Text>{this.state.nettoSum}</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>MOMS (25%)</Text>
                            {/* 25% of the total sum */}
                            <Text>{this.state.moms}</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>SUM</Text>
                            {/* total sum of all above */}
                            <Text>{this.state.totalSum}</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
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

                    <View>
                        <Text>BESKJED</Text>

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

        );
    }
}
