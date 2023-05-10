import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class NavBar extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <Image style={styles.topImage}
                    source={require('../assets/images/header.png')}
                />

                <Image style={styles.dp}
                    source={require('../assets/images/hclogo.png')}
                />
                <Text style={styles.heading}>Malik</Text>

                <ScrollView>
                    <TouchableOpacity>
                        <View style={styles.container}>
                            <FontAwesome name="home" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <MaterialIcons name="description" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>My Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <MaterialCommunityIcons name="login" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Login with new account</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <FontAwesome name="user-plus" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Signup</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('ProfileSettings')}>
                        <View style={styles.container}>
                            <FontAwesome name="user" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Profile Settings</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <Foundation name="lightbulb" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Suggest a Pharmacy Store</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.container}>
                            <FontAwesome5 name="envelope-open-text" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Invite Friends</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <FontAwesome name="envelope" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Contact Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <AntDesign name="exclamationcircle" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>About Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <FontAwesome name="user" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Terms and Conditions</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <MaterialIcons name="privacy-tip" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Privacy Policy</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <Entypo name="star" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Rate Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.container}>
                            <Entypo name="share" style={styles.icons} size={20} color="black" />
                            <Text style={styles.textInputs}>Share App</Text>
                        </View>
                    </TouchableOpacity>


                </ScrollView>

            </View>

        );
    }
}

export default NavBar;


const styles = StyleSheet.create({
    topImage:
    {
        marginTop: -198,
        marginLeft: -60,
        width: 500,
        resizeMode: "stretch"
    },
    heading: {
        marginLeft: 21,
        marginTop: 40,
        color: "green",
        fontSize: 40,
        fontWeight: "bold"
    },
    container: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'grey',
        marginVertical: 3,
        marginHorizontal: 25,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        flexDirection: "row",
    },
    icons: {
        marginTop: 7,
        marginLeft: 15,
        color: "green"
    },

    textInputs: {
        marginStart: 20,
        marginTop: 8,
        color: "grey"
    },

    dp: {
        borderRadius: 300,
        marginLeft: 150,
        marginTop: -250,
        height: 250,
        width: 110
    }



});