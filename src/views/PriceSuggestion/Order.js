import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput
} from 'react-native';

import BoxRow from '../../components/GridBoxes/BoxRow';

import Checkbox from 'react-native-checkbox';


export default class Order extends Component {

    // TODO: Loop out BoxRow, save sums in an object in an array in the state
    // {product number: sum}  
    constructor(props) {
        super(props);
        this.state = {
            rebateText: 'Rabatt på totapbeløp',
            shippingText: 'Frakt (kr)',

            kranbil: false,
            plukket: false,
            kjorer: false,

            sum1: 0,
            sum2: 0,
            sum3: 0,
        }
    }
    parentCallbackOne = async (sum) => {
        await this.setState({
            sum1: sum,
        });
        this.setTotalSum();
    }
    parentCallbackTwo = async (sum) => {
        await this.setState({
            sum2: sum,
        });
        this.setTotalSum();
    }
    parentCallbackThree = async (sum) => {
        await this.setState({
            sum3: sum,
        });
        this.setTotalSum();
    }

    setTotalSum = () => {
        let sum1 = this.state.sum1;
        let sum2 = this.state.sum2;
        let sum3 = this.state.sum3;

        let netto = sum1 + sum2 + sum3;
        let moms = netto / 4;
        // if moms is NaN, make it 0
        // should only be needed to be done when first browsing the page
        moms = moms ? moms : 0;

        let total = netto + moms;
        // if total is NaN, make it 0
        // should only be needed to be done when first browsing the page
        total = total ? total : 0;

        this.setState({
            nettoSum: netto,
            totalSum: total,
            moms: moms,
        });


    }

    render() {
        return (
            <View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>NOBBNUMMER</Text>

                    <Text>BESKRIVELSE</Text>

                    <Text>ANTALL</Text>

                    <Text>PRIS</Text>

                    <Text>SUM</Text>

                    <Text>RABATT (%)</Text>
                </View>

                <BoxRow
                    number='12312312'
                    beskrivelse='beskrivelsetext'
                    antal={0}
                    pris={10}
                    sum={this.state.sum1}
                    rabatt={0}
                    parentCallback={this.parentCallbackOne}
                 />

                 <BoxRow
                     number='12312312'
                     beskrivelse='beskrivelsetext'
                     antal={0}
                     pris={15}
                     sum={this.state.sum2}
                     rabatt={0}
                     parentCallback={this.parentCallbackTwo}
                  />

                  <BoxRow
                      number='12312312'
                      beskrivelse='beskrivelsetext'
                      antal={0}
                      pris={10}
                      sum={this.state.sum3}
                      rabatt={0}
                      parentCallback={this.parentCallbackThree}
                   />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                    <TextInput
                        style={{flex: 1, backgroundColor: "#d3d3d3"}}
                        onChangeText={(text) => this.setState({rebateText: text})}
                        value={this.state.rebateText}
                        />

                    <TextInput
                        style={{flex: 1, backgroundColor: "#d3d3d3"}}
                        onChangeText={(text) => this.setState({shippingText: text})}
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
                        label="Leveres med kranbil"
                        checked={this.state.kranbil}
                        checkboxStyle={this.state.kranbil ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.setState({kranbil: !this.state.kranbil})} />

                    <Checkbox
                        label="Plukket"
                        checked={this.state.plukket}
                        checkboxStyle={this.state.plukket ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.setState({plukket: !this.state.plukket})} />

                    <Checkbox
                        label="Kjører"
                        checked={this.state.kjorer}
                        checkboxStyle={this.state.kjorer ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.setState({kjorer: !this.state.kjorer})} />

                </View>


                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text>DATO: </Text>
                        {/* date should not be taken locally (preferrably) as changing the time on the device may cause issues */}
                        <Text>*insert todays date*</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text>Ønsket leveringsdato: </Text>
                        {/* how much is minimum allowed choice?  */}
                        <Text>*insert date dropdown picker*</Text>
                    </View>

                </View>

                <View>
                    <Text>BESKJED</Text>

                    <TextInput
                        style={{flex: 1, backgroundColor: "#d3d3d3"}}
                        onChangeText={(text) => this.setState({beskjed: text})}
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

        );
    }
}
