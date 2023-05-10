import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



class Verifycode extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <AntDesign name="arrowleft" size={40} style={{ color: "green", marginTop: 10, marginHorizontal: 10, }} onPress={() => this.props.navigation.goBack()}></AntDesign>
                <View style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{}}
                        source={require('../assets/images/verification.png')}
                    />
                </View>
                <Text style={{
                    textAlign: "center", marginHorizontal: 40, marginTop: 20,
                }}>
                    Hy, Please check your
                    mail, enter the code below we sent
                    you in mail and verify your account
                </Text>

                <View style={[styles.directions]}>
                    <TextInput style={[styles.textboxpadding, styles.textbox]} />
                    <TextInput style={[styles.textboxpadding, styles.textbox]} />
                    <TextInput style={[styles.textboxpadding, styles.textbox]} />
                    <TextInput style={[styles.textboxpadding, styles.textbox]} />
                    <TextInput style={[styles.textboxpadding, styles.textbox]} />
                </View>


                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Create_Password')} style={{
                    marginHorizontal: 70,
                    marginTop: 5,
                    backgroundColor: 'green',
                    borderTopRightRadius: 60,
                    borderBottomRightRadius: 60,
                    borderBottomLeftRadius: 60,
                    height: 40,
                    textAlign: "center",
                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                        <Icon1 name="login" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon1>
                        <Text style={{
                            color: 'white',
                            textAlign: "center",
                            paddingTop: 9,
                            marginLeft: 5
                        }}>Verify Code</Text>
                    </View>

                </TouchableOpacity>


                <Text style={{ textAlign: "center", marginTop: 20 }}>Not Received Email</Text>
                <Text style={{ color: "green", textAlign: "center", marginTop: 20, textDecorationLine: 'underline' }}>Resend Here</Text>
                <Text style={{ textAlign: "center", marginTop: 40 }}>Any Query? Email Us</Text>
                <Text style={{ color: "green", textAlign: "center", marginTop: 20 }}>info@HCpharma.com</Text>

            </View>

        );
    }
}





export default Verifycode;
const styles = StyleSheet.create({
    logocenter: {
        alignItems: "center",
        justifyContent: 'center',
    },
    logo: {
        color: "green",
        textAlign: "center",
        height: 100,
        width: 120,
        marginTop: 50,
        marginBottom: 30,
    },
    heading: {
        color: 'green',
        textAlign: "center",
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    directions: {
        flexDirection: 'row',

        justifyContent: "center",
    },
    textbox: {
        backgroundColor: "white",
        borderColor: 'grey',
        borderWidth: 1,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,

        marginHorizontal: 10,
        marginVertical: 7,
        height: 40,

    },
    textboxpadding: {
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: "center"
    },
    icons: {
        paddingTop: 7,
        paddingLeft: 12,
        color: 'green',
    },
    button: {
        marginHorizontal: 30,
        marginTop: 5,
        backgroundColor: 'green',
        borderRadius: 30,
        height: 40,
        textAlign: "center",
    },
    buttontext: {
        color: 'white',
        textAlign: "center",
        paddingTop: 9
    },
    buttontexts: {
        color: 'black',
        textAlign: "center",
        paddingTop: 9
    },
    btnbold: {
        fontWeight: "bold",
    },
    forget: {
        marginTop: 120
    },
    otptext: {
        color: 'black',
        textAlign: "center",
        paddingBottom: 10
    },
})
