import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Entypo';
import {Styles} from './style';

export default class DrawerContent extends Component {
  handleLogout = () => {
    this.props.navigation.navigate('Logout');
  };

  render() {
    return (
      <View style={[Styles.DrawerContent]}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Timeline')}
          activeOpacity={0.7}
          style={{
            paddingLeft: 10,
            paddingVertical: 10,
            backgroundColor: '#9BBA',
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
          }}>
          <HomeIcon name="home" size={20} color="black" />
          <Text
            style={{marginLeft: 20, textAlign: 'center', fontWeight: 'bold'}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profile')}
          activeOpacity={0.7}
          style={{
            paddingLeft: 10,
            paddingVertical: 10,
            backgroundColor: '#9BBA',
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
          }}>
          <Icon name="solution1" size={20} color="black" />
          <Text
            style={{marginLeft: 20, textAlign: 'center', fontWeight: 'bold'}}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ImageUpload')}
          activeOpacity={0.7}
          style={{
            paddingLeft: 10,
            paddingVertical: 10,
            backgroundColor: '#9BBA',
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
          }}>
          <Icon name="camera" size={20} color="black" />
          <Text
            style={{marginLeft: 20, textAlign: 'center', fontWeight: 'bold'}}>
            Upload Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleLogout}
          activeOpacity={0.7}
          style={{
            paddingLeft: 10,
            paddingVertical: 10,
            backgroundColor: '#9BBA',
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
          }}>
          <Icon name="logout" size={20} color="black" />
          <View>
            <Text
              style={{
                marginLeft: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
