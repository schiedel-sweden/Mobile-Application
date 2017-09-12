import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import axios from 'axios';

export default class Products extends Component {
    state = {
        data: [],
    };
    // https://api.dev/api/excel/10
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://api.dev/api/excel/10');
        const json = await response.json();
        console.log(json);
        this.setState({ data: json });
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) => <Text>{item[0]}</Text>}
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
