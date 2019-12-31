import React, {Component} from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Styles} from './style';

class Profile extends Component {
  constructor() {
    super();
    this.state = {toggle: false};
  }

  handleDrawers = () => {
    // this.setState({toggle: !this.state.toggle}, () => {
    //   if (this.state.toggle) {
    //     this.props.navigation.openDrawer();
    //   } else {
    //     this.props.navigation.closeDrawer();
    //   }
    // });
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleDrawers}>
          <Icon name="bars" size={40} color="#900" />
        </TouchableOpacity>
        <Text style={{fontSize: 100}}>This.is your Profile</Text>
      </View>
    );
  }
}

export default Profile;
