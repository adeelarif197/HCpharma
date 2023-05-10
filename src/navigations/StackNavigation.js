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
import BottomNavigation from './BottomNavigation';
import Verifycode1 from '../authScreens/Verifycode1';
import Location from '../HomeScreens/Location';
import Maps from '../HomeScreens/Maps';
import NavBar from '../HomeScreens/NavBar';
import ProfileSettings from '../HomeScreens/ProfileSettings';

import Cart from '../HomeScreens/Cart';
import CartDetails from '../HomeScreens/CartDetails';
import Checkout from '../HomeScreens/Checkout';
import OrderProceed from '../HomeScreens/OrderProceed';

import Items from '../HomeScreens/Items';


import Letsgetstarted from '../authScreens/Letsgetstarted'
import Home from '../HomeScreens/Home';

import Laundary from '../HomeScreens/Laundary';
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
        <Stack.Screen name="Laundary" component={Laundary} />
        <Stack.Screen name="Letsgetstarted" component={Letsgetstarted} />
        <Stack.Screen name="Verifycode1" component={Verifycode1} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="NavBar" component={NavBar} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CartDetails" component={CartDetails} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="OrderProceed" component={OrderProceed} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Items" component={Items} />


        {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;