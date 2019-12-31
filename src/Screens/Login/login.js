import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import {Styles, color, centerText} from '../style';

import LoginBase from './loginBase';
//import {setUser} from '../../Redux/actions';

class Login extends LoginBase {
  render() {
    return (
      <ImageBackground
        source={require('../images/nature.jpeg')}
        style={Styles.backgroundImage}>
        <View style={Styles.parent}>
          <Text style={Styles.text}>Login Form</Text>
          <View style={[Styles.child]}>
            <Image
              source={require('../images/email.jpeg')}
              style={Styles.image}
            />
            <TextInput
              placeholder="email"
              style={{flex: 1}}
              onChangeText={text => this.handleChange('email', text)}
              onSubmitEditing={() => this.password.focus()}
              returnKeyType={'next'}
            />
          </View>
          <View style={[Styles.child]}>
            <Image
              source={require('../images/password.png')}
              style={Styles.image}
            />
            <TextInput
              placeholder="password"
              secureTextEntry={true}
              style={{flex: 1}}
              ref={ref => (this.password = ref)}
              onChangeText={text => this.handleChange('password', text)}
              returnKeyType={'done'}
              onSubmitEditing={this.handleClick}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              Styles.child,
              {
                marginHorizontal: 120,
                backgroundColor: color.blue,
                paddingVertical: 10,
              },
              centerText,
            ]}
            onPress={this.handleClick}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={Styles.error}>{this.state.errMessage}</Text>

          <TouchableOpacity
            style={[
              Styles.child,
              {backgroundColor: color.navyBlue, paddingVertical: 10},
              centerText,
            ]}
            onPress={this.forgotPassword}>
            <Text style={Styles.buttonText}>Forgot password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Styles.child,
              {backgroundColor: color.navyBlue, paddingVertical: 10},
              centerText,
            ]}
            onPress={this.Register}>
            <Text style={Styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  console.warn('State>>>', state);
  return {state};
};
export default connect(mapStateToProps)(Login);
