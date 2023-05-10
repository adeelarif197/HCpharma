import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
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


class Maps extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>



                <AntDesign name="arrowleft" size={40} style={{ color: "green", marginHorizontal: 10, }} onPress={() => this.props.navigation.goBack()}></AntDesign>
                <View style={styles.container1} >

                    <TextInput
                        placeholderTextColor="black"
                        style={{ marginStart: 20, flex: 1 }}
                    />
                    <Fontisto name="search" style={{ marginTop: 8, marginRight: 10 }} size={20} color="black" />

                </View>

                <View style={styles.container} >
                    <Icon2 name="location-pin" style={{ marginTop: 0, marginLeft: 10 }} size={20} color="grey" />
                    <Text style={{ marginStart: 20, flex: 1 }}>Gulshan-e-Iqbal Rahim Yar Khan, Punjab</Text>
                </View>
                <View style={styles.container} >
                    <Icon2 name="location-pin" style={{ marginTop: 0, marginLeft: 10 }} size={20} color="grey" />
                    <Text style={{ marginStart: 20, flex: 1 }}>Gulshan-e-Ravi Rahim Yar Khan, Punjab</Text>
                </View>
                <View style={styles.container} >
                    <Icon2 name="location-pin" style={{ marginTop: 0, marginLeft: 10 }} size={20} color="grey" />
                    <Text style={{ marginStart: 20, flex: 1 }}>Gulshan-e-Nasir Rahim Yar Khan, Punjab</Text>
                </View>
                <View style={styles.container} >
                    <Icon2 name="location-pin" style={{ marginTop: 0, marginLeft: 10 }} size={20} color="grey" />
                    <Text style={{ marginStart: 20, flex: 1 }}>Gulshan-e-Usman Rahim Yar Khan, Punjab</Text>
                </View>
                <View style={styles.container} >
                    <Icon2 name="location-pin" style={{ marginTop: 0, marginLeft: 10 }} size={20} color="grey" />
                    <Text style={{ marginStart: 20, flex: 1 }}>Gulshan-e-Iqbal Rahim Yar Khan, Punjab</Text>
                </View>

                <View style={{ alignItems: "flex-end", marginHorizontal: 30 }}>
                    <View >
                        <Image style={{ resizeMode: "contain" }}

                            source={require('../assets/images/google.png')}
                        />
                    </View>


                </View>

                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Home')} style={{
                        marginHorizontal: 100,
                        marginTop: 5,
                        backgroundColor: 'green',
                        borderTopRightRadius: 60,
                        borderBottomRightRadius: 60,
                        borderBottomLeftRadius: 60,
                        height: 40,
                        textAlign: "center",
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Icon2 name="location-pin" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon2>

                            <Text style={{
                                color: 'white',
                                textAlign: "center",
                                paddingTop: 9,
                                marginLeft: 5
                            }}>Save</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}





export default Maps;
const styles = StyleSheet.create({
    container: {
        height: 30,
        marginVertical: 0,
        marginHorizontal: 25,
        flexDirection: "row",
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