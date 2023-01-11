import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../HomeScreens/Home';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const SettingsScreen = () => {
    return <Text>Setting Screen</Text>;
  };
  const Message = () => {
    return <Text>Message Screen</Text>;
  };
  const Profile = () => {
    return <Text>Profile Screen</Text>;
  };
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={focused ? 25 : 22}
              color={focused ? 'orange' : null}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="profile"
              size={focused ? 25 : 22}
              color={focused ? 'orange' : null}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="message1"
              size={focused ? 25 : 22}
              color={focused ? 'orange' : null}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="user-o"
              size={focused ? 25 : 22}
              color={focused ? 'orange' : null}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});
export default BottomNavigation;
