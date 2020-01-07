import React, {Component} from 'react';
import {callApi} from '../../Utilities/utility';
import {includes, orderBy} from 'lodash';

export default class TimelineBase extends Component {
  constructor() {
    super();
    this.state = {
      AllPosts: [],
      filteredPost: [],
      username: '',
      query: {
        filter: {},
        fields: {},
        option: {skip: 0, limit: 0, sort: {uploadTime: -1}},
      },
    };
  }
  componentDidMount() {
    callApi(
      'get',
      `timeline/getPostData?params=${JSON.stringify(this.state.query)}`,
    )
      .then(response => {
        this.setState({AllPosts: response.data, filteredPost: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClick = pictureId => {
    this.props.navigation.navigate('SinglePost', {id: pictureId});
  };
  handleDrawer = () => {
    this.props.navigation.openDrawer();
  };

  handleRightDrawer = () => {
    this.props.navigation.openDrawer();
  };
  handleLike = (imageID, Likes) => {
    //console.warn();
    let imageData = {imageId: imageID, userId: this.props.state.user._id};
    if (!includes(Likes, imageData.userId)) {
      callApi('post', 'timeline/Likes', imageData)
        .then(response => {
          this.setState({AllPosts: response.data, filteredPost: response.data});
        })
        .catch(err => {
          console.log('error--', err);
        });
    }
  };

  handleOldest = () => {
    let oldestFirst = orderBy(this.state.AllPosts, 'uploadTime', 'asec');
    this.setState({filteredPost: oldestFirst});
  };

  handleLatest = () => {
    let latestFirst = orderBy(this.state.AllPosts, 'uploadTime', 'desc');
    this.setState({filteredPost: latestFirst});
  };
  handleMostCommented = () => {
    let mostCommented = this.state.AllPosts.sort((a, b) => {
      return b.comment.length - a.comment.length;
    });
    this.setState({filteredPost: mostCommented});
  };

  handleMostLikes = () => {
    let mostLikes = this.state.AllPosts.sort((a, b) => {
      return b.likes.length - a.likes.length;
    });
    this.setState({filteredPost: mostLikes});
  };
}
