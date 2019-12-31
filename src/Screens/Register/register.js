import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import {Styles, color, centerText} from '../style';
import RegisterBase from './registerBase';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

export default class Register extends RegisterBase {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../images/nature.jpeg')}
          style={Styles.backgroundImage}>
          <View style={Styles.parent}>
            <Text style={Styles.text}>Register Form</Text>
            <View style={[Styles.child, {backgroundColor: color.white}]}>
              <Image
                source={require('../images/username.png')}
                style={Styles.image}
              />
              <TextInput
                placeholder="Username"
                onChangeText={text => this.handleSubmit('username', text)}
                onSubmitEditing={() => this.password.focus()}
                required
              />
            </View>
            <View style={[Styles.child, {backgroundColor: color.white}]}>
              <Image
                source={require('../images/password.png')}
                style={Styles.image}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                ref={ref => (this.password = ref)}
                onChangeText={text => this.handleSubmit('password', text)}
                onSubmitEditing={() => this.email.focus()}
              />
            </View>
            <View style={[Styles.child, {backgroundColor: color.white}]}>
              <Image
                source={require('../images/email.jpeg')}
                style={Styles.image}
              />
              <TextInput
                placeholder="Email"
                onChangeText={text => this.handleSubmit('email', text)}
                ref={ref => (this.email = ref)}
                onSubmitEditing={() => this.firstname.focus()}
              />
            </View>
            <View style={[Styles.child, {backgroundColor: color.white}]}>
              <Image
                source={require('../images/firstname.png')}
                style={Styles.image}
              />
              <TextInput
                placeholder="Firstname"
                onChangeText={text => this.handleSubmit('firstname', text)}
                ref={ref => (this.firstname = ref)}
                onSubmitEditing={() => this.lastname.focus()}
              />
            </View>
            <View style={[Styles.child, {backgroundColor: color.white}]}>
              <Image
                source={require('../images/lastname.png')}
                style={Styles.image}
              />
              <TextInput
                placeholder="Lastname"
                onChangeText={text => this.handleSubmit('lastname', text)}
                ref={ref => (this.lastname = ref)}
                onSubmitEditing={this.handlePress}
              />
            </View>

            <Text style={Styles.error}>{this.state.errMessage}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.handlePress}
              style={[
                Styles.child,
                {
                  marginHorizontal: 120,
                  paddingVertical: 10,
                  backgroundColor: color.blue,
                },

                centerText,
              ]}>
              <Text>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                Styles.child,
                {
                  backgroundColor: color.yellow,
                  paddingVertical: 10,
                  marginHorizontal: 80,
                  marginTop: 20,
                },
                centerText,
              ]}
              onPress={this.login}>
              <Text style={{textAlign: 'center', fontsize: 10}}>
                Already have an Account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
