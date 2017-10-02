import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native';
import TouchableBlock from './TouchableBlock';
import Header from '../../components/Header/Header';

export default class Products extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        (this.fetchData = this.fetchData.bind(this)),
            (this.state = {
                mat1: [],
                mat2: [],
                mat3: [],
                visible1: true,
                visible2: true,
                visible3: true,
                isLoading: true,
                data: [],
            });
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getMaterial = this.getMaterial.bind(this);
    }

    /**
    * @return fetchData()
    */
    componentWillMount() {
        this.fetchData();
    }

    /**
    * @return setState
    */
    componentDidMount() {
        this.setState({
            isLoading: false,
        });
    }

    /**
    * @return getMaterial()
    */
    fetchData = async () => {
        fetch('https://jeremydanner.com/api/excel/30')
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({ data: responseData });
                this.getMaterial();
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
    * @return arr.push()
    */
    getMaterial() {
        let ids = [];
        // material "144029"
        let mat1Arr = [];
        // material "148918"
        let mat2Arr = [];
        // material "144026"
        let mat3Arr = [];

        for (let i = 0; i < this.state.data.length; i++) {
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

            ids.push(this.state.data[i].id);
        }

        this.setState({
            mat1: mat1Arr,
            mat2: mat2Arr,
            mat3: mat3Arr,
        });
    }

    /**
    * @return setState
    */
    setVisibleMat1 = () => {
        this.setState({
            visible1: !this.state.visible1,
        });
    };

    /**
    * @return setState
    */
    setVisibleMat2 = () => {
        this.setState({
            visible2: !this.state.visible2,
        });
    };

    /**
    * @return setState
    */
    setVisibleMat3 = () => {
        this.setState({
            visible3: !this.state.visible3,
        });
    };

    /**
    * @return View
    */
    render() {
        if (this.state.isLoading) {
            <View>
                <ActivityIndicator />
                <Text>LOADING</Text>
            </View>;
        }

        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.body}>
                    <TouchableBlock
                        onPress={this.setVisibleMat1}
                        tagLine="Toggle material 1 items"
                        ingress="material one"
                        visible={this.state.visible1}
                        mat={this.state.mat1}
                    />
                    {/* <TouchableOpacity
                        onPress={this.setVisibleMat1}
                        style={styles.items1}
                    >
                        <View>
                            <Text>Toggle material 1 items</Text>

                            <Text>material one</Text>
                            {this.state.visible1 && (
                                <View>
                                    {this.state.mat1.map(function(object, i) {
                                        return <Text key={i}>{object}</Text>;
                                    })}
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.setVisibleMat2}
                        style={styles.items2}
                    >
                        <View>
                            <Text>Toggle materal 2 items</Text>
                            <Text>material 2 </Text>

                            {this.state.visible2 && (
                                <View>
                                    {this.state.mat2.map(function(object, i) {
                                        return <Text key={i}>{object}</Text>;
                                    })}
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.setVisibleMat3}
                        style={styles.items3}
                    >
                        <View>
                            <Text>Toggle material 3 items</Text>

                            <Text>materal 3</Text>
                            {this.state.visible3 && (
                                <View>
                                    {this.state.mat3.map(function(object, i) {
                                        return <Text key={i}>{object}</Text>;
                                    })}
                                </View>
                            )}
                        </View>
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {},
});
