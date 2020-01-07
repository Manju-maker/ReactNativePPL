import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Logout from './logout';
import Timeline from './Timeline/timeline';
import SinglePost from './SinglePost/singlePost';
import DrawerContent from './drawerContent';
import ImageUpload from './imageUpload';
import Profile from './Profile/profile';
const MainStack = createStackNavigator(
  {
    Timeline: Timeline,
    SinglePost: SinglePost,
    Logout: Logout,
    ImageUpload: ImageUpload,
    Profile: Profile,
  },
  {
    initialRouteName: 'Timeline',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
const DrawerNavigator = createDrawerNavigator(
  {
    MainStack: {screen: MainStack},
  },
  {
    initialRouteName: 'MainStack',
    minSwipeDistance: 50,
    drawerWidth: 200,
    contentComponent: DrawerContent,
  },
);
export default createAppContainer(DrawerNavigator);
