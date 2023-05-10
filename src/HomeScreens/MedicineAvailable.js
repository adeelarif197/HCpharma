import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Medicineflatlist from '../components/Medicineflatlist'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
    {
        id: 1,
        uri: require('../assets/images/bline.png'),
        title: "B-LINE MEDICAL",
        stock: "In Stock",
        status: "open",
        rating: "4.9",
        name: "basketball",
    },
    {
        id: 2,
        uri: require('../assets/images/ccure.png'),
        title: "C-Cure Pharmacy",
        stock: "In Stock",
        status: "open",
        rating: "4.0",
        name: "Yoga",
    },
    {
        id: 3,
        uri: require('../assets/images/life.png'),
        title: "LIFE PHARMACY",
        stock: "In Stock",
        status: "open",
        rating: "4.3",
        name: "Google",
    },
    {
        id: 4,
        uri: require('../assets/images/hilton.png'),
        title: "HILTON HEALTH CARE",
        stock: "Out of Stock",
        status: "open",
        rating: "3.2",
        name: "basketball",
    },
    {
        id: 5,
        uri: require('../assets/images/cosmos.png'),
        title: "COSMOS PHARMA",
        stock: "In Stock",
        status: "closed",
        rating: "4.3",
        name: "basketball",
    },
    {
        id: 6,
        uri: require('../assets/images/bayer.png'),
        title: "Bayer Medical Pharmacy",
        stock: "Out of Stock",
        status: "open",
        rating: "4.2",
        name: "basketball",
    },
    {
        id: 7,
        uri: require('../assets/images/life.png'),
        title: "LIFE PHARMACY",
        stock: "In Stock",
        status: "open",
        rating: "4.0",
        name: "basketball",
    },
    {
        id: 8,
        uri: require('../assets/images/cosmos.png'),
        title: "COSMOS PHARMA",
        stock: "In Stock",
        status: "closed",
        rating: "4.4",
        name: "basketball",
    },
    {
        id: 9,
        uri: require('../assets/images/bayer.png'),
        title: "Bayer Medical Pharmacy",
        stock: "Out of Stock",
        status: "open",
        rating: "3.0",
        name: "basketball",
    },

];





class MedicineAvailable extends Component {

    render() {
        return (

            <View style={styles.container}>

                <Header title={"Home"} navigation={this.props.navigation} />
                <View style={styles.search} >
                    <Fontisto name="search" style={styles.searchIcon} size={20} color="black" />
                    <TextInput
                        placeholder="Panadol"
                        placeholderTextColor="black"
                        style={styles.searchText}
                    />
                    <AntDesign name="close" style={styles.closeIcon} size={20} color="black" />

                </View>


                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Cart')}>
                    <View style={styles.tip}>
                        <Text style={styles.tipText}>Available at:</Text>
                        <Icon style={styles.tipIcon} name="menu" size={25}></Icon>
                    </View>
                </TouchableOpacity>



                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Medicineflatlist
                            uri={item.uri}
                            name={item.name}
                            title={item.title}
                            rating={item.rating}
                            stock={item.stock}
                            status={item.status}
                        />
                    )}
                    keyExtractor={item => item.id}
                />


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },




    search: {
        height: 45,
        marginTop: 10,
        margin: 10,
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'grey',
        marginVertical: 4,
        marginHorizontal: 25,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        flexDirection: "row",
    },

    searchIcon: {
        marginTop: 8,
        marginLeft: 10,
        color: "grey"
    },

    closeIcon: {
        marginTop: 8,
        marginLeft: 170,
    },

    searchText: {
        marginStart: 20,
    },

    welcome: {
        marginHorizontal: 25,
        flexDirection: "row",
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        // borderColor: 'grey',
        // marginVertical: 4,
        marginTop: 10,
        borderBottomLeftRadius: 60,
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"

    },

    tips: {
        marginHorizontal: 25,
        flexDirection: "row",
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        marginTop: 3,
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"

    },

    wtext1: {
        fontSize: 20,
        fontWeight: "bold"
    },

    wtext2: {
        color: "green"
    },

    tip: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 10
    },

    tipText: {
        flex: 0.9,
        alignItems: "flex-start",
        fontWeight: "bold",
        fontSize: 16,
        color: "green"
    },

    tipIcon: {
        color: "green",
        flex: 0.1,
        alignItems: "flex-end",
    },

    wtext: {
        fontSize: 18,
        fontWeight: "bold"
    },

});




export default MedicineAvailable;


