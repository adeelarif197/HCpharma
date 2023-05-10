import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TopFlatlist from '../components/TopFlatlist'
import BottomFlatList from '../components/BottomFlatList'

const DATA = [
    {
      id: 1,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/tablet.png'),
      names: "Tablets",
      uri: require('../assets/images/bline.png'),
      title: "B-LINE MEDICAL",
      rating: "4.9",
    },
    {
      id: 2,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/syrup.png'),
      names: "Syrup",
      uri: require('../assets/images/ccure.png'),
      title: "C-Cure Pharmacy",
      rating: "5.0",
    },
    {
      id: 3,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/surgical.png'),
      names: "Surgical Items",
      uri: require('../assets/images/bline.png'),
      title: "B-LINE MEDICAL",
      rating: "4.9",
    },
    {
      id: 4,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/injection.png'),
      names: "Injections",
      uri: require('../assets/images/ccure.png'),
      title: "C-Cure Pharmacy",
      rating: "4.9",
    },
    {
      id: 5,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/syrup.png'),
      names: "Syrup",
      uri: require('../assets/images/bline.png'),
      title: "B-LINE MEDICAL",
      rating: "2.9",
    },
    {
      id: 6,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/surgical.png'),
      names: "Surgical Items",
      uri: require('../assets/images/ccure.png'),
      title: "C-Cure Pharmacy",
      rating: "3.9",
    },
    {
      id: 7,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/tablet.png'),
      names: "Tablets",
      uri: require('../assets/images/bline.png'),
      title: "B-LINE MEDICAL",
      rating: "5.0",
    },
    {
      id: 8,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/injection.png'),
      names: "Injections",
      uri: require('../assets/images/ccure.png'),
      title: "C-Cure Pharmacy",
      rating: "4.9",
    },
    {
      id: 9,
      image: require('../assets/images/mask.png'),
      icon: require('../assets/images/surgical.png'),
      names: "Surgical Items",
      uri: require('../assets/images/bline.png'),
      title: "B-LINE MEDICAL",
      rating: "5.0",
    },
  
  ];


export default class Items extends Component {
  render() {
    return (
      <View>
         <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <BottomFlatList uri={item.uri} name={item.name} title={item.title}/>
            )}
            keyExtractor={item => item.id}
          />
      </View>
    )
  }
}