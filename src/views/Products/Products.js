import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text, ActivityIndicator, List, AppRegistry  } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header/Header';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this),
        this.state = {
            mat1: [],
            mat2: [],
            mat3: [],
            visible1: true,
            visible2: true,
            visible3: true,
            isLoading: true,
            data: [],
            testData: [{"id":1,"material":"144029","designation":"50378073","gross":"*KOMPLETT BESLAG 0-13GR 1,5M 46X46 SORT","currency":"SEK","price_factor":"ST","unit_price":"4169","is_deleted":0,"deleted_at":null}],
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getMaterial = this.getMaterial.bind(this);
    }


    componentWillMount() {
        this.fetchData();


    }

    componentDidMount(){
        this.setState({
            isLoading: false
        })
    }

    fetchData = async () => {
        fetch("https://jeremydanner.com/api/excel/30")
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
            this.setState({data: responseData});
            this.getMaterial();
          })
          .catch((error) => {
              console.log(error);
          });


    };

    getMaterial() {

        var ids = [];
        // material "144029"
        var mat1Arr = [];
        // material "148918"
        var mat2Arr = [];
        // material "144026"
        var mat3Arr = [];



        for(let i = 0; i < this.state.data.length; i++) {

            // add 10 items to each material array
            if (i < 10) {
                mat1Arr.push(this.state.data[i].designation);
            }
            if (i >= 10 && i < 20) {
                mat2Arr.push(this.state.data[i].designation);
            }
            if (i >= 20) {
                mat3Arr.push(this.state.data[i].designation);
            }


            // original logic for material specifics

            // compare current index material, and push to the correct array

            // if (this.state.data[i].material == "144029") {
            //     mat1Arr.push(this.state.data[i].designation);
            //
            // }
            // if (this.state.data[i].material == "148918") {
            //     mat2Arr.push(this.state.data[i].designation);
            // }
            // if (this.state.data[i].material == "148918") {
            //     mat3Arr.push(this.state.data[i].designation);
            // }
            ids.push(this.state.data[i].id);
        }

        this.setState({
            mat1: mat1Arr,
            mat2: mat2Arr,
            mat3: mat3Arr});

    }


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

    return (

        <View style={styles.container}>

                <TouchableOpacity
                onPress={this.setVisibleMat1}
                style={styles.items1}>
                <View>
                    <Text>Toggle material 1 items</Text>

                    <Text>material one</Text>
                    {this.state.visible1 &&<View>
                    {this.state.mat1.map(function(object, i){
                        return <Text key={i}>{object}</Text>;
                    })}
                    </View>}

                </View>

                </TouchableOpacity>






                <TouchableOpacity
                onPress={this.setVisibleMat2}
                style={styles.items2}>
                <View>
                    <Text>Toggle materal 2 items</Text>
                    <Text>material 2 </Text>

                    {this.state.visible2 &&<View>
                    {this.state.mat2.map(function(object, i){
                        return <Text key={i}>{object}</Text>;
                    })}
                    </View>}


                </View>
                </TouchableOpacity>






                <TouchableOpacity
                onPress={this.setVisibleMat3}
                style={styles.items3}>
                <View>
                    <Text>Toggle material 3 items</Text>

                    <Text>materal 3</Text>
                    {this.state.visible3 &&<View>
                    {this.state.mat3.map(function(object, i){
                        return <Text key={i}>{object}</Text>;
                    })}
                    </View>}
                </View>
                </TouchableOpacity>





        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    items1: {
        alignItems: "center",
        height: 250,
        backgroundColor: "#FF0000",
    },
    items2: {

        alignItems: "center",
        height: 250,
        backgroundColor: "#00FF00",
    },
    items3: {

        alignItems: "center",
        height: 250,
        backgroundColor: "#0000FF",
    },

});

AppRegistry.registerComponent('Products', () => Products);
