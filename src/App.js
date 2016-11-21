import React, { Component } from 'react';
import { Navigator} from 'react-native';
import Welcome from './scenes/Welcome';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Welcome', index: 0 }}
        renderScene={(route, navigator) => {
          return <Welcome title={route.title} />
        }}
      />
    );
  }
}
