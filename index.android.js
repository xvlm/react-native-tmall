/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import Home from "./Home";

class TmallDemo extends Component {

  constructor(props) {
    super(props);
    // registerApp('wxb24c445773822c79');
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    console.log(route, navigator);
    return (
      <Home navigator={navigator} route={route} />
    );
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      

        <Navigator
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            title: '111',
            component: Home
          }}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigator: {
    flex: 1,
  },

});

AppRegistry.registerComponent('TmallDemo', () => TmallDemo);
