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
          Welcome to your Profile {this.props.state.user.firstname}
        </Text>
        <ScrollView>
          {this.state.AllPosts.length > 0 &&
            this.state.AllPosts.map(post => {
              return (
                <TouchableOpacity
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
                  </View>
                  <Image
                    source={{
                      uri: `${config.serverURL}/${post.imageupload}`,
                    }}
                    style={[styles.timelineImageStyle]}
                  />
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => this.handleLike(post._id, post.likes)}
                      style={{
                        marginLeft: 10,
                        backgroundColor: 'blue',
                        borderBottomStartRadius: 20,
                      }}>
                      <Text
                        style={{
                          paddingHorizontal: 20,
                          paddingVertical: 5,
                          fontWeight: 'bold',
                        }}>
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
                      style={{
                        marginLeft: 10,
                        backgroundColor: 'blue',
                        borderBottomStartRadius: 20,
                      }}>
                      <Text
                        style={{
                          paddingHorizontal: 20,
                          paddingVertical: 5,
                          fontWeight: 'bold',
                        }}>
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

const styles = StyleSheet.create({
  timelineText: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  imageData: {
    backgroundColor: '#999BBA',
    height: 100,
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  timelineImageStyle: {
    borderWidth: 2,
    borderColor: 'yellow',
    width: Dimensions.get('window').width - 4,
    height: Dimensions.get('window').height - 300,
    resizeMode: 'cover',
  },
});

let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(Profile);
