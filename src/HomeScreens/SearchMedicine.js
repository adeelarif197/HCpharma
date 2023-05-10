import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import SearchMedicineList from '../components/SearchMedicineList'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
    {
        id: 1,
        uri: require('../assets/images/panadol.png'),
        title: "Panadol",
        price: "3$",
        name: "Paracetamol",
    },
    {
        id: 2,
        uri: require('../assets/images/panadol.png'),
        title: "Panadol extra",
        price: "4$",
        name: "Paracetamol Caffeine",
    },
    {
        id: 3,
        uri: require('../assets/images/panadol.png'),
        title: "Panadol cf",
        price: "2$",
        name: "Paracetamol pseudoephedrine hydrochloride",
    },
    {
        id: 4,
        uri: require('../assets/images/syrups.png'),
        title: "Panadol forte Syrup",
        price: "10$",
        name: "Paracetamol",
    },
    {
        id: 5,
        uri: require('../assets/images/drops.png'),
        title: "Panadol syrup",
        price: "11$",
        name: "Paracetamol",
    },

];





class SearchMedicine extends Component {

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
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Medicine Available')}>
                        <Icon style={styles.closeIcon} name="menu" color="green" size={25}></Icon>
                    </TouchableOpacity>


                </View>



                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <SearchMedicineList
                            uri={item.uri}
                            name={item.name}
                            title={item.title}
                            price={item.price}
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
        // marginLeft: 170,
        flex: 1,

    },

    searchText: {
        marginStart: 20,
        flex: 3,

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




export default SearchMedicine;


