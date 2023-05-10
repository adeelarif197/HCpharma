// import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Colors from '../Theme/Colors'
// import Fonts from '../Theme/Fonts'
// import Reuse_Button from '../Components/Reuse_Button'
// import Reuse_TextInput from '../Components/Reuse_TextInput'

// const Sign_Up = ({ navigation }) => {
//     const [fName, setfName] = useState('')
//     const [fNameError, setfNameError] = useState('')
//     const [fNameFun, setfNameFun] = useState(false)
//     const [lName, setlName] = useState('')
//     const [lNameError, setlNameError] = useState('')
//     const [lNameFun, setlNameFun] = useState(false)
//     const [email, setEmail] = useState('')
//     const [emailError, setEmailError] = useState('')
//     const [emailFun, setEmailFun] = useState(false)
//     const [password, setPassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [passwordFun, setPasswordFun] = useState(false);
//     const [title, setTitle] = useState('')
//     const [titleError, setTitleError] = useState('')
//     const [titleFun, setTitleFun] = useState(false)
//     const [error, setError] = useState('')
//     const RegxPassword = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,15}$/
//     const isPasswordValid = (item) => {
//         if (item.length === 0) {
//             setPasswordFun(false)
//             setPasswordError('You must enter a password');
//         }
//         else if (item.length < 8) {
//             setPasswordFun(false)
//             setPasswordError('You must enter a 8 digit password');
//         } else if (!RegxPassword.test(item)) {
//             setPasswordFun(false)
//             setPasswordError('Password must contain at least one uppercase, lowercase, a number or a special character and minimum 8,15 characters');
//         } else {
//             setPasswordFun(true)
//             setPasswordError('')
//         }
//     }
//     const isEmailValid = (item) => {
//         let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//         let checkItem = /^[A-Za-z][A-Za-z0-9@.\*]*$/
//         if (item.length === 0) {
//             setEmailError('Email Address is required!');
//             setEmailFun(false)
//         } else if (!checkItem.test(item)) {
//             setEmailError('Invalid email address! Only letters (a-z), numbers (0-9) and period (.) are allowed!');
//             setEmailFun(false)
//         } else if (!reg.test(item)) {
//             setEmailError('Invalid email address! Only letters (a-z), numbers (0-9) and period (.) are allowed!');
//             setEmailFun(false)
//         } else {
//             setEmailError('');
//             setEmailFun(true)
//         }
//     }
//     const isfirstNameValid = (item) => {
//         var regName = /^[a-zA-Z_ ]+$/
//         if (item.length == 0) {
//             setfNameError('Name is required!');
//             setfNameFun(false)
//         } else if (regName.test(item) !== true) {
//             setfNameError('Invalid first name only letters are allowed!');
//             setfNameFun(false)
//         } else {
//             setfNameError('');
//             setfNameFun(true)
//         }
//     }
//     const islastNameValid = (item) => {
//         var regName = /^[a-zA-Z_ ]+$/
//         if (item.length == 0) {
//             setlNameError('last Name is required!');
//             setlNameFun(false)
//         } else if (regName.test(item) !== true) {
//             setlNameError('Invalid last name only letters are allowed!');
//             setlNameFun(false)
//         } else {
//             setlNameError('');
//             setlNameFun(true)
//         }
//     }
//     const isTitleValid = (item) => {
//         if (item.length === 0) {
//             setTitleFun(false)
//             setTitleError('Title is required!')
//         } else {
//             setTitleFun(true)
//             setTitleError('')
//         }
//     }
//     const onSignUpPress = () => {
//         if (fName == '' && lName == '' && email == '' && password == '' && title == '') {
//             setError('Please Enter Your Credentials')
//         } else if (fNameFun == false || lNameFun == false || emailFun == false || passwordFun == false || titleFun == false) {
//             setError('Please fill all Credentials')
//         } else {
//             navigation.navigate('Sign_In')
//         }
//     }
//     return (
//         <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <>
//                     <TouchableOpacity style={styles.backICON} onPress={() => navigation.goBack()}>
//                         <AntDesign name='left' color={Colors.BLACK} size={20} />
//                     </TouchableOpacity>
//                     <Image source={require("../Theme/Images/Sign_In.png")} style={styles.ImgStyle} resizeMode={"contain"} />
//                     <Text style={styles.TextStyle}>Create your account</Text>
//                     <Reuse_TextInput
//                         CustomInputStyle={{ marginVertical: '3%' }}
//                         placeholder={"First Name"}
//                         onChangeText={(e) => { isfirstNameValid(e) + setfName(e) }}
//                     />
//                     <Text style={styles.errorText}>{fNameError}</Text>
//                     <Reuse_TextInput
//                         CustomInputStyle={{ marginVertical: '0%' }}
//                         placeholder={"Last Name"}
//                         onChangeText={(e) => islastNameValid(e) + setlName(e)}
//                     />
//                     <Text style={styles.errorText}>{lNameError}</Text>
//                     <Reuse_TextInput
//                         CustomInputStyle={{ marginVertical: '3%' }}
//                         placeholder={"Email"}
//                         keyboardType={"email-address"}
//                         onChangeText={(e) => isEmailValid(e) + setEmail(e)}
//                     />
//                     <Text style={styles.errorText}>{emailError}</Text>
//                     <Reuse_TextInput
//                         CustomInputStyle={{ marginVertical: '0%' }}
//                         placeholder={"Password"}
//                         onChangeText={(e) => isPasswordValid(e) + setPassword(e)}
//                     />
//                     <Text style={styles.errorText}>{passwordError}</Text>
//                     <Reuse_TextInput
//                         CustomInputStyle={{ marginTop: "3%", marginBottom: '0%' }}
//                         placeholder={"Title"}
//                         onChangeText={(e) => { isTitleValid(e), setTitle(e) }}
//                     />
//                     <Text style={styles.errorText}>{titleError}</Text>
//                     <Reuse_Button
//                         BtnText={"Sign Up"}
//                         onPress={() => onSignUpPress()}
//                         CustomStyle={{ marginTop: '8%' }}
//                         CustomTextStyle={{}}
//                     />
//                     <Text style={{ ...styles.errorText, textAlign: 'center' }}>{error}</Text>
//                     <View style={styles.OtherOptionBox}>
//                         <View style={[styles.lineStyle, { marginRight: '2%' }]} />
//                         <Text style={styles.SignWith}>or Sign up with</Text>
//                         <View style={[styles.lineStyle, { marginLeft: '2%' }]} />
//                     </View>

//                     <View style={styles.SocialBtns}>
//                         <Reuse_Button
//                             Type_Text={false}
//                             CustomStyle={styles.socialBTN}
//                             addOther={
//                                 <Image source={require('../Theme/Images/googleImg.png')} resizeMode={"contain"} style={styles.BtnImgStyle} />}
//                         />
//                         <Reuse_Button
//                             Type_Text={false}
//                             CustomStyle={styles.socialBTN}
//                              addOther={
//                                 <Image source={require('../Theme/Images/fblogo.png')} resizeMode={"contain"} style={{ ...styles.BtnImgStyle, height: 20 }} />}
//                         />
//                         <Reuse_Button
//                             Type_Text={false}
//                             CustomStyle={styles.socialBTN}
//                             addOther={
//                                 <Image source={require('../Theme/Images/twitterlogo.png')} resizeMode={"contain"} style={{ ...styles.BtnImgStyle, height: 20 }} />}
//                         />
//                     </View>
//                     <View style={styles.dontAccount}>
//                         <Text style={styles.TextStyle}>Already have an account? </Text>
//                         <TouchableOpacity style={{ marginTop: '6%' }} onPress={() => navigation.navigate("Sign_In")}>
//                             <Text style={{ ...styles.TextStyle, color: Colors.SMart_Rental }}>Login</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </>
//             </ScrollView>
//         </View>
//     )
// }

// export default Sign_Up

// const styles = StyleSheet.create({
//     ImgStyle: {
//         marginTop: "1%",
//         width: '80%',
//         height: 160,
//         alignSelf: 'center'
//     },
//     backICON:{
//         width: '90%', alignSelf: "center", marginTop: "2%"
//     },
//     socialBTN:{
//         width: '26%', height: 40, backgroundColor: Colors.WHITE, borderColor: Colors.LightGrey, borderWidth: 2,
//     },
//     TextStyle: {
//         marginTop: '6%',
//         fontSize: 20,
//         color: Colors.BLACK,
//         alignSelf: 'center',
//         fontWeight: "500",
//         fontFamily: Fonts.NunitoMedium
//     },
//     OtherOptionBox: {
//         flexDirection: 'row',
//         width: '90%',
//         alignSelf: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: '8%'
//     },
//     lineStyle: {
//         width: 20,
//         height: 1,
//         backgroundColor: Colors.BLACK
//     },
//     SignWith: {
//         alignSelf: 'center',
//         color: Colors.BLACK,
//         fontFamily: Fonts.PoppinsBold,
//         fontSize: 12,
//         fontWeight: '600'
//     },
//     forgotStyle: {
//         fontFamily: Fonts.PoppinsMedium,
//         fontSize: 12,
//         fontWeight: '600',
//         color: Colors.BLACK,
//     },
//     BtnImgStyle: {
//         width: '40%',
//         height: 30,
//     },
//     SocialBtns: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '86%',
//         alignSelf: 'center',
//         marginTop: "8%"
//     },
//     dontAccount: {
//         width: '90%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center'
//     },
//     errorText: {
//         color: Colors.ErrorText,
//         fontSize: 12,
//         textAlign: "left",
//         width: '88%',
//         alignSelf: 'center',
//         fontFamily: Fonts.PoppinsRegular,
//     }
// })


// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import React, {useState, useContext} from 'react';
// import * as yup from 'yup';
// import {Formik, Field} from 'formik';
// import CustomInput from '../components/CustomInput';
// export default function Sign_Up() {
//   const signUpValidationSchema = yup.object().shape({
//     fullName: yup.string().trim().required('Name is required'),
//     // phoneNumber: yup
//     //   .string()
//     //   .trim()
//     //   .matches(/^923\d{9}$|^03\d{9}$/, 'Enter a valid phone number')
//     //   .required('Phone number is required'),
//     // address: yup.string().required('Address is required'),
//     email: yup
//       .string()
//       .trim()
//       .email('Please enter valid email')
//       .required('Email is required'),
//     password: yup
//       .string()
//       .min(6, ({min}) => `Password must be at least ${min} characters`)
//       .trim()
//       .required('Password is required'),
//     confirmPassword: yup
//       .string()
//       .trim()
//       .oneOf([yup.ref('password')], 'Passwords do not match')
//       .required('Confirm password is required'),
//   });
//   const [fname, setfname] = useState();
//   const [email, setemail] = useState();
//   const [num, setnum] = useState();
//   const [address, setaddress] = useState();
//   const [pass, setpass] = useState();
//   const [cpass, setcpass] = useState();

//   return (
//     <View style={styles.mainView}>
//       <View>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           keyboardShouldPersistTaps="always">
//           <View style={{alignItems: 'center'}}>
//             <Image
//               source={require('../../assets/info.png')}
//               style={styles.img}
//               resizeMode="contain"
//             />
//           </View>
//           <Formik
//             validationSchema={signUpValidationSchema}
//             initialValues={{
//               fullName: '',
//               email: '',
//               password: '',
//               confirmPassword: '',
//             }}
//             onSubmit={values => {
//               console.log(values);
//               setfname(values.fullName);
//               setemail(values.email);
//               setpass(values.password);
//               setcpass(values.confirmPassword);
//             }}>
//             {({handleSubmit, isValid}) => (
//               <>
//                 <View style={styles.txtBox}>
//                   <Text style={styles.txt}>Create New Account</Text>
//                 </View>

//                 <Field
//                   component={CustomInput}
//                   name="fullName"
//                   placeholder="𝖭𝖺𝗆𝖾"
//                   placeholderTextColor={'grey'}
//                 />

//                 <Field
//                   component={CustomInput}
//                   name="email"
//                   placeholder="𝖤𝗆𝖺𝗂𝗅 𝖠𝖽𝖽𝗋𝖾𝗌𝗌"
//                   keyboardType="email-address"
//                   placeholderTextColor={'grey'}
//                 />

//                 <Field
//                   component={CustomInput}
//                   name="password"
//                   placeholder="𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽"
//                   secureTextEntry
//                   placeholderTextColor={'grey'}
//                 />
//                 <Field
//                   component={CustomInput}
//                   name="confirmPassword"
//                   placeholder="𝖢𝗈𝗇𝖿𝗂𝗋𝗆 𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽"
//                   secureTextEntry
//                   placeholderTextColor={'grey'}
//                 />
//                 <View style={styles.btnbox}>
//                   <TouchableOpacity
//                     onPressIn={handleSubmit}
//                     disabled={!isValid}>
//                     <View style={styles.btn}>
//                       <Text
//                         style={[styles.btntxt, {backgroundColor: '#274997'}]}>
//                         Signup
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             )}
//           </Formik>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//   },

//   img: {
//     height: 150,
//     width: 150,
//     alignSelf: 'center',
//   },
//   txtBox: {
//     paddingVertical: 8,
//     marginVertical: 10,
//   },
//   txt: {
//     textAlign: 'center',
//     fontSize: 26,
//     fontWeight: '600',
//     color: 'black',
//   },
//   btnbox: {
//     width: '100%',
//   },
//   btn: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   btntxt: {
//     width: '85%',
//     textAlign: 'center',
//     color: 'white',
//     padding: 13,
//     borderRadius: 7,
//     textAlignVertical: 'center',
//     fontSize: 15,
//   },
//   headbox: {
//     width: '85%',
//     alignSelf: 'center',
//   },
//   headtxt: {
//     padding: 25,
//     fontSize: 35,
//     fontWeight: '500',
//     color: '#398E8B',
//   },
//   img: {
//     height: 150,
//     width: 150,
//   },
// });


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


class Sign_Up extends Component {
    state = {
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
    }

    signupFunc = () => {



        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foot',
                body: 'bars',
                userId: 2,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image style={styles.topImage}
                        source={require('../assets/images/header.png')}
                    />

                    <Text style={styles.heading}>Sign up</Text>

                    <Text style={styles.topHeading}>Sign up to see new and exciting features</Text>


                    <View style={styles.container}>
                        <FontAwesome name="user" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Choose your user name"
                            placeholderTextColor="black"
                            value={this.state.username}
                            onChangeText={(text) => this.setState({ username: text })}
                            style={styles.textInputs}
                        />
                    </View>


                    <View style={styles.container}>
                        <Zocial name="email" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Enter your E-mail or phone number"
                            placeholderTextColor="black"
                            value={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                            style={styles.textInputs}
                        />
                    </View>

                    <View style={styles.container} >
                        <Feather name="phone-call" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Enter your phone number"
                            placeholderTextColor="black"
                            value={this.state.phone}
                            onChangeText={(text) => this.setState({ phone: text })}
                            style={styles.textInputs}
                        />
                    </View>

                    <View style={styles.container} >
                        <Fontisto name="locked" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Choose your password"
                            placeholderTextColor="black"
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ pasword: text })}
                            style={{ marginStart: 20, flex: 1 }}
                        />
                        <Feather name="eye-off" style={styles.eyeIcon} size={20} color="black" />
                    </View>

                    <View style={styles.container} >
                        <Fontisto name="locked" style={styles.icons} size={20} color="black" />
                        <TextInput
                            placeholder="Confirm your password"
                            placeholderTextColor="black"
                            value={this.state.confirmpassword}
                            onChangeText={(text) => this.setState({ confirmpassword: text })}
                            style={styles.textInputs}
                        />
                    </View>


                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('OTP_Verify')
                        // this.signupFunc()
                    } style={styles.signUp}>
                        <View style={{ flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <Icon2 name="addusergroup" size={17} style={{ textAlign: "center", color: "white", marginTop: 10 }}></Icon2>
                            <Text style={styles.signUpText}>Sign up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ marginTop: 20 }}>Already User?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign_In')}>
                            <Text style={{ marginLeft: 20, marginTop: 20, textDecorationLine: 'underline' }}>Login Here</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default Sign_Up;


const styles = StyleSheet.create({
    topImage:
    {
        marginTop: -198,
        marginLeft: -60,
        width: 500,
        resizeMode: "stretch"
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
    signUpText: {
        color: 'white',
        textAlign: "center",
        paddingTop: 9,
        marginLeft: 5
    }
});