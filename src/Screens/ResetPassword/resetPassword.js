import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  TextInput,
} from 'react-native';
import {Styles, color, centerText} from '../style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ResetPassword extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/nature.jpeg')}
        style={{width: null, height: null, flex: 1, opacity: 0.7}}>
        <View style={Styles.parent}>
          <Text style={[Styles.text, {textAlign: 'center'}]}>
            Reset Password
          </Text>
          <View style={[Styles.child, {backgroundColor: color.white}]}>
            <Image
              source={require('../images/password.png')}
              style={Styles.image}
            />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={text => this.handleChange('newPassword', text)}
              onSubmitEditing={() => this.password.focus()}
            />
          </View>
          <View style={[Styles.child, {backgroundColor: color.white}]}>
            <Image
              source={require('../images/password.png')}
              style={Styles.image}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              ref={ref => (this.password = ref)}
              onChangeText={text => this.handleChange('confirmPassword', text)}
              onSubmitEditing={this.handlePress}
            />
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
