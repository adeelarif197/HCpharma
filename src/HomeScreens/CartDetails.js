import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';



class CartDetails extends Component {


    render() {

        return (
            <View style={{ flex: 1 }}>

                <Header title={"Cart Details"} navigation={this.props.navigation} />


                <View
                    style={styles.line}
                />

                <ScrollView>
                    <View style={styles.topHeading}>
                        <Text style={styles.topText1}>Products</Text>
                    </View>
                    <View style={styles.container}>

                        <View style={styles.imageView}>
                            <Image style={styles.image}
                                source={require('../assets/images/panadoll.png')}
                            />
                        </View>
                        <View style={{ marginTop: 10, flex: 4 }}>
                            <Text style={{ fontWeight: "bold", color: "grey", fontSize: 20 }}>Panadol</Text>

                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={styles.underLines}
                                />
                                <Text style={{ marginLeft: 70, fontWeight: "bold" }}>Qty.</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 7 }}>
                                <View style={{ flex: 2, marginTop: -5 }}>
                                    <Text style={{ fontWeight: "bold" }}>1 mg</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: "row", marginTop: -20, marginVertical: 2 }}>
                                    <Text style={styles.texticon}>+</Text>
                                    <Text style={styles.texticons}>-</Text>
                                    <Text style={styles.text}>1</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 7 }}>
                                <View style={{ flex: 2, marginTop: -5 }}>
                                    <Text style={{ fontWeight: "bold" }}>2 mg</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: "row", marginTop: -20 }}>
                                    <Text style={styles.texticon}>+</Text>
                                    <Text style={styles.texticons}>-</Text>
                                    <Text style={styles.text}>1</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 7 }}>
                                <View style={{ flex: 2, marginTop: -5 }}>
                                    <Text style={{ fontWeight: "bold" }}>4 mg</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: "row", marginTop: -20 }}>
                                    <Text style={styles.texticon}>+</Text>
                                    <Text style={styles.texticons}>-</Text>
                                    <Text style={styles.text}>1</Text>
                                </View>
                            </View>
                            <View
                                style={styles.underLine}
                            />
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 3, fontWeight: "bold" }}>Quantiy : 3</Text>
                                <Text style={{ flex: 3, fontWeight: "bold", color: "grey" }}>Total = 10.5$</Text>
                            </View>

                        </View>

                    </View>


                    <View
                        style={styles.line}
                    />


                    <View style={styles.container}>

                        <View style={styles.imageView}>
                            <Image style={styles.images}
                                source={require('../assets/images/arinac.png')}
                            />
                        </View>
                        <View style={{ marginTop: 10, flex: 4 }}>
                            <Text style={{ fontWeight: "bold", color: "grey", fontSize: 20 }}>Arinac</Text>

                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={styles.underLines}
                                />
                                <Text style={{ marginLeft: 70, fontWeight: "bold" }}>Qty.</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 7 }}>
                                <View style={{ flex: 2, marginTop: -5 }}>
                                    <Text style={{ fontWeight: "bold" }}>1 mg</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: "row", marginTop: -20, marginVertical: 2 }}>
                                    <Text style={styles.texticon}>+</Text>
                                    <Text style={styles.texticons}>-</Text>
                                    <Text style={styles.text}>1</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 7 }}>
                                <View style={{ flex: 2, marginTop: -5 }}>
                                    <Text style={{ fontWeight: "bold" }}>2 mg</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: "row", marginTop: -20 }}>
                                    <Text style={styles.texticon}>+</Text>
                                    <Text style={styles.texticons}>-</Text>
                                    <Text style={styles.text}>1</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 7 }}>
                                <View style={{ flex: 2, marginTop: -5 }}>
                                    <Text style={{ fontWeight: "bold" }}>4 mg</Text>
                                </View>
                                <View style={{ flex: 4, flexDirection: "row", marginTop: -20 }}>
                                    <Text style={styles.texticon}>+</Text>
                                    <Text style={styles.texticons}>-</Text>
                                    <Text style={styles.text}>1</Text>
                                </View>
                            </View>
                            <View
                                style={styles.underLine}
                            />
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 3, fontWeight: "bold" }}>Quantiy : 3</Text>
                                <Text style={{ flex: 3, fontWeight: "bold", color: "grey" }}>Total = 10.5$</Text>
                            </View>

                        </View>

                    </View>


                    <View
                        style={styles.line}
                    />


                    <View style={styles.topHeading}>
                        <Text style={styles.topText1}>Order Amount</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", flex: 4.5 }}>Net Total</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", flex: 1 }}>21$</Text>
                    </View>


                    <View
                        style={styles.line}
                    />


                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", flex: 4.5 }}>Discount</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", flex: 1 }}>10%</Text>
                    </View>

                    <View
                        style={styles.line}
                    />

                    <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", flex: 4.5 }}>Total Amount</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", flex: 1 }}>18.9$</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate("Checkout")} style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Fontisto name="wallet" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Fontisto>
                            <Text style={styles.signUpText}>Proceed to Checkout</Text>
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
        color: "green",
        width: 30,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 15
    },
    texticons: {
        borderWidth: 1,
        borderColor: "grey",
        color: "red",
        width: 30,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15
    },
    text: {
        marginLeft: 33,
        marginTop: 15
    },

    container: {
        flexDirection: 'row',
        height: 190,
        padding: 10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        marginVertical: 4,
        marginHorizontal: 18,
       borderWidth:0.5,
        borderBottomLeftRadius: 100,


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
        alignItems: "center",
        flex: 1.5
    },
    image: {

        resizeMode: "contain",
        width: 70,
        height: 70,

    },

    images: {

        resizeMode: "contain",
        width: 40,
        height: 40,

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


});