import React, { Component } from 'react';
import {
    ActivityIndicator,
    ListView,
    Text,
    View,
    StyleSheet } from 'react-native';

import axios from 'axios';


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isReady: false,
            dataSource: ds,
        }
    }
    componentWillMount() {
        axios.get('https://api.dev/api/excel/10', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        .then((response) => response.json())

        .then((responseData) => {
            this.setState({data: responseData, isReady: true});
        })
        .catch(function (error) {
            console.log(error);
        })

        .done();

    }

  render() {

    return (

        <View style={styles.container}>
            <Text>Pretext</Text>
            <Text>{this.state.data[0]["material"]]}</Text>
            <Text>Hej</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
    },
});
