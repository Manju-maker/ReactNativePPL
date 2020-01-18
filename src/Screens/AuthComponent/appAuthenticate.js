import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
import Store from '../../Redux/store';
import {setToken, setUserInfo} from '../../Redux/actions';

class AppAuthenticate extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // console.warn('AsyncStorage----', AsyncStorage.getItem('tokenID'));
    // console.warn('AsyncStorageUserInfo----', AsyncStorage.getItem('userInfo'));
    // AsyncStorage.removeItem('tokenID');
    // AsyncStorage.multiRemove(["tokenID","userInfo"]);
    AsyncStorage.multiGet(['tokenID', 'userInfo'])
      .then(data => {
        console.log("Data>>>",data)
        if (data[0].tokenID && data[1].userInfo != null) {
          Store.dispatch(setToken(JSON.parse(data[0][1])));
          Store.dispatch(setUserInfo(JSON.parse(data[1][1])));
          this.props.navigation.navigate('MainStack');
        } else this.props.navigation.navigate('AppComponent');
      })
      .catch(error => {
        console.log('Error', error);
      });
    this.props.navigation.navigate('AppComponent');
  }
  render() {
    return <View></View>;
  }
}
let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(AppAuthenticate);
