import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { QUOT_NUMBER } from '../../components/redux-items/actions.js';

import { returnState } from './HouseType.js';


export default class PricePage extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            totalHeight: returnState.totalHeight,
            heightAboveRoof: returnState.heightAboveRoof,
            roofAngle: returnState.roofAngle,

        };
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
                    <Text>*insert logic for chosen pipe here*</Text>
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
                </View>

                <Text>Prisforslag</Text>
            </View>

        );
    }
}
