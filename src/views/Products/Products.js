import React, { Component } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';

// https://www.youtube.com/watch?v=IuYo009yc8w

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }


    state = {
        data: []
    }

    componentWillMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://randomuser.me/api?results=1000');
        // const response = await fetch('http://127.0.0.1:8000/api/excel');
        const json = await response.json();
        this.setState({data: json.results});
        // this.setState({data: json});
    }

    render() {
        if (this.state.isLoading) {
            this.state = {
                isLoading: false
            }
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <FlatList
                    data={this.state.data}
                    KeyExtrctor={(x, i) => i}
                    renderItem={({ item }) =>
                    <Text>{`${item.name.first} ${item.name.last}`}</Text>}
                />
            </View>
        );
    }
}
