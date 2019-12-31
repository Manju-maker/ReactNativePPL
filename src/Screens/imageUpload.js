import React, {Component} from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import {Styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

class ImageUpload extends Component {
  render() {
    let {firstname} = this.props.state.user;
    return (
      <View style={Styles.parent}>
        <Text>{firstname}</Text>
      </View>
    );
  }
}
let mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps)(ImageUpload);
