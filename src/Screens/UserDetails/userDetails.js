import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Styles, color} from '../style';
import {connect} from 'react-redux';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {callApi} from '../../Utilities/utility';
class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.state.userInfo.firstname,
      lastname: this.props.state.userInfo.lastname,
      email: this.props.state.userInfo.email,
      _id: this.props.state.userInfo._id,
    };
  }
  handleChangeText = (key, val) => {
    this.setState({
      [key]: val,
    });
  };

  handleSubmit = () => {
    let {tokenId} = this.props.state.token;
    let headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${tokenId}`,
    };

    callApi('post', 'updateUserDetails', this.state, headers)
      .then(response => {
        if(response.status===200){
          this.props.navigation.navigate("Timeline")
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View style={[Styles.parent,{backgroundColor:color.navyBlue}]}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Icon name="bars" size={40} color="black" />
        </TouchableOpacity>
        <ScrollView>

          <Text style={Styles.text}>User Details</Text>
          <View style={styles.userDetailsParent}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>
              Firstname
            </Text>
            <TextInput
              value={this.state.firstname}
              onChangeText={text => this.handleChangeText('firstname', text)}
              style={{fontSize: 15, marginTop: 10}}
            />
          </View>
          <View style={styles.userDetailsParent}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>
              Lastname
            </Text>
            <TextInput
              value={this.state.lastname}
              onChangeText={text => this.handleChangeText('lastname', text)}
              style={{fontSize: 15, marginTop: 10}}
            />
          </View>
          <View style={styles.userDetailsParent}>
            <Text style={{fontSize: 20, fontWeight: 'bold',paddingBottom:10}}>
              Email
            </Text>
            <Text style={{fontSize: 15, marginTop: 10,paddingBottom:10}}>
              {' '}
              {this.state.email}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ChangePassword');
            }}
            style={{
              marginTop: 20,
              backgroundColor: color.blue,
             marginHorizontal:80,
              paddingVertical: 5,
              marginLeft:80,
              borderColor:'black',
              borderWidth:2
              
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              ChangePassword
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={{
              marginTop: 20,
              backgroundColor: color.blue,
              marginHorizontal:80,
              paddingVertical: 5,
              borderColor:'black',
              borderWidth:2
             
            }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {state};
};

const styles = {
  userDetailsParent: {
    marginLeft:10,
    paddingVertical: 10,
    borderBottomWidth: 0.7,
    borderBottomColor: 'grey',
  },
};
export default connect(mapStateToProps)(UserDetails);
