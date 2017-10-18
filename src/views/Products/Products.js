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
import MaterialDetail from './MaterialDetail';
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
            mat: [],
            visible1: true,
            data: [],
            refreshing: false,
            isMaterialDetailViewActived: false,
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getMaterial = this.getMaterial.bind(this);
        this.listTouchableBlock = this.listTouchableBlock.bind(this);
        this.setActiveMaterialDetailView = this.setActiveMaterialDetailView.bind(this);
        this.activeView = this.activeView.bind(this);
    }

    /**
    * @return bool state false
    */
    _onRefresh() {
        this.setState({ refreshing: true });
        // temporary -----
        this.setState({
          isMaterialDetailViewActived: false
        });
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
    * @return bool
    */
    setActiveMaterialDetailView(e) {
        e.preventDefault()
          this.setState({
            isMaterialDetailViewActived: !this.state.isMaterialDetailViewActived
          });
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
    }
    /**
    * @return return array
    */
    getMaterial() {
        let ids = [];
        // material "144029"
        let matArr = [];

        for (let i = 0; i < this.state.data.length; i++) {
            // add items to material array
            if (i < 5) {
                matArr.push(this.state.data[i].designation);
            }

            ids.push(this.state.data[i].id);
        }
        this.setState({
            mat: matArr,
        });
    }
    /**
    * @return TouchableBlock[...]
    */
    listTouchableBlock() {
        const listTouchableBlock = this.state.matTopics.map((topic, i) =>
            <TouchableBlock key = {i} matTopic={topic}
            visible={this.state.visible1}
            mat={this.state.mat}
            navigation={this.props.navigation}
            order={i}
            setActiveMaterialDetailView = {this.setActiveMaterialDetailView}/>
        );
        return listTouchableBlock;
    };
    /**
    * @return View
    */
    activeView() {
        return this.state.isMaterialDetailViewActived
          ? <MaterialDetail />
          : this.listTouchableBlock();
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
                    {this.activeView()}
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
