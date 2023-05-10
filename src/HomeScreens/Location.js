import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



var location = [
    { label: 'Location for Home', value: 0 },
    { label: 'Location for Office', value: 1 },
    { label: 'Location for Other Places', value: 2 },
];



class Location extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ marginTop: -198, marginLeft: -60, width: 500, resizeMode: "stretch" }}
                    source={require('../assets/images/map.png')}
                />
                <Image style={{ marginTop: -520, marginLeft: -60, width: 500, resizeMode: "contain" }}

                    source={require('../assets/images/mapborder.png')}
                />

                <AntDesign name="arrowleft" size={40} style={{ color: "green", marginTop: -330, marginHorizontal: 10, }} onPress={() => this.props.navigation.goBack()}></AntDesign>
                <View style={styles.container1} >
                    <Fontisto name="search" style={{ marginTop: 8, marginLeft: 15 }} size={20} color="black" />

                    <TextInput
                        placeholderTextColor="black"
                        style={{ marginStart: 20, flex: 1 }}
                    />

                </View>
                <View style={{ height: 70, flexDirection: "row", marginTop: 140, marginHorizontal: 30 }}>
                    <View style={{ flex: 3, alignItems: "flex-start" }}>
                        <Image style={{ marginTop: 20, resizeMode: "contain" }}

                            source={require('../assets/images/google.png')}
                        />
                    </View>
                    <View style={{ flex: 3, alignItems: "flex-end" }}>
                        <View style={styles.container} >
                            <Image style={{ resizeMode: "contain" }}

                                source={require('../assets/images/locations.png')}
                            />


                        </View>

                    </View>
                </View>

                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('')} style={{
                        marginHorizontal: 150,
                        marginLeft: 20,
                        marginTop: 5,
                        backgroundColor: 'green',
                        borderTopRightRadius: 60,
                        borderBottomRightRadius: 60,
                        borderBottomLeftRadius: 60,
                        height: 40,
                        textAlign: "center",
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Text style={{
                                color: 'white',
                                textAlign: "center",
                                paddingTop: 9,
                                marginLeft: 5
                            }}>Add Current Location</Text>
                        </View>

                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Maps')} style={{
                        marginHorizontal: 150,
                        marginLeft: 20,
                        marginTop: 10,
                        backgroundColor: 'green',
                        borderTopRightRadius: 60,
                        borderBottomRightRadius: 60,
                        borderBottomLeftRadius: 60,
                        height: 40,
                        textAlign: "center",
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Text style={{
                                color: 'white',
                                textAlign: "center",
                                paddingTop: 9,
                                marginLeft: 5
                            }}>Add Custom Location</Text>
                        </View>

                    </TouchableOpacity>

                    <RadioForm
                        radio_props={location}
                        initial={0}
                        buttonSize={15}
                        buttonOuterSize={25}
                        buttonColor={'grey'}
                        selectedButtonColor={'#50C900'}

                        onPress={(value) => { this.setState({ value: value }) }}
                        style={{ marginLeft: 20, marginTop: 20 }}
                    />



                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Maps')} style={{
                        marginHorizontal: 70,
                        marginTop: 5,
                        backgroundColor: 'green',
                        borderTopRightRadius: 60,
                        borderBottomRightRadius: 60,
                        borderBottomLeftRadius: 60,
                        height: 40,
                        textAlign: "center",
                        marginTop: 70,
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>

                            <Text style={{
                                color: 'white',
                                textAlign: "center",
                                paddingTop: 9,
                                marginLeft: 5

                            }}>Save Location</Text>
                        </View>

                    </TouchableOpacity>

                </View>
            </View>

        );
    }
}

export default Location;
const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,

        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'green',
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 60,

        textAlign: "center",

    },
    container1: {
        height: 45,
        margin: 10,
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'green',
        marginVertical: 4,
        marginHorizontal: 25,


        borderBottomLeftRadius: 60,

        textAlign: "center",
        flexDirection: "row",
    },

    text: {
        fontSize: 22,
        textAlign: "center",
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 90

    },
    image: {
        marginTop: 8,
        marginLeft: 65,
        alignItems: "center",
        justifyContent: 'center',
    },
    signup: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});