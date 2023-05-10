import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native';



const Categoriesflatlist = (props) => {




    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>

                <View style={styles.imageView}>
                    <Image style={styles.image}
                        source={props.uri}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
                    <Text>{props.name}</Text>
                    <View
                        style={styles.underLine}
                    />
                    <Text>{props.company}</Text>
                </View>

                <View>
                    <Text style={styles.offer}>Price: <Text style={{ fontWeight: "bold" }}>{props.price}</Text></Text>
                </View>

            </View>


        </View>

    );
}

export default Categoriesflatlist;


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
        backgroundColor: '#7AF657',
        width: 80,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontSize: 16,
        marginLeft: -85,
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