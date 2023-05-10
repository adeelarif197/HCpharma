import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Medicineflatlist from '../components/Medicineflatlist'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import Icon2 from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



class Cart extends Component {

    render() {
        return (

            <View style={styles.container}>

                <Header title={"Cart"} navigation={this.props.navigation} />

                <View
                    style={styles.line}
                />
                <ScrollView>

                    <View style={styles.topHeading}>
                        <Text style={styles.topText1}>Panadol</Text>
                        <Text style={styles.topText2}>(Paracetamol)</Text>
                    </View>

                    <View style={styles.containers}>

                        <View style={styles.imageView}>
                            <Image style={styles.image}

                                source={require('../assets/images/panadols.png')}

                            />
                        </View>

                    </View>

                    <View style={styles.topHeading}>
                        <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold" }}>Brand :
                            <Text style={{ color: "green" }}> GSK</Text>
                        </Text>
                        <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold" }}>Category :
                            <Text style={{ color: "green" }}> Tablet</Text>
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>1 mg</Text>
                        </View>
                        <View style={{ flex: 3, flexDirection: "row" }}>
                            <Text style={styles.offer}>3$</Text>
                            <Text style={styles.texticon}>+</Text>
                            <Text style={styles.texticons}>-</Text>
                        </View>
                    </View>
                    <View
                        style={styles.lines}
                    />


                    <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>2 mg</Text>
                        </View>
                        <View style={{ flex: 3, flexDirection: "row" }}>
                            <Text style={styles.offer}>3.5$</Text>
                            <Text style={styles.texticon}>+</Text>
                            <Text style={styles.texticons}>-</Text>
                        </View>
                    </View>
                    <View
                        style={styles.lines}
                    />

                    <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>3 mg</Text>
                        </View>
                        <View style={{ flex: 3, flexDirection: "row" }}>
                            <Text style={styles.offer}>3.8$</Text>
                            <Text style={styles.texticon}>+</Text>
                            <Text style={styles.texticons}>-</Text>
                        </View>
                    </View>
                    <View
                        style={styles.lines}
                    />
                    <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>4 mg</Text>
                        </View>
                        <View style={{ flex: 3, flexDirection: "row" }}>
                            <Text style={styles.offer}>4.0$</Text>
                            <Text style={styles.texticon}>+</Text>
                            <Text style={styles.texticons}>-</Text>
                        </View>
                    </View>
                    <View
                        style={styles.line}
                    />


                    <View style={styles.totalHeadings}>
                        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", flex: 4 }}>3 Items</Text>
                        <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold", flex: 3 }}>Total = 10.5$</Text>
                    </View>




                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate("CartDetails")} style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <FontAwesome name="shopping-cart" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></FontAwesome>
                            <Text style={styles.signUpText}>Add to Cart</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containers: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        height: 150,
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

    line: {
        borderBottomColor: 'grey',
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



    totalHeadings: {
        marginTop: 10,
        marginHorizontal: 30,
        flexDirection: "row"
    },

    topText1: {
        color: "green",
        fontWeight: "bold",
        fontSize: 30
    },

    topText2: {
        color: "grey",
        fontSize: 16
    },


    imageView: {
        marginVertical: 15,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        marginLeft: 40,
        resizeMode: "contain",
        width: 200,
        height: 200,

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


    offer: {
        backgroundColor: '#19D54A',
        color: "green",
        width: 40,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15
    },

    texticon: {
        borderWidth: 1,
        borderColor: "grey",
        color: "green",
        width: 40,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15
    },
    texticons: {
        borderWidth: 1,
        borderColor: "grey",
        color: "red",
        width: 40,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15
    },




});




export default Cart;


