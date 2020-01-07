import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
import Store from '../../Redux/store';
import {setUser} from '../../Redux/actions';

class AppAuthenticate extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log('token----', AsyncStorage.getItem('tokenID'));
    // AsyncStorage.removeItem('tokenID');
    AsyncStorage.getItem('tokenID')
      .then(data => {
        if (data != null) {
          Store.dispatch(setUser(JSON.parse(data)));
          this.props.navigation.navigate('MainStack');
        } else this.props.navigation.navigate('AppComponent');
      })
      .catch(error => {
        console.log('Error', error);
      });
  }
  render() {
    return <View></View>;
  }
}
let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(AppAuthenticate);
