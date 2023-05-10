import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




class OrderProceed extends Component {

    render() {
        return (

            <View style={styles.container}>

                <AntDesign name="arrowleft" size={40} style={styles.arrow} onPress={() => this.props.navigation.goBack()}></AntDesign>
                <ScrollView>
                    <View style={{ alignItems: "center", }}>
                        <Image style={{ height: 180, width: 360, resizeMode: "stretch" }}
                            source={require('../assets/images/bike.png')}
                        />
                    </View>


                    <View style={{ alignItems: "center", marginTop: 30 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey" }}>
                            Order Id:<Text style={{ color: "green" }}>123456</Text>
                        </Text>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey", textAlign: "center" }}>
                                Order has been placed successfully
                                you can track the delivery rider
                            </Text>
                        </View>
                    </View>

                    <Image style={styles.profile}
                        source={require('../assets/images/maps.png')}
                    />
                    <Image style={styles.profileborder}
                        source={require('../assets/images/profileborder.png')}

                    />


                    <TouchableOpacity activeOpacity={0.5} style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Icon2 name="location-pin" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon2>
                            <Text style={styles.signUpText}>Track Order</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.navigation.navigate('Home')} style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <FontAwesome name="home" style={{ textAlign: "center", color: "white", marginTop: 10 }} size={17} />
                            <Text style={styles.signUpText}>Back to Home</Text>
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

    signUp: {
        marginHorizontal: 40,
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
    }

});




export default OrderProceed;


