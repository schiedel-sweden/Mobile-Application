import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import axios from 'axios';
// this is the youtube video https://www.youtube.com/watch?v=IuYo009yc8w
export default class Products extends Component {
    state = {
        data: [],
    };
    // https://api.dev/api/excel/10
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        axios
            .get('https://api.dev/api/excel/10', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(responseData => this.setState([(data: responseData)]))
            .catch(function(error) {
                console.log(error);
                throw error;
            });
    };
    /*
const response = await fetch('https://api.dev/api/excel/10');
const json = await response.json();
console.log(json);
this.setState({ data: json[0] });
console.log(this.state);


<FlatList
    data={this.state.data}
    keyExtractor={(x, i) => i}
    renderItem={({ item }) => (
        <Text>{`${item.id} ${item.material}`}</Text>
    )}
/>

*/
    render() {
        return (
            <View style={styles.container}>
                {/* flatlist gets data from the state not sure if item[0] is right... */}
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) => (
                        <Text>{item.id}</Text>
                    )}
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
