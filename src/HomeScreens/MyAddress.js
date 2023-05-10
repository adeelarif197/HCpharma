import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';




class MyAddress extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>


                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Nav Bar')} >
                        <AntDesign name="arrowleft" size={40} style={styles.headerIcon} onPress={() => this.props.navigation.goBack()}></AntDesign>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>My Addressess</Text>

                </View>

                <View style={styles.container}>

                    <View style={styles.imageView}>
                        <Entypo name="location-pin" style={styles.image} size={40} color="green" />
                    </View>

                    <View style={{ marginTop: 20, marginLeft: -20 }}>
                        <Text style={{ fontSize: 30, color: "green", fontWeight: "bold" }}>HOME</Text>
                        <Text style={{ color: "grey" }}>Street No.2, Abbasia Town</Text>
                        <Text style={{ color: "grey" }}>Rahim Yar Khan, 64200</Text>
                    </View>

                    <View>
                        <Text style={styles.offer}>Default</Text>
                    </View>

                </View>


                <View style={styles.container}>

                    <View style={styles.imageView}>
                        <Entypo name="location-pin" style={styles.image} size={40} color="grey" />
                    </View>

                    <View style={{ marginTop: 20, marginLeft: -20 }}>
                        <Text style={{ fontSize: 30, color: "green", fontWeight: "bold" }}>WORK</Text>
                        <Text style={{ color: "grey" }}>3rd Flour, Century Tower</Text>
                        <Text style={{ color: "grey" }}>Rahim Yar Khan, 64200</Text>
                    </View>

                    <View>
                        <AntDesign name="delete" style={{ marginTop: 35, marginLeft: 10, }} size={40} color="grey" />
                    </View>

                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Categories')} style={styles.signUp}>
                    <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                        <Ionicons name="add" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }} />
                        <Text style={styles.signUpText}>Add New Adress</Text>
                    </View>
                </TouchableOpacity>

                <Image style={{ transform: [{ rotate: '190deg' }], marginTop: 50, marginLeft: -100, width: 500, resizeMode: "stretch" }}
                    source={require('../assets/images/header.png')}
                />
            </View>

        );
    }
}





export default MyAddress;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginTop: 20,
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
        backgroundColor: '#19D54A',
        color: "green",
        width: 70,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: -15,
        marginTop: 25
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
    header: {
        marginHorizontal: 17,
        flexDirection: "row",
    },

    headerIcon: {
        color: "green",
        marginTop: 7,
        // marginLeft: 10
        flex: 1,
    },



    headerText: {
        color: "green",
        fontWeight: "bold",
        marginTop: 19,
        flex: 3,
        fontSize: 20,
        textAlign: "center",
    },

    signUp: {
        marginHorizontal: 70,
        marginTop: 70,
        backgroundColor: 'green',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        height: 40,
        textAlign: "center",
    },
    signUpText: {
        color: 'white',
        textAlign: "center",
        paddingTop: 9,
        marginLeft: 5
    }

});



