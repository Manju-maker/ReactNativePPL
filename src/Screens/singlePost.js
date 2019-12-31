import React, {Component, Fragment} from 'react';
import {View, Text, Button, Image, Dimensions} from 'react-native';
import {Styles, color} from './style';
import {callApi} from '../Utilities/utility';
import config from '../Config/config';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: [],
      query: {
        filter: {_id: this.props.navigation.state.params.id},
        field: {},
        option: {skip: 0, limit: 0, sort: {}},
      },
    };
  }
  componentDidMount() {
    console.log('----', this.props.navigation.state.params.id);
    callApi(
      'get',
      `timeline/getPostData?params=${JSON.stringify(this.state.query)}`,
    )
      .then(response => {
        console.log('response', response.data);
        this.setState({currentPost: response.data[0]});
      })
      .catch(err => {
        console.log('Err--', err);
      });
  }
  render() {
    console.log('Post--', Dimensions.get('window').width);
    return (
      <View style={[Styles.parent, {backgroundColor: color.yellow}]}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fffff',
            width: Dimensions.get('window').width,
          }}>
          <Image
            source={require('./images/username.png')}
            style={{
              marginLeft: 20,
              width: 30,
              height: 30,
              resizeMode: 'cover',
            }}
          />
          <Text style={Styles.timelineText}>
            {this.state.currentPost.email}
          </Text>

          <Text
            style={[{position: 'absolute'}, {right: 0}, Styles.timelineText]}>
            Category:
            {this.state.currentPost.cat}
          </Text>
        </View>
        <Image
          source={{
            uri: `${config.serverURL}/${this.state.currentPost.imageupload}`,
          }}
          style={{
            height: 300,
            width: 300,
            borderWidth: 10,
            borderColor: 'black',
          }}
        />
        <View></View>
      </View>
    );
  }
}
export default SinglePost;
