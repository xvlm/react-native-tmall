'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';


var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');


//获取可视窗口的宽高
var { width, height, scale } = Dimensions.get('window');

var itemHeight = 200,
    picFormat = '_640x200xzq75.jpg';
//mui 3.0 slider 规范
//TODO 这种方式不够科学，目前只是实现效果，后续请@遂宇做优化吧
//IP6
if (height === 375) {
    itemHeight = 117;
    picFormat = '_750x234xzq75.jpg';
} else if (height === 414) { //IP6 Plug
    itemHeight = 99.6;
    picFormat = '_1080x260xzq75.jpg';
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    pageIndicator: {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 12,
        bottom: -10,
        flexDirection: 'row'
    }
});


export default class CloverSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: width,
            indicatorColor: '#ffffff',
            inactiveIndicatorColor: '#ffffff',
            timer: 5000,
            api: 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550',
            currentX: 0,
            activePage: 0,
            dataSource: []
        };
    }


    //拉取投放的数据
    fetchData() {
        var me = this;
        fetch(me.state.api)
            .then((response) => response.json())
            .then((responseData) => {
                me.setState({
                    dataSource: responseData.data
                });
            })
            .done(function () {
                me.start();
            });
    }

    start() {
        var me =this;
        var scrollView = this.refs.scrollView;
        var length = this.state.dataSource.length;

        this.timer = setInterval(function () {

            var activePage;

            if ((me.state.activePage + 1) >= length) {
                activePage = 0;
            } else {
                activePage = me.state.activePage + 1;
            }

            var currentX = width * activePage;
            scrollView.scrollResponderScrollTo({x:currentX, y:0});

            me.setState({
                currentX: currentX,
                activePage: activePage
            });

        }, this.state.timer)
    }

    componentDidMount() {
        this.fetchData();
    }

    //TODO 开始滚动时清除timer
    _onScrollBegin(event) {
        this.clearInterval(this.timer);
    }

    _onScrollEnd() {

    }
    //渲染单个图片
    renderItems(data) {

        return data.map(function (item, i) {
            return (
                <Image key={i} style={{ width: width, height: itemHeight,resizeMode: Image.resizeMode.stretch }} source={{ uri: item.img + picFormat }}/>
            );
        })
    }

    render() {
        var data = this.state.dataSource
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimationEnd}
                    // onScrollBeginDrag={this._onScrollBegin}
                    >
                    {this.renderItems(data) }
                </ScrollView>
                {this.renderPageIndicator() }
            </View>
        );
    }

    renderPageIndicator() {
        var indicators = [],
            style;

        for (var i = 0; i < this.state.dataSource.length; i++) {
            style = i === this.state.activePage ? { color: this.props.indicatorColor, opacity: 1 } : { color: this.props.inactiveIndicatorColor, opacity: 0.3 };
            indicators.push(<Text key={i} style={[style, { fontSize: 32 }]}>&bull; </Text>)
        }

        return (
            <View style={styles.pageIndicator}>
                {indicators}
            </View>
        )
    }

    onAnimationEnd(e) {
        var activePage = e.nativeEvent.contentOffset.x / width;
        // console.log(e.nativeEvent)
        this.setState({
            currentX: e.nativeEvent.contentOffset.x,
            activePage: activePage
        });
    }
}
