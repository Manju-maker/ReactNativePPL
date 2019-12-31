import React, {Component} from 'react';

import {callApi} from '../../Utilities/utility';
export default class ResetPasswordBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.navigation.state.params.email,
      newPassword: '',
      confirmPassword: '',
      errMessage: '',
    };
  }

  handleChange = (key, text) => {
    this.setState({[key]: text});
  };

  handlePress = () => {
    if (this.state.newPassword === this.state.confirmPassword) {
      let userDetails = {
        email: this.state.email,
        password: this.state.newPassword,
      };

      callApi('post', 'reset', userDetails)
        .then(response => {
          this.props.navigation.navigate('Login');
        })
        .catch(err => {
          console.log('forgotPAsswordErr--', err);
        });
    } else {
      this.setState({errMessage: 'Password mismatched'});
    }
  };
}
