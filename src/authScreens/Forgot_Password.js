// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Reuse_TextInput from '../components/Reuse_TextInput';
// import Btn from '../components/Btn';
// import {Colors} from '../Theme/Colors';
// // import Fonts from '../Theme/Fonts';
// import Feather from 'react-native-vector-icons';
// // alert-triangle

// const Forgot_Password = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [checkFun, setcheckFun] = useState(false);
//   //   const isEmailValidation = item => {
//   //     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//   //     if (item == '') {
//   //       setcheckFun(false);
//   //       setEmailError('Email address is required!');
//   //     } else if (!reg.test(item)) {
//   //       setcheckFun(false);
//   //       setEmailError('You must enter a valid email address');
//   //     } else {
//   //       setcheckFun(true);
//   //       setEmailError('');
//   //     }
//   //   };
//   //   const onSendPress = () => {
//   //     if (email == '') {
//   //       setEmailError('Email address is required!');
//   //     }
//   //     if (checkFun == true) {
//   //       navigation.navigate('Email_Check');
//   //     }
//   //   };
//   return (
//     <View style={{flex: 1, backgroundColor: Colors}}>
//       <View style={styles.backICON}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => navigation.goBack()}>
//           <AntDesign name="left" color={Colors.white} size={15} />
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.backICON, {marginTop: '10%'}]}>
//         <Text style={styles.forgotText}>Forgot Password</Text>
//       </View>
//       <View style={[styles.backICON, {marginTop: '2%'}]}>
//         <Text style={styles.enterEmail}>
//           Enter The Email Address Associated With Your{'\n'}Account
//         </Text>
//       </View>
//       <Reuse_TextInput
//         placeholder={'Email ID'}
//         keyboardType={'email-address'}
//         // onChangeText={e => isEmailValidation(e) + setEmail(e)}
//         CustomInputStyle={{marginBottom: '0%'}}
//       />
//       <Text style={styles.errorText}>{emailError}</Text>
//       <TouchableOpacity
//         style={{marginTop: '10%'}}
//         onPress={() => navigation.navigate('Email_Check')}>
//         <Btn
//           width={'40%'}
//           color={'white'}
//           backgroundColor={'#274997'}
//           title={'Send'}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Forgot_Password;

// const styles = StyleSheet.create({
//   backBtn: {
//     marginTop: '2%',
//     width: 26,
//     height: 26,
//     borderRadius: 26 / 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: Colors.btnColor,
//   },
//   backICON: {
//     width: '90%',
//     alignSelf: 'center',
//   },
//   sendBTN: {
//     width: '40%',
//     marginTop: '14%',
//   },
//   forgotText: {
//     fontSize: 27,
//     color: Colors.black,
//     // fontFamily: Fonts.NunitoMedium,
//     fontWeight: '500',
//   },
//   enterEmail: {
//     fontSize: 13,
//     fontWeight: '500',
//     // fontFamily: Fonts.NunitoRegular,
//     color: '#56565691',
//   },
//   errorText: {
//     color: Colors.red,
//     fontSize: 12,
//     textAlign: 'left',
//     width: '88%',
//     alignSelf: 'center',
//     // fontFamily: Fonts.PoppinsRegular,
//   },
// });

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';

import Icon2 from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


class Forgot_Password extends Component {

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
                    Password Reset
                </Text>

                <Text style={{
                    textAlign: "center", color: "black", fontSize: 16,
                    fontWeight: "bold", marginTop: 15,
                }}>
                    Please enter your registered email for
                    password reset
                </Text>
                <View style={styles.container}>
                    <FontAwesome name="user" style={{ marginTop: 8, marginLeft: 15 }} size={20} color="black" />
                    <TextInput
                        placeholder="Choose your user name"
                        placeholderTextColor="black"


                        style={{ marginStart: 20, flex: 1 }}
                    />
                </View>



                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Verifycode1')} style={{
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
                        <SimpleLineIcons name="login" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></SimpleLineIcons>
                        <Text style={{
                            color: 'white',
                            textAlign: "center",
                            paddingTop: 9,
                            marginLeft: 5
                        }}>Submit</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ flexDirection: "row", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ marginTop: 20 }}>Any Query? Email us</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "green", marginLeft: 20, marginTop: 20, }}>info@HCpharma.com</Text>
                    </TouchableOpacity>
                </View>


            </View>

        );
    }
}





export default Forgot_Password;
const styles = StyleSheet.create({
    container: {
        height: 45,
        margin: 10,
        borderWidth: 2,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderColor: 'grey',
        marginVertical: 8,
        marginHorizontal: 25,


        borderBottomLeftRadius: 60,

        textAlign: "center",
        flexDirection: "row",
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