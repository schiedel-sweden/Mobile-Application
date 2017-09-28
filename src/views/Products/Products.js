import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator, List, AppRegistry  } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header/Header';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [{"id":1}],
            testData: [{"id":1,"material":"144029","designation":"50378073","gross":"*KOMPLETT BESLAG 0-13GR 1,5M 46X46 SORT","currency":"SEK","price_factor":"ST","unit_price":"4169","is_deleted":0,"deleted_at":null}],
        };
    }


    // https://api.dev/api/excel/10
    // http://date.jsontest.com/

    // componentWillMount() {

        // return fetch('https://api.dev/api/excel/2', {
        //     method: 'GET',
        //     headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //     },
        //
        //     })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         let ds = new ListView.DataSource();
        //         this.setState({
        //           isLoading: false,
        //           dataSource: ds.cloneWithRows(responseJson),
        //       })
        //       console.log(ds);
        //
        //     })
        //     .done();


    //}

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        fetch("https://jeremydanner.com/api/excel/10")
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
            this.setState({data: responseData});
          })
          .catch((error) => {
              console.log(error);
          })

    };


render() {
    if (this.state.isLoading) {
        <View>
            <ActivityIndicator />
            <Text>LOADING</Text>
        </View>

    }
    console.log(this.state.data);

    var ids = []

    for(let i = 0; i < this.state.data.length; i++) {
        ids.push(this.state.data[i].id);
    }

    return (

        <View style={styles.container}>
            <Header />

        <Text>oh bananas</Text>
        {/* flatlist gets data from the state not sure if item[0] is right... */}
        <Text>{ids}</Text>

        <Text>Hello</Text>


        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('Products', () => Products);
