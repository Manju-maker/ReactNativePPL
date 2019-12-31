import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {callApi} from '../../Utilities/utility';
import Store from '../../Redux/store';
import {setUser} from '../../Redux/actions';
export default class LoginBase extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errMessage: '',
    };
  }
  handleChange = (key, text) => {
    this.setState({[key]: text});
  };

  handleClick = () => {
    callApi('post', 'login', this.state)
      .then(response => {
        console.log('response--', response.data);
        if (response.data.length > 0) {
          if (!response.data[0].verify) {
            this.setState({errMessage: 'Verify your email first'});
          } else {
            let userData = {
              _id: response.data[0]._id,
              firstname: response.data[0].firstname,
              email: response.data[1].payload.user,
              token: response.data[1].token,
            };
            AsyncStorage.setItem('tokenID', JSON.stringify(userData));
            Store.dispatch(setUser(userData));
            this.props.navigation.navigate('Timeline');
          }
        } else if (response.status === 204) {
          this.setState({errMessage: 'Invalid Username Or Password'});
        }
      })
      .catch(err => {
        console.log('Error---', err);
      });
  };

  Register = () => {
    this.props.navigation.navigate('Register');
  };
  forgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };
}
