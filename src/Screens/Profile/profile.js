import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UserIcon from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import {connect} from 'react-redux';
import {Styles} from '../style';
import config from '../../Config/config';
import ProfileBase from './profileBase';

class Profile extends ProfileBase {
  render() {
    return (
      <View style={Styles.parent}>
        <TouchableOpacity onPress={this.handlePress}>
          <Icon name="bars" size={40} color="black" />
        </TouchableOpacity>
        <Text style={Styles.text}>
          Welcome to your Profile {this.props.state.userInfo.firstname}
        </Text>
        <ScrollView>
          {this.state.AllPosts.length > 0 &&
            this.state.AllPosts.map(post => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.handleClick(post._id)}
                  style={{
                    marginBottom: 20,
                  }}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <UserIcon
                      name="user"
                      size={20}
                      color="black"
                      style={{marginLeft: 10}}
                    />
                    <Text style={[Styles.timelineText, {fontSize: 15}]}>
                      {post.email}
                    </Text>
                    <Text
                      style={{position: 'absolute', right: 5, fontSize: 10}}>
                      {moment(post.uploadTime).format('MMMM Do YYYY h:mm:ss')}
                    </Text>
                  </View>
                  <Image
                    source={{
                      uri: `${config.serverURL}/${post.imageupload}`,
                    }}
                    style={[Styles.timelineImageStyle]}
                  />
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => this.handleLike(post._id, post.likes)}
                      style={Styles.imageButtonStyle}>
                      <Text style={Styles.imageButtonText}>
                        {post.likes.length}
                        Like
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        this.props.navigation.navigate('SinglePost', {
                          id: post._id,
                        })
                      }
                      style={Styles.imageButtonStyle}>
                      <Text style={Styles.imageButtonText}>
                        {post.comment.length}
                        Comment
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(Profile);
