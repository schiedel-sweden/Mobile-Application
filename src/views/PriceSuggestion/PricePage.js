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

    constructor(props) {
        super(props);
        this.state =  {
            totalHeight: returnState.totalHeight,
            heightAboveRoof: returnState.heightAboveRoof,
            roofAngle: returnState.roofAngle,

            rebateText: 'Rabatt på totalsumma (%)',
            shippingText: 'Frakt (kr)',

            tillbud: false,
            ordrebekreftelse: false,
            totalsum: false,

            beskjed: '',

            pipe: null,

        };
    }

    componentWillMount = () => {
        this.setState({
            pipe: this.props.propState.pipe,

        });
    }

    componentWillReceiveProps = (newprops) => {
        this.setState({
            pipeNumber: newprops.propState.pipeNumber,

        })
    }

    render() {
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

                    {/* need one of these views for each unique item picked */}
                    {/* might have to make each row one component to simplify some logic, but this is a starting point*/}
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
                            label="Tillbud"
                            checked={this.state.tillbud}
                            checkboxStyle={this.state.tillbud ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                            onChange={() => this.setState({tillbud: !this.state.tillbud})} />

                        <Checkbox
                            label="Ordrebekreftelse"
                            checked={this.state.ordrebekreftelse}
                            checkboxStyle={this.state.ordrebekreftelse ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                            onChange={() => this.setState({ordrebekreftelse: !this.state.ordrebekreftelse})} />

                        <Checkbox
                            label="Vis kun totalsum"
                            checked={this.state.totalsum}
                            checkboxStyle={this.state.totalsum ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                            onChange={() => this.setState({totalsum: !this.state.totalsum})} />

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

            </View>

        );
    }
}
