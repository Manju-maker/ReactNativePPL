import React, {Component} from 'react';

import {callApi} from '../../Utilities/utility';
import {includes} from 'lodash';

export default class ProfileBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllPosts: [],
      query: {
        filter: {userId: this.props.state.user._id},
        fields: {},
        option: {skip: 0, limit: 0, sort: {uploadTime: -1}},
      },
    };
  }

  componentDidMount() {
    let {firstname, _id} = this.props.state.user;

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

  handlePress = () => {
    this.props.navigation.openDrawer();
  };

  handleLike = (imageID, Likes) => {
    let imageData = {imageId: imageID, userId: this.props.state.user._id};
    if (!includes(Likes, imageData.userId)) {
      callApi('post', 'timeline/Likes', imageData)
        .then(response => {
          this.setState({AllPosts: response.data});
        })
        .catch(err => {
          console.log('error--', err);
        });
    }
  };

  handleClick = pictureId => {
    this.props.navigation.navigate('SinglePost', {id: pictureId});
  };
}
