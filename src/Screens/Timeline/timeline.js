import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UserIcon from 'react-native-vector-icons/Entypo';
import ThreeVerticalIcon from 'react-native-vector-icons/Entypo';
import {Styles, color, centerText} from '../style';
import config from '../../Config/config';
import {connect} from 'react-redux';
import TimelineBase from './timelineBase';
import CustomButton from '../../Utilities/customComponent';
class Timeline extends TimelineBase {
  render() {
    let buttonComponent = [
      {label: 'Oldest First', onClick: this.handleOldest},
      {label: 'Latest First', onClick: this.handleLatest},
      {label: 'MostLikes', onClick: this.handleMostLikes},
      {label: 'MostCommented', onClick: this.handleMostCommented},
    ];
    return (
      <View style={[Styles.parent, {backgroundColor: color.lightBlue}]}>
        <TouchableOpacity onPress={this.handleDrawer}>
          <Icon name="bars" size={40} color="black" />
        </TouchableOpacity>

        <Text style={Styles.text}>Timeline</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: color.grey,
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          {buttonComponent.map((props, key) => {
            return <CustomButton key={key} {...props} />;
          })}
        </View>
        <ScrollView>
          {this.state.filteredPost.length > 0 &&
            this.state.filteredPost.map(post => {
              return (
                <TouchableOpacity
                  style={{marginBottom: 20}}
                  onPress={() => this.handleClick(post._id)}>
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
                        backgroundColor: color.grey,
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
                        backgroundColor: color.grey,
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

const styles = {
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
  // topButton: {
  //   backgroundColor: 'black',
  //   paddingHorizontal: 7,
  //   borderColor: 'white',
  //   borderWidth: 1,
  // },
  // topButtonText: {color: 'white', fontWeight: 'bold'},
};

let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(Timeline);
