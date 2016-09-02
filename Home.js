/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    Navigator,
    ScrollView,
    View
} from 'react-native';



import ItemList  from './component/ItemList';
import Tabs from'./component/Tabs';
import Cat from'./component/Cat';
import Promotion from'./component/Promotion';
import CloverSlider from'./component/CloverSlider';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cateId: 1
        };
    }

    //更新分类ID
    handleUpdateList(cateId) {
        console.log(this);
        this.setState({
            cateId: cateId
        });
    }


    //渲染头部
    renderHeader() {
        return (
            <View style={{ height: 25, backgroundColor: '#2964dd' }} />
        );
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                {/*{this.renderHeader()}*/}
                <ScrollView stickyHeaderIndices={[4]} >
                    <CloverSlider />
                    <Cat />
                    <Promotion />
                    <View style={{ height: 4, backgroundColor: '#F2F2F2' }} />
                    <Tabs updateCateItem={(cateId) => {
                        console.log(cateId);
                        this.setState({
                            cateId: this.state.cateId
                        });
                    } } />
                    <ItemList cateId={this.state.cateId} />
                </ScrollView>
            </View>
        );
    }
}

    //  <CloverSlider />
    //                 <Cat />
    //                 <Promotion />
    //                 <View style={{ height: 4, backgroundColor: '#F2F2F2' }} />
    //                 <Tabs updateCateItem={this.handleUpdateList} />
    //                 <ItemList cateId={cateId} />