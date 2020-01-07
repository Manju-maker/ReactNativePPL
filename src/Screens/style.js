import {StyleSheet} from 'react-native';
const color = {
  blue: 'blue',
  white: 'white',
  navyBlue: '#9BBA',
  pink: '#F47373',
  grey: '#697689',
  lightGreen: '#37D67A',
  lightBlue: '#2CCCE4',
  yellow: '#00ffff',
  greyBlack: '#555555',
  lightYellow: '#dce775',
  peach: '#ff8a65',
  purple: '#ba68c8',
};
const font = {};
const centerText = {
  justifyContent: 'center',
  alignItems: 'center',
};
const Styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: color.navyBlue,
    borderColor: 'black',
  },
  child: {
    marginBottom: 10,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: color.white,
    marginHorizontal: 60,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: 10,
  },
  textInput: {flex: 1, marginTop: 5},
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timelineText: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  error: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: '#d14',
    textAlign: 'center',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.7,
  },
  DrawerContent: {
    height: 800,
    backgroundColor: '#9BBA',
  },
});
export {Styles, color, centerText};
