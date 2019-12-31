import React, {Component} from 'react';

import {callApi} from '../../Utilities/utility';
export default class RegisterBase extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      errMessage: '',
    };
  }
  handleSubmit = (key, text) => {
    this.setState({[key]: text});
  };

  handlePress = e => {
    let data = this.state;
    callApi('post', 'registerUser', data)
      .then(response => {
        if (response.data.length > 0) {
          this.props.navigation.navigate('Login');
        } else {
          this.setState({errMessage: 'email already registered'});
        }
      })
      .catch(err => {
        console.log('registerErr--', err);
      });
  };
  login = () => {
    this.props.navigation.navigate('Login');
  };
}
