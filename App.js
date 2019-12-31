/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import StackNavigator from './src/Screens/appNavigator';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
export default App;
