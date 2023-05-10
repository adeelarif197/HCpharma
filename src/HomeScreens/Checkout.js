import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';


class CartDetails extends Component {


    render() {

        return (
            <View style={{ flex: 1 }}>

                <Header title={"Checkout Order"} navigation={this.props.navigation} />


                <View
                    style={styles.line}
                />

                <ScrollView>
                    <View style={styles.topHeading}>
                        <Text style={styles.topText1}>Delivery Address</Text>
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

                    {/* <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Categories')} style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Ionicons name="add" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }} />
                            <Text style={styles.signUpText}>Add or Change Address</Text>
                        </View>
                    </TouchableOpacity> */}


                    <View
                        style={styles.line}
                    />

                    <View style={styles.topHeading}>
                        <Text style={styles.topText1}>Contact Info</Text>
                    </View>

                    <View style={styles.container1}>
                        <FontAwesome name="user" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="black"
                            style={styles.textInputs}
                        />
                    </View>


                    <View style={styles.container1}>
                        <Zocial name="email" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="black"
                            style={styles.textInputs}
                        />
                    </View>

                    <View style={styles.container1} >
                        <Feather name="phone-call" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Phone Number"
                            placeholderTextColor="black"
                            style={styles.textInputs}
                        />
                    </View>


                    <View style={styles.topHeading}>
                        <Text style={styles.topText1}>Order Info</Text>
                    </View>


                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ color: "grey", flex: 4.5 }}>Net Total</Text>
                        <Text style={styles.texticon}>21$</Text>
                    </View>



                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ color: "grey", flex: 4.5 }}>Total Discount</Text>
                        <Text style={styles.texticon}>10%</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ color: "grey", flex: 4.5 }}>Delivery Charges</Text>
                        <Text style={styles.texticon}>5$</Text>
                    </View>

                    <View
                        style={styles.line}
                    />

                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ color: "black", flex: 4.5, fontWeight: "bold", fontSize: 20, }}>Grand Total</Text>
                        <Text style={styles.texticon}>18.9$</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate("OrderProceed")} style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Fontisto name="wallet" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Fontisto>
                            <Text style={styles.signUpText}>Checkout Order</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>

        );
    }
}

export default CartDetails;


const styles = StyleSheet.create({
    arrow: {
        color: "green",
        marginTop: 10,
        marginHorizontal: 10,
    },
    line: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 2,
        marginTop: 10,
        marginHorizontal: 20
    },

    lines: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 2,
        marginTop: 10,
        marginHorizontal: 20
    },
    topHeading: {
        marginTop: 20,
        marginHorizontal: 30
    },




    underLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: 170,
        marginTop: 5
    },

    underLines: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 2,
        width: 90,
        marginBottom: 10
    },
    signUp: {
        marginHorizontal: 30,
        marginTop: 5,
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
    },

    topHeading: {
        marginTop: 20,
        marginHorizontal: 30
    },



    totalHeadings: {
        marginTop: 0,
        marginHorizontal: 30,
        flexDirection: "row"
    },

    topText1: {
        color: "green",
        fontWeight: "bold",
        fontSize: 30
    },

    texticon: {
        borderWidth: 1,
        borderColor: "grey",
        color: "grey",
        width: 100,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 0
    },

    textInputs: {
        marginStart: 20,
        flex: 1
    },

    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginTop: 15,
        marginHorizontal: 20,
        height: 130,
        padding: 10,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        marginVertical: 0,
        marginHorizontal: 25,
borderWidth:0.5,
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
    container1: {
        height: 45,
        margin: 10,
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'grey',
        marginVertical: 8,
        marginHorizontal: 25,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        flexDirection: "row",
    },
    icons: {
        marginTop: 8,
        marginLeft: 15
    },



});