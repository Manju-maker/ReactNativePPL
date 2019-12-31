import {StyleSheet} from 'react-native';
const color = {
  blue: 'blue',
  white: 'white',
  navyBlue: '#9BBA',
  pink: 'pink',
  yellow: '#00ffff',
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
    marginBottom: 20,
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
    marginTop: 10,
    marginLeft: 20,
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
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
    color: 'red',
    textAlign: 'center',
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
