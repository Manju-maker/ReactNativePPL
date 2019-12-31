import React, {Component, Fragment} from 'react';
import {View, Text, Button, Image} from 'react-native';

class Page1 extends Component {
  render() {
    console.warn('Props>>>', this.props.navigation);
    return (
      <Fragment>
        <View>
          <Text>This is Page 1</Text>
          <Button
            title="Go Forward"
            onPress={() => this.props.navigation.navigate('Page2')}
          />
          <Text></Text>
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          />
          <Image source={require('./images/dog_PNG50348.png')} />
        </View>
      </Fragment>
    );
  }
}

export default Page1;
