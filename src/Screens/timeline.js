import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Styles, color, centerText} from './style';
import {callApi} from '../Utilities/utility';
import config from '../Config/config';

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      AllPosts: [],
      username: '',
      query: {
        filter: {},
        fields: {},
        option: {skip: 0, limit: 0, sort: {}},
      },
    };
  }
  componentDidMount() {
    callApi(
      'get',
      `timeline/getPostData?params=${JSON.stringify(this.state.query)}`,
    )
      .then(response => {
        this.setState({AllPosts: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClick = userId => {
    console.warn('>>>>Clicked', this.props.navigation);
    this.props.navigation.navigate('SinglePost', {id: userId});
  };
  handleDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={[Styles.parent, {backgroundColor: color.pink}]}>
        <TouchableOpacity onPress={this.handleDrawer}>
          <Icon name="bars" size={40} color="black" />
        </TouchableOpacity>
        <Text style={Styles.text}>Timeline</Text>
        {/* <Text style={Styles.text}>Logout</Text> */}
        <ScrollView>
          {this.state.AllPosts.length > 0 &&
            this.state.AllPosts.map(post => {
              return (
                // <View >

                // </View>
                <TouchableOpacity onPress={() => this.handleClick(post._id)}>
                  <Image
                    source={{
                      uri: `${config.serverURL}/${post.imageupload}`,
                    }}
                    style={[styles.timelineImageStyle]}
                  />
                  <View style={styles.imageData}>
                    <Text style={styles.timelineText}>Category:{post.cat}</Text>
                    <Text style={styles.timelineText}>
                      Username:{post.email}
                    </Text>
                    <Text style={styles.timelineText}>
                      Likes:{post.likes.length}
                    </Text>

                    <Text style={styles.timelineText}>
                      Comment:{post.comment.length}
                    </Text>
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
    borderWidth: 5,
    borderColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 300,
    resizeMode: 'cover',
  },
};
export default Timeline;
