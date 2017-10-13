import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ScrollView,
    RefreshControl,
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
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            matTopics: [{id: 0, tagline: "Toggle material 1 items", ingress: "material one"},
                        {id: 1, tagline: "Toggle material 2 items", ingress: "material two"},
                        {id: 2, tagline: "Toggle material 3 items", ingress: "material tree"}],
            mat1: [],
            mat2: [],
            mat3: [],
            visible1: true,
            visible2: true,
            visible3: true,
            data: [],
            refreshing: false,
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getMaterial = this.getMaterial.bind(this);
    }


    /**
    * @return bool state false
    */
    _onRefresh() {
        this.setState({ refreshing: true });
        this.fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }

    /**
    * @return object data
    */
    componentWillMount() {
        this.fetchData();
    }

    /**
    * @return object data
    */
    fetchData = async () => {
        fetch('https://jeremydanner.com/api/excel/30')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ data: responseData });
                this.getMaterial();
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
    * @return return array
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
    * @return View
    */
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#F9CE3C"
                            progressBackgroundColor="#F9CE3C"
                        />
                    }
                    style={styles.body}
                >
                    {this.state.matTopics.map((topic, i) =>
                      <TouchableBlock key = {i}
                        matTopic={topic}
                        visible={this.state.visible1}
                        mat={this.state.mat1}
                     />)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
});
