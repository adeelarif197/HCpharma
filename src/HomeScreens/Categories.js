import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Categoriesflatlist from '../components/Categoriesflatlist'



const DATA = [
    {
        id: 1,
        uri: require('../assets/images/arinac.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 2,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 3,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 4,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 5,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 6,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 7,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 8,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },
    {
        id: 9,
        uri: require('../assets/images/bline.png'),
        title: "Arinac",
        company: "C-Cure Pharmacy",
        name: "Ibuprofen Pseudoephedrine HCl",
        price: "40$",
    },

];





class Categories extends Component {

    render() {
        return (


            <View style={{ flex: 1 }}>



                <AntDesign name="arrowleft" size={40} style={styles.arrow} onPress={() => this.props.navigation.goBack()}></AntDesign>

                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Search Medicine')} style={styles.signUp}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.signUpText}>Tablets</Text>
                        <FontAwesome5 name="tablets" size={17} style={{ textAlign: "center", color: "white", marginTop: 10, marginLeft: 220 }} />
                    </View>
                </TouchableOpacity>

                <View style={styles.container1} >
                    <Fontisto name="search" style={{ marginTop: 8, marginLeft: 15 }} size={20} color="black" />

                    <TextInput
                        placeholderTextColor="grey"
                        placeholder="Search Tablets..."
                        style={{ marginStart: 20, flex: 1 }}
                    />

                </View>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Categoriesflatlist
                            uri={item.uri}
                            title={item.title}
                            name={item.name}
                            company={item.company}
                            price={item.price}
                        />
                    )}
                    keyExtractor={item => item.id}
                />


            </View>

        );
    }
}

export default Categories;


const styles = StyleSheet.create({
    arrow: {
        color: "green",
        marginTop: 10,
        marginHorizontal: 10,
    },
    profile:
    {
        marginTop: 18,
        marginLeft: 0,
        resizeMode: "contain"
    },
    profileborder:
    {
        marginTop: -220,
        marginLeft: 0,

        height: 230,
        width: 370,
    },
    heading: {
        textAlign: "center",
        color: "green",
        fontSize: 40,
        fontWeight: "bold"
    },
    topHeading: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15,
    },
    container: {

        height: 45,
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'grey',
        marginVertical: 5,
        marginHorizontal: 25,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        flexDirection: "row",
    },
    icons: {
        marginTop: 8,
        marginLeft: 15
    },

    text: {
        fontSize: 22,
        textAlign: "center",
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 90

    },
    textInputs: {
        marginStart: 20,
    },
    eyeIcon: {
        marginTop: 8,
        marginRight: 10,
    },
    image: {
        marginTop: 8,
        marginLeft: 65,
        alignItems: "center",
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        height: 130,
        padding: 10,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        marginVertical: 4,
        marginHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomLeftRadius: 60,


    },

    imageView: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        marginVertical: 15,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {

        resizeMode: "contain",
        width: 40,
        height: 40,

    },

    offer: {
        backgroundColor: '#34DE03',
        width: 70,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: -20,
        marginTop: 15
    },

    open: {
        backgroundColor: '#19D54A',
        color: "green",
        width: 70,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    },
    underLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: 130,
        marginBottom: 5
    },
    signUp: {
        marginHorizontal: 25,
        marginTop: 5,
        backgroundColor: 'green',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        height: 40,
        textAlign: "center",
    },
    location: {
        marginTop: 5,
        marginLeft: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'green',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        height: 40,
        textAlign: "center",
    },
    signUpText: {
        color: 'white',
        paddingTop: 9,
        marginLeft: 10,
        fontSize: 16
    },
    locationView: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },

    dp: {
        borderRadius: 300,
        marginLeft: 125,
        marginTop: -170,
        height: 110,
        width: 110
    },
    container1: {
        height: 45,
        margin: 10,
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'grey',
        marginVertical: 4,
        marginHorizontal: 25,
        marginTop: 20,

        borderBottomLeftRadius: 60,

        textAlign: "center",
        flexDirection: "row",
    },
});


