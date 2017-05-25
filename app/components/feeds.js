import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Feeds extends Component {

  componentDidMount() {
    this.props.getFeeds();
  }

  render() {
    return (
      <View>
        <Text>This is Feed One</Text>
      </View>
    );
  }
}