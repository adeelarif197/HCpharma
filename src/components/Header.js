import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign';



const Header = (props) => {

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <AntDesign name="arrowleft" size={40} style={styles.arrow} onPress={() => { props.navigation.goBack() }}></AntDesign>
                <Text style={styles.headerText}>{props.title}</Text>
                <FontAwesome5 style={styles.cart} name="shopping-cart" size={25}></FontAwesome5>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    arrow: {
        color: "green",
        marginTop: 10,
        marginHorizontal: 10,
    },

    header: {
        marginHorizontal: 17,
        flexDirection: "row",
    },

    headerIcon: {
        color: "green",
        marginTop: 10,
        // marginLeft: 10
        flex: 1,
    },

    headerBell: {
        color: "green",
        marginTop: 15,
        // marginLeft: 10
        flex: 0.4,
    },

    headerText: {
        color: "green",
        marginTop: 13,
        // marginLeft: 70,
        flex: 3,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    },

    cart: {
        color: "green",
        marginTop: 15,
        // marginLeft: 100
        flex: 0.5,
    },


});




export default Header;


