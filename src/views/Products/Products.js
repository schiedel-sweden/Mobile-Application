import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text,ActivityIndicator } from 'react-native';
import axios from 'axios';
// this is the youtube video https://www.youtube.com/watch?v=IuYo009yc8w

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            testData: [{"id":1,"material":"144029","designation":"50378073","gross":"*KOMPLETT BESLAG 0-13GR 1,5M 46X46 SORT","currency":"SEK","price_factor":"ST","unit_price":"4169","is_deleted":0,"deleted_at":null}],
        };
    }


    // https://api.dev/api/excel/10
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        axios.get('https://api.dev/api/excel/1', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(function() {
                this.setState({isLoading: false});
            })
            .then(function(response) {
                console.log(response.data);
                this.setState({data: response.data, isLoading: false});
            })

            .catch(function(error) {
                console.log("Catch, error: " + error);

            });
    }


render() {
    if (this.state.isLoading) {
        <View>
            <ActivityIndicator />
            <Text>LOADING</Text>
        </View>
    }

    return (

        <View style={styles.container}>
        <Text>oh bananas</Text>
        {/* flatlist gets data from the state not sure if item[0] is right... */}
        <FlatList
        /*Funkar inte, med eller utan [0]*/
        data={this.state.data}
        /*funkar */
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <Text>{item.id}</Text>}
        />


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
