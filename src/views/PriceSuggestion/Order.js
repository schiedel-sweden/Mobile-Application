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

    constructor(props) {
        super(props);
        this.state = {
            rebateText: 'Rabatt på totapbeløp',
            shippingText: 'Frakt (kr)',

            kranbil: false,
            plukket: false,
            kjorer: false
        }
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
                    antal={1}
                    pris={10}
                    sum={10}
                    rabatt={0}
                 />

                 <BoxRow
                     number='12312312'
                     beskrivelse='beskrivelsetext'
                     antal={1}
                     pris={15}
                     sum={15}
                     rabatt={0}
                  />

                  <BoxRow
                      number='12312312'
                      beskrivelse='beskrivelsetext'
                      antal={1}
                      pris={10}
                      sum={10}
                      rabatt={0}
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
                        <Text>netto sum or smth</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>MOMS (25%)</Text>
                        {/* 25% of the total sum */}
                        <Text>25% av netto</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>SUM</Text>
                        {/* total sum of all above */}
                        <Text>netto plus moms</Text>
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
