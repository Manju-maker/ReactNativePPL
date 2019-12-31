import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Styles, color, centerText} from '../style';
import ForgotPasswordBase from './forgotPasswordBase';

export default class ForgotPassword extends ForgotPasswordBase {
  render() {
    return (
      <ImageBackground
        source={require('../images/nature.jpeg')}
        style={{width: '100%', height: '100%', flex: 1, opacity: 0.7}}>
        <View style={Styles.parent}>
          <View>
            <Text style={[Styles.text, {textAlign: 'center'}]}>
              Forgot Password
            </Text>
            <View style={[Styles.child, {backgroundColor: color.white}]}>
              <Image
                source={require('../images/email.jpeg')}
                style={Styles.image}
              />
              <TextInput
                placeholder="Email"
                onChangeText={text => this.handleChange('email', text)}
                onSubmitEditing={this.handlePress}
              />
            </View>
          </View>
          <Text style={Styles.error}>{this.state.errMessage}</Text>

          <TouchableOpacity
            onPress={this.handlePress}
            activeOpacity={0.7}
            style={[
              Styles.child,
              {
                backgroundColor: color.yellow,
                paddingVertical: 10,
                marginHorizontal: 80,
                marginTop: 20,
              },
              centerText,
            ]}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
