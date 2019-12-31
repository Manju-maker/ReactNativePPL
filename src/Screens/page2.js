import React, {Component} from 'react';
import Axios from 'axios';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class Page2 extends Component {
  constructor() {
    super();
    this.state = {pictureData: [], num: 0};
  }
  goBack = () => {
    this.props.navigation.goBack();
  };

  getPosts = e => {
    let query = {
      filter: {},
      fields: {},
      option: {},
    };
    Axios.get(
      `http://192.168.100.172:8081/timeline/getPostData?params=${JSON.stringify(
        query,
      )}`,
    )
      .then(response => {
        console.log('response---', response.data);
        this.setState({pictureData: response.data});
      })
      .catch(err => {
        console.log('err---', err);
      });
  };
  handleClick = () => {
    console.log('Clicked');
    this.props.navigation.navigate('SinglePost');
  };
  render() {
    console.log(this.state.pictureData);
    return (
      <>
        <Text>This is Page 2</Text>
        <Button title="Go BAck" onPress={this.goBack} />
        <Text></Text>
        <Button title="See Post" onPress={this.getPosts} />

        <ScrollView>
          {this.state.pictureData.length > 0 &&
            this.state.pictureData.map(picture => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderWidth: 5,
                    borderColor: 'red',
                  }}>
                  <TouchableOpacity onPress={this.handleClick}>
                    <Image
                      style={{
                        height: 100,
                        width: 100,
                      }}
                      source={{
                        uri: `http://192.168.100.172:8081/${picture.imageupload}`,
                      }}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={{}}>Category-{picture.cat}</Text>
                    <Text style={{}}>Likes-{picture.likes.length}</Text>
                    <Text style={{}}>Username-{picture.email}</Text>
                    <Text>UploadTime-{picture.uploadTime}</Text>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </>
    );
  }
}

export default Page2;
