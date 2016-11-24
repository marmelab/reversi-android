import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Appear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1}
    ).start();
  }
  render() {
    return (
      <Animated.View style={{opacity: this.state.fadeAnim, transform: [{scale: this.state.fadeAnim}]}}>
        {this.props.children}
      </Animated.View>
    );
  }
}
