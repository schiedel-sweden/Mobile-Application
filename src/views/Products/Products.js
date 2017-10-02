import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text, ActivityIndicator, List, AppRegistry  } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header/Header';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this),
        this.state = {
            visible1: true,
            visible2: true,
            visible3: true,
            isLoading: true,
            data: [],
            testData: [{"id":1,"material":"144029","designation":"50378073","gross":"*KOMPLETT BESLAG 0-13GR 1,5M 46X46 SORT","currency":"SEK","price_factor":"ST","unit_price":"4169","is_deleted":0,"deleted_at":null}],
        };
    }


    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        fetch("https://jeremydanner.com/api/excel/10")
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
            this.setState({data: responseData, isLoading: false});
          })
          .catch((error) => {
              console.log(error);
          })

    };

    setVisibleMat1 = () => {
        this.setState({
            visible1: !this.state.visible1
        });
    }
    setVisibleMat2 = () => {
        this.setState({
            visible2: !this.state.visible2
        });

    }
    setVisibleMat3 = () => {
        this.setState({
            visible3: !this.state.visible3
        });
    }

render() {
    if (this.state.isLoading) {
        <View>
            <ActivityIndicator />
            <Text>LOADING</Text>
        </View>

    }
    console.log(this.state.data);

    var ids = []
    // material "144029"
    var mat1 = []
    // material "148918"
    var mat2 = []
    // material "144026"
    var mat3 = []

    for(let i = 0; i < this.state.data.length; i++) {
        // compare current index material, and push to the correct array
        if (this.state.data[i].material == "144029") {
            mat1.push(this.state.data[i].designation);

        }
        if (this.state.data[i].material == "148918") {
            mat2.push(this.state.data[i].designation);
        }
        if (this.state.data[i].material == "148918") {
            mat3.push(this.state.data[i].designation);
        }
        ids.push(this.state.data[i].id);
    }

    return (

        <View style={styles.container}>

            <View style={styles.items1}>
                <TouchableOpacity
                onPress={this.setVisibleMat1}
                style={styles.button}>
                    <Text>Toggle material 1 items</Text>
                </TouchableOpacity>
                <Text>material one</Text>
                {this.state.visible1 &&<View>
                {mat1.map(function(object, i){
                    return <Text>{object}</Text>;
                })}
                </View>}


            </View>

            <View style={styles.items2}>
                <TouchableOpacity
                onPress={this.setVisibleMat2}
                style={styles.button}>
                    <Text>Toggle materal 2 items</Text>
                </TouchableOpacity>
                <Text>material 2 </Text>
                {this.state.visible2 &&<View>
                {mat2.map(function(object){
                    return <Text>{object}</Text>;
                })}
                </View>}


            </View>
            <View style={styles.items3}>
                <TouchableOpacity
                onPress={this.setVisibleMat3}
                style={styles.button}>
                    <Text>Toggle material 3 items</Text>
                </TouchableOpacity>
                <Text>materal 3</Text>
                {this.state.visible3 &&<View>
                {mat3.map(function(object, i){
                    return <Text>{object}</Text>;
                })}
                </View>}


            </View>


        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    items1: {
        alignItems: "center",
        height: 100,
        backgroundColor: "#FF0000",
    },
    items2: {
        alignItems: "center",
        height: 100,
        backgroundColor: "#00FF00",
    },
    items3: {
        alignItems: "center",
        height: 100,
        backgroundColor: "#0000FF",
    }
});

AppRegistry.registerComponent('Products', () => Products);
