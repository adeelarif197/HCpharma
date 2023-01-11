import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Sign_In from '../authScreens/Sign_In';
import LoginInfo from '../authScreens/LoginInfo';
import Sign_Up from '../authScreens/Sign_Up';
import Forgot_Password from '../authScreens/Forgot_Password';
import Email_Check from '../authScreens/Email_Check';
import Create_Password from '../authScreens/Create_Password';
import OTP_Verify from '../authScreens/OTP_Verify';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginInfo" component={LoginInfo} />
        <Stack.Screen name="Sign_Up" component={Sign_Up} />
        <Stack.Screen name="Sign_In" component={Sign_In} />
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
        <Stack.Screen name="Email_Check" component={Email_Check} />
        <Stack.Screen name="Create_Password" component={Create_Password} />
        <Stack.Screen name="OTP_Verify" component={OTP_Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
