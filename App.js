import {View, Text} from 'react-native';
import React from 'react';
import Sign_In from './src/authScreens/Sign_In';
import LoginInfo from './src/authScreens/LoginInfo';
import Sign_Up from './src/authScreens/Sign_Up';
import Forgot_Password from './src/authScreens/Forgot_Password';
import Email_Check from './src/authScreens/Email_Check';
import Create_Password from './src/authScreens/Create_Password';
import OTP_Verify from './src/authScreens/OTP_Verify';
import StackNavigation from './src/navigations/StackNavigation';
import BottomNavigation from './src/navigations/BottomNavigation';
import Home from './src/HomeScreens/Home';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Home />
      {/* <StackNavigation /> */}
      {/* <BottomNavigation /> */}
    </View>
  );
};

export default App;
