//单个商品坑位
//doc组件生命周期： http://reactjs.cn/react/docs/working-with-the-browser.html#component-lifecycle

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
	TouchableOpacity,
	Text,
	Image,
	View
} from 'react-native';


export default class ItemCell extends Component {

	render() {
		var item = this.props.item;
		// console.log(this.props)

		return (
			<TouchableOpacity onPress={this.props.onSelect}>
				<View style={styles.cellContainer}>

					<Image style={styles.goodImg} source={{ uri: 'http:' + item.img }} />

					<View style={styles.goodInfo}>

						<Text style={styles.goodTit} numberOfLines={2}>{decodeURIComponent(this.encodeURIComponentNew(item.txt))}</Text>

						<View style={styles.goodRow}>
							<Text style={styles.nPrice}><Text style={styles.yen}>&yen; </Text> {item.orderprice || item.price}</Text>
							<Text style={styles.oPrice}>&yen; {item.originalprice}</Text>
						</View>
						<View style={styles.goodExtra}>
							<Text style={styles.goodSold}>{item.realMonthSellNum || 0}人已购买</Text>
							<View style={styles.goodBtnWarp}>
								<Text style={styles.goodBtn}>立即购买</Text>
							</View>

						</View>
					</View>

				</View>
			</TouchableOpacity>
		);
	}


	utf8(wide) {
		var c, s;
		var enc = "";
		var i = 0;
		while (i < wide.length) {
			c = wide.charCodeAt(i++);
			// handle UTF-16 surrogates
			if (c >= 0xDC00 && c < 0xE000) continue;
			if (c >= 0xD800 && c < 0xDC00) {
				if (i >= wide.length) continue;
				s = wide.charCodeAt(i++);
				if (s < 0xDC00 || c >= 0xDE00) continue;
				c = ((c - 0xD800) << 10) + (s - 0xDC00) + 0x10000;
			}
			// output value
			if (c < 0x80) enc += String.fromCharCode(c);
			else if (c < 0x800) enc += String.fromCharCode(0xC0 + (c >> 6), 0x80 + (c & 0x3F));
			else if (c < 0x10000) enc += String.fromCharCode(0xE0 + (c >> 12), 0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
			else enc += String.fromCharCode(0xF0 + (c >> 18), 0x80 + (c >> 12 & 0x3F), 0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
		}
		return enc;
	}

	toHex(n) {
		var hexchars = "0123456789ABCDEF";
		return hexchars.charAt(n >> 4) + hexchars.charAt(n & 0xF);
	}

	encodeURIComponentNew(s) {
		var okURIchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
		var s = this.utf8(s);
		var c;
		var enc = "";
		for (var i = 0; i < s.length; i++) {
			if (okURIchars.indexOf(s.charAt(i)) == -1)
				enc += "%" + this.toHex(s.charCodeAt(i));
			else
				enc += s.charAt(i);
		}
		return enc;
	}

}


// 组件样式
var styles = StyleSheet.create({
    cellContainer: {
        flexDirection: 'row',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        backgroundColor: '#ffffff',
    },
    //左侧商品图
    goodImg: {
		width: 110,
		height: 110,
		marginRight: 15
    },
    //右侧商品信息
    goodInfo: {
		flex: 1,
		flexDirection: 'column'
    },
    goodTit: {
		fontSize: 16,
		height: 40,
		fontWeight: '700',
		color: '#000000',
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
    },
    // 价格
    goodRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 10
    },
    nPrice: {
		fontSize: 18,
		fontWeight: '700',
		marginRight: 10,
		color: '#c40001'
    },
    yen: {
		fontSize: 13
    },
    oPrice: {
		fontSize: 12,
		color: '#b0b0b0'
    },
    // 购买及按钮
    goodExtra: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
    },
    goodSold: {
		color: '#b0b0b0'
    },
    goodBtnWarp: {


		// position : 'absolute',
		// right : 10,
		// top : -7,

		// height : 35,
		borderWidth: 1,
		padding: 5,
		borderColor: '#3164ce',
		borderRadius: 3
    },
    goodBtn: {
		color: '#3164ce'
    }

});