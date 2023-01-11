import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomNavigation = () => {
  const HomeScreen = () => {
    return <Text>Home</Text>;
  };
  const SettingsScreen = () => {
    return <Text>Home</Text>;
  };
  const Message = () => {
    return <Text>Home</Text>;
  };
  const Profile = () => {
    return <Text>Home</Text>;
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="home"
                size={focused ? 25 : 22}
                color={focused ? 'red' : null}
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
                color={focused ? 'red' : null}
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
                color={focused ? 'red' : null}
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
                color={focused ? 'red' : null}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default BottomNavigation;
