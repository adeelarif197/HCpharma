import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';



class Letsgetstarted extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ marginTop: -198, marginLeft: -60, width: 500, resizeMode: "stretch" }}
                    source={require('../assets/images/header.png')}
                />


                <View style={{ marginTop: 70, alignItems: "center", }}>
                    <Image style={{height:300, width:120 }}
                        source={require('../assets/images/hclogo.png')}
                    />
                </View>
                <Text style={{
                    marginTop: 70, textAlign: "center", color: "black", fontSize: 16,

                }}>
                    Account verified Successfully
                    please click on the button
                    below to start Fajira Pharmacy
                </Text>



                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Home')} style={{
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
                        <Icon2 name="addusergroup" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon2>
                        <Text style={{
                            color: 'white',
                            textAlign: "center",
                            paddingTop: 9,
                            marginLeft: 5

                        }}>Sign up</Text>
                    </View>

                </TouchableOpacity>



            </View>

        );
    }
}





export default Letsgetstarted;