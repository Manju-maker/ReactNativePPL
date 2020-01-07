import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {Styles} from './style';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {callApi} from '../Utilities/utility';
import Icon from 'react-native-vector-icons/AntDesign';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {photo: null, category: ''};
    console.warn('props of upload---', this.props);
  }

  handlePhoto = () => {
    let options = {noData: true};
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        console.log('Image--', response);
        this.setState({photo: response});
      }
    });
  };

  handleChange = (key, text) => {
    this.setState({[key]: text});
  };

  handlePress = () => {
    let {firstname, _id} = this.props.state.user;
    let {photo} = this.state;
    let formData = new FormData();

    formData.append('userId', _id);
    formData.append('email', firstname);
    formData.append('cat', this.state.category.toUpperCase());
    formData.append('imageupload', {
      uri: this.state.photo.uri,
      type: 'image/jpeg',
      name: this.state.photo.fileName,
      size: this.state.photo.fileSize,
    });

    callApi('post', 'timeline/imageUpload', formData)
      .then(response => {
        this.props.navigation.navigate('Timeline');
      })
      .catch(err => {
        console.log('error--', err);
      });
  };
  handleDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    let {photo} = this.state;
    return (
      <>
        <TouchableOpacity onPress={this.handleDrawer}>
          <Icon name="bars" size={40} color="black" />
        </TouchableOpacity>
        <View style={[Styles.parent]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {photo && (
              <Image
                style={{width: 200, height: 200}}
                source={{uri: photo.uri}}
              />
            )}
            <Button title="choose photo" onPress={this.handlePhoto} />
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              marginHorizontal: 100,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Category"
              onChangeText={text => this.handleChange('category', text)}
            />
          </View>
          <TouchableOpacity
            onPress={this.handlePress}
            style={{
              marginTop: 10,
              backgroundColor: 'blue',
              marginHorizontal: 150,
              paddingVertical: 5,
            }}>
            <Text style={Styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(ImageUpload);
