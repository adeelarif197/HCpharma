import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


class ProfileSettings extends Component {


    render() {
        return (
            <View style={{ flex: 1 }}>




                <AntDesign name="arrowleft" size={40} style={styles.arrow} onPress={() => this.props.navigation.goBack()}></AntDesign>
                <ScrollView>
                    {/* <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('My Address')
                        // this.signupFunc()
                    } style={styles.signUp}>
                        <Text style={styles.signUpText}>Profile Settings</Text>
                    </TouchableOpacity> */}

                    <Image style={styles.profile}
                        source={require('../assets/images/profile.png')}
                    />
                    <Image style={styles.profileborder}
                        source={require('../assets/images/profileborder.png')}

                    />
                    <Image style={styles.dp}
                        source={require('../assets/images/hclogo.png')}
                    />


                    <View style={{ marginTop: 40, }}>

                        <View style={styles.container}>
                            <FontAwesome name="user" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Choose your user name"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={styles.textInputs}
                            />
                        </View>


                        <View style={styles.container}>
                            <Zocial name="email" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Enter your E-mail or phone number"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={styles.textInputs}
                            />
                        </View>

                        <View style={styles.container} >
                            <Feather name="phone-call" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Enter your phone number"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={styles.textInputs}
                            />
                        </View>
                        <View style={styles.container} >
                        <Entypo name="user" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Gender"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={styles.textInputs}
                            />
                        </View>
                        <View style={styles.container} >
                            <Entypo name="location-pin" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Location"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={styles.textInputs}
                            />
                        </View>
                       
                        <View style={styles.container} >
                            <Fontisto name="locked" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Choose your password"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={styles.textInputs}
                            />
                        </View>
                        <View style={styles.container} >
                            <Fontisto name="locked" style={styles.icons} size={20} color="black" />
                            <TextInput
                                placeholder="Confirm your password"
                                placeholderTextColor="black"
                                value={{}}
                                onChangeText={{}}
                                style={{ marginStart: 20, flex: 1 }}
                            />
                            <Feather name="eye-off" style={styles.eyeIcon} size={20} color="black" />
                        </View>

                     


                        <TouchableOpacity activeOpacity={0.5} onPress={{}}
                            style={styles.signUp}>
                            <Text style={styles.signUpText}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default ProfileSettings;


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

    container1: {
        backgroundColor: 'green',
        height: 45,
        padding: 10,
        borderRadius: 30,
        marginTop: 30
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
        flex: 1
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
    signUp: {
        marginHorizontal: 70,
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
        textAlign: "center",
        paddingTop: 9,
        marginLeft: 5
    },
    locationView: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },

    dp: {
        borderRadius: 300,
        marginLeft: 145,
        marginTop: -250,
        height: 250,
        width: 110
    },
});