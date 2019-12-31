import React, {Component} from 'react';

import {callApi} from '../../Utilities/utility';
export default class ForgotPasswordBase extends Component {
  constructor() {
    super();
    this.state = {email: '', errMessage: ''};
  }

  handleChange = (key, text) => {
    this.setState({[key]: text});
  };
  handlePress = () => {
    console.log('Clicked');
    // this.props.navigation.replace('ResetPassword');
    console.log('Submit', this.state.email);
    callApi('post', 'forgot', this.state)
      .then(response => {
        console.log('forgotPassword---', response.data);
        if (response.data.length > 0) {
          console.log('Navigate', this.props.navigation);
          this.props.navigation.navigate('ResetPassword', {
            email: this.state.email,
          });
        } else {
          this.setState({errMessage: 'email not registered'});
        }
      })
      .catch(err => {
        console.log('forgotPAsswordErr--', err);
      });
  };
}
