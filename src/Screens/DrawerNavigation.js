import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Profile from './profile';
import Logout from './logout';
import ImageUpload from './imageUpload';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
const drawerNavigator = createDrawerNavigator(
  {
    Profile: {
      screen: Profile,
      //   navigationOptions: () => ({
      //     header: null,
      //     gestureEnabled: false,
      //   }),
    },
    ImageUpload: {
      screen: ImageUpload,
      //   navigationOptions: () => ({
      //     header: null,
      //     gestureEnabled: false,
      //   }),
    },
    Logout: {
      screen: Logout,
      //   navigationOptions: () => ({
      //     header: null,
      //     gestureEnabled: false,
      //   }),
    },
  },
  {
    initialRouteName: 'Profile',
    minSwipeDistance: 50,
    drawerWidth: 200,
    drawerPosition: 'right',
  },
);
drawerNavigator.navigationOptions = ({}) => {
  swipeEnabled: true;
};
export default createAppContainer(drawerNavigator);
