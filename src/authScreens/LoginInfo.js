// import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
// import React from 'react';
// import Btn from '../components/Btn';
// import {Colors} from '../Theme/Colors';
// const LoginInfo = ({navigation}) => {
//   return (
//     <View style={{backgroundColor: Colors.white, flex: 1}}>
//       <View style={{alignItems: 'center', marginTop: 100}}>
//         <Image
//           source={require('../../assets/main.png')}
//           style={styles.img}
//           resizeMode="contain"
//         />
//       </View>
//       <TouchableOpacity
//         style={{marginTop: 40}}
//         onPress={() => navigation.navigate('Sign_In')}>
//         <Btn
//           title={'Sign In'}
//           width={'85%'}
//           backgroundColor={'#274997'}
//           color={'white'}
//         />
//       </TouchableOpacity>
//       <Text style={styles.orTxt}>or</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Sign_Up')}>
//         <Btn
//           title={'Sign Up'}
//           width={'85%'}
//           backgroundColor={'white'}
//           color={'black'}
//           borderWidth={1}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginInfo;

// const styles = StyleSheet.create({
//   orTxt: {
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   img: {
//     height: 370,
//     width: 370,
//   },
// });


import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';



class LoginInfo extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ marginTop: -198, marginLeft: -60, width: 500, resizeMode: "stretch" }}
                    source={require('../assets/images/header.png')}
                />

                <Text style={{
                    textAlign: "center", color: "green", fontSize: 40,
                    fontWeight: "bold"
                }}>
                    Welcome
                </Text>
                <View style={{ alignItems: "center", }}>
                    <Image style={{height:350, width:120 }}
                        source={require('../assets/images/hclogo.png')}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Sign_In')} style={{
                    marginHorizontal: 70,
                    marginTop: 5,
                    backgroundColor: 'green',
                    borderTopRightRadius: 60,
                    borderBottomRightRadius: 60,
                    borderBottomLeftRadius: 60,
                    height: 40,
                    textAlign: "center",
                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", textAlign : "center", justifyContent: "center" }}>
                        <Icon1 name="login" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon1>
                        <Text style={{
                            color: 'white',
                            textAlign: "center",
                            paddingTop: 9,
                            marginLeft: 5
                        }}>Log in</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Sign_Up')} style={{
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
                        <Icon2 name="addusergroup" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon2>
                        <Text style={{
                            color: 'white',
                            textAlign: "center",
                            paddingTop: 9,
                            marginLeft: 5
                        }}>Sign up</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 2,
                        marginTop: 20
                    }}
                />
                <Text style={{ textAlign: "center", marginTop: 20 }}>Or Continue as Guest</Text>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginHorizontal: 100
                    }}
                />
                <Text style={{ color: "grey", textAlign: "center" }}> By Logging in you agree to our</Text>
                <Text style={{ color: "grey", textAlign: "center", textDecorationLine: 'underline' }}> Terms of Services and Privacy Policy</Text>
            </View>

        );
    }
}





export default LoginInfo;