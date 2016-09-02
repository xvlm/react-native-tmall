//首页不规则商品链接

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    Image,
    Dimensions,
    View
} from 'react-native';


var { width, height, scale } = Dimensions.get('window');

// 组件样式
var styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#eeeeee'
    },
    boxImg: {
        width: 35,
        height: 35,
        marginBottom: 10
    },
    boxItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    boxText: {
        color: '#333333',
        fontSize: 12
    }

});

export default class Promotion extends Component {


    render() {
        return (
            <View style={{ width: width, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eeeeee' }}>
                <View style={{ width:width/2 , flex: 1, borderRightWidth: 1, borderRightColor: '#eeeeee' }}>
                    <Image style={{ height: 110, resizeMode: Image.resizeMode.stretch }} source={{ uri: 'http://gtms01.alicdn.com/tps/i1/TB1nif8HpXXXXc6XVXXAyLxZVXX-320-188.jpg' }} />
                </View>
                <View style={{ width:width/2,flex: 1 }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#eeeeee' }}>
                        <Image style={{ height: 56, resizeMode: Image.resizeMode.stretch }} source={{ uri: 'http://gtms02.alicdn.com/tps/i2/TB1jnUtHpXXXXX0XVXX5_L1MpXX-320-96.png' }} />
                    </View>
                    <View style={{ flexDirection: 'row', height: 55, backgroundColor: '#ffffff' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightColor: '#eeeeee', borderRightWidth: 1 }}>
                            <Text>快来魅族圈</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>我的T码</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}