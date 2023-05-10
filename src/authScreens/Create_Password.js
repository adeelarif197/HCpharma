// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import {Colors} from '../Theme/Colors';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// // import Fonts from '../Theme/Fonts'
// import Reuse_TextInput from '../components/Reuse_TextInput';
// // import Reuse_Button from '../Components/Reuse_Button'
// import Btn from '../components/Btn';

// const Create_Password = ({navigation}) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [uPassword, setuPassword] = useState(false);
//   const [cPassword, setcPassword] = useState(false);
//   const RegxPassword =
//     /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,15}$/;
//   const isPasswordValid = item => {
//     if (item.length === 0) {
//       setuPassword(false);
//       setPasswordError('You must enter a password');
//     } else if (item.length < 8) {
//       setuPassword(false);
//       setPasswordError('You must enter a 8 digit password');
//     } else if (!RegxPassword.test(item)) {
//       setuPassword(false);
//       setPasswordError(
//         'Password must contain at least one uppercase, lowercase, a number or a special character and minimum 8,15 characters',
//       );
//     } else {
//       setuPassword(true);
//       setPasswordError('');
//     }
//   };

//   const isPasswordConfirm = item => {
//     if (item.length === 0) {
//       setcPassword(false);
//       setConfirmPasswordError('You must enter a confirm password');
//     } else if (password !== item) {
//       setcPassword(false);
//       setConfirmPasswordError('password not matched');
//     } else {
//       setcPassword(true);
//       setConfirmPasswordError('');
//     }
//   };

//   const CheckValidation = () => {
//     if (password == '') {
//       setPasswordError('You must enter a password');
//     } else if (confirmPassword == '') {
//       setConfirmPasswordError('You must enter a confirm password');
//     } else if (uPassword == true && cPassword == true) {
//       // navigation.navigate('Change_Successfully');
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: Colors.white}}>
//       <View style={styles.backICON}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => navigation.goBack()}>
//           <AntDesign name="left" color={Colors.white} size={15} />
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.backICON, {marginTop: '10%'}]}>
//         <Text style={styles.newPasswordText}>New Password</Text>
//       </View>
//       <Reuse_TextInput
//         CustomInputStyle={[styles.backICON]}
//         placeholder={'Password'}
//         onChangeText={e => isPasswordValid(e) + setPassword(e)}
//       />
//       <Text style={styles.errorText}>{passwordError}</Text>
//       <Reuse_TextInput
//         CustomInputStyle={[styles.backICON]}
//         placeholder={'Confirm New Password'}
//         onChangeText={e => isPasswordConfirm(e) + setConfirmPassword(e)}
//       />
//       <Text style={styles.errorText}>{confirmPasswordError}</Text>
//       <TouchableOpacity
//         style={{marginTop: '10%'}}
//         onPress={() => CheckValidation()}>
//         <Btn
//           width={'40%'}
//           color={'white'}
//           backgroundColor={'#274997'}
//           title={'Update'}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Create_Password;

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
//   updateBTN: {
//     width: '40%',
//     marginTop: '20%',
//   },
//   newPasswordText: {
//     fontSize: 27,
//     color: Colors.black,
//     // fontFamily: Fonts.NunitoMedium,
//     fontWeight: '500',
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


import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';




class Create_Password extends Component {

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
                    Account Recoverd
                </Text>

                <Text style={{
                    textAlign: "center", color: "black", fontSize: 15,
                    fontWeight: "bold", marginTop: 15,
                }}>
                    Please enter your new password
                </Text>



                <View style={styles.container} >
                    <Fontisto name="locked" style={{ marginTop: 8, marginLeft: 15 }} size={20} color="black" />
                    <TextInput
                        placeholder="Choose your password"

                        placeholderTextColor="black"


                        style={{ marginStart: 20, flex: 1 }}
                    />
                    <Feather name="eye-off" style={{ marginTop: 8, marginRight: 10, }} size={20} color="black" />
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Location')} style={{
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

                        <Text style={{
                            color: 'white',
                            textAlign: "center",
                            paddingTop: 9,
                            marginLeft: 5
                        }}>Save</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ flexDirection: "row", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ marginTop: 20 }}>Forget Password?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "green", marginLeft: 20, marginTop: 20, }}>Reset</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ marginTop: 20 }}>New User?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "green", marginLeft: 20, marginTop: 20, }}>Signup here</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}





export default Create_Password;
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