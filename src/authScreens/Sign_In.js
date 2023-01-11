// import {
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   ToastAndroid,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Colors from '../Theme/Colors';
// // import Fonts from '../Theme/Fonts'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Reuse_Button from '../Components/Reuse_Button';
// import Reuse_TextInput from '../Components/Reuse_TextInput';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const Sign_In = ({navigation}) => {
// const [secureTextEntry, setsecureTextEntry] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [error, setError] = useState('');

//   const isEmailValidation = item => {
//     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     if (item.length === 0) {
//       setError('');
//       setEmailError('Email address is required!');
//     } else if (!reg.test(item)) {
//       setError('');
//       setEmailError('You must enter a valid email address');
//     } else {
//       setEmailError('');
//       setError('');
//     }
//   };
//   const isPasswordValidation = e => {
//     if (e == '') {
//       setPasswordError('Password is required!');
//       setError('');
//     } else {
//       setPasswordError('');
//       setError('');
//     }
//   };
//   const onLoginPress = () => {
//     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     if (email == '' && password == '') {
//       setEmailError('');
//       setPasswordError('');
//       setError('Please Enter Your Credentials');
//     } else if (email == '') {
//       setError('');
//       setEmailError('Email address is required!');
//     } else if (!reg.test(email)) {
//       setError('');
//       setEmailError('Please enter a valid email address');
//     } else if (password == '') {
//       setError('');
//       setPasswordError('Please Enter Your password');
//     } else {
//       setError('');
//       ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT);
//       navigation.navigate('Profile_Screen');
//     }
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
//       <ScrollView>
//         <>
//           <TouchableOpacity
//             style={{width: '90%', alignSelf: 'center', marginTop: '2%'}}
//             onPress={() => navigation.goBack()}>
//             <AntDesign name="left" color={Colors.BLACK} size={20} />
//           </TouchableOpacity>
//           <Image
//             source={require('../Theme/Images/Sign_In.png')}
//             style={styles.ImgStyle}
//             resizeMode={'contain'}
//           />
//           <Text style={styles.TextStyle}>Login to your Account</Text>
//           <Reuse_TextInput
//             placeholder={'Email'}
//             keyboardType={'email-address'}
//             onChangeText={e => isEmailValidation(e) + setEmail(e)}
//             CustomInputStyle={{marginBottom: '0%'}}
//           />
//           <Text style={styles.errorText}>{emailError}</Text>
//           <Reuse_TextInput
//             placeholder={'Password'}
//             secureTextEntry={secureTextEntry}
//             onChangeText={e => isPasswordValidation(e) + setPassword(e)}
// addIcon={
//   <TouchableOpacity>
//     <MaterialIcons
//       name={
//         secureTextEntry == true ? 'visibility-off' : 'visibility'
//       }
//       size={20}
//       color={Colors.Black}
//       onPress={() => {
//         secureTextEntry == true
//           ? setsecureTextEntry(false)
//           : setsecureTextEntry(true);
//       }}
//     />
//   </TouchableOpacity>
// }
//             CustomInputStyle={{marginTop: '6%', marginVertical: '0%'}}
//           />
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               width: '90%',
//               alignSelf: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{...styles.errorText, width: '50%'}}>
//               {passwordError}
//             </Text>
//             <TouchableOpacity
//               style={styles.ForgotBox}
//               onPress={() => navigation.navigate('Forgot_Password')}>
//               <Text style={styles.forgotStyle}>Forgot Password!</Text>
//             </TouchableOpacity>
//           </View>
//           <Reuse_Button
//             BtnText={'Sign In'}
//             onPress={() => navigation.navigate('Dashboard')}
//             CustomStyle={{marginTop: '8%'}}
//             CustomTextStyle={{}}
//           />
//           <Text style={{...styles.errorText, textAlign: 'center'}}>
//             {error}
//           </Text>
//           <View style={styles.OtherOptionBox}>
//             <View style={[styles.lineStyle, {marginRight: '2%'}]} />
//             <Text style={styles.SignWith}>or Sign in with</Text>
//             <View style={[styles.lineStyle, {marginLeft: '2%'}]} />
//           </View>

//           <View style={styles.SocialBtns}>
//             <Reuse_Button
//               Type_Text={false}
//               CustomStyle={{
//                 width: '26%',
//                 height: 40,
//                 backgroundColor: Colors.WHITE,
//                 borderColor: Colors.LightGrey,
//                 borderWidth: 2,
//               }}
//               addOther={
//                 <Image
//                   source={require('../Theme/Images/googleImg.png')}
//                   resizeMode={'contain'}
//                   style={styles.BtnImgStyle}
//                 />
//               }
//             />
//             <Reuse_Button
//               Type_Text={false}
//               CustomStyle={{
//                 width: '26%',
//                 height: 40,
//                 backgroundColor: Colors.WHITE,
//                 borderColor: Colors.LightGrey,
//                 borderWidth: 2,
//               }}
//               addOther={
//                 <Image
//                   source={require('../Theme/Images/fblogo.png')}
//                   resizeMode={'contain'}
//                   style={{...styles.BtnImgStyle, height: 20}}
//                 />
//               }
//             />
//             <Reuse_Button
//               Type_Text={false}
//               CustomStyle={{
//                 width: '26%',
//                 height: 40,
//                 backgroundColor: Colors.WHITE,
//                 borderColor: Colors.LightGrey,
//                 borderWidth: 2,
//               }}
//               addOther={
//                 <Image
//                   source={require('../Theme/Images/twitterlogo.png')}
//                   resizeMode={'contain'}
//                   style={{...styles.BtnImgStyle, height: 20}}
//                 />
//               }
//             />
//           </View>
//           <View style={styles.dontAccount}>
//             <Text style={styles.TextStyle}>Don't have an account? </Text>
//             <TouchableOpacity
//               style={{marginTop: '6%'}}
//               onPress={() => navigation.navigate('Sign_Up')}>
//               <Text style={{...styles.TextStyle, color: Colors.SMart_Rental}}>
//                 SignUp
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       </ScrollView>
//     </View>
//   );
// };

// export default Sign_In;

// const styles = StyleSheet.create({
//   ImgStyle: {
//     marginTop: '10%',
//     width: '80%',
//     height: 180,
//     alignSelf: 'center',
//   },
//   TextStyle: {
//     marginTop: '6%',
//     fontSize: 20,
//     color: Colors.BLACK,
//     alignSelf: 'center',
//     fontWeight: '500',
//     // fontFamily: Fonts.NunitoMedium
//   },
//   ForgotBox: {
//     // width: '88%',
//     // alignSelf: 'center',
//     // alignItems: 'flex-end',
//     // justifyContent: 'flex-end',
//     // marginTop: '1%',
//   },
//   OtherOptionBox: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '8%',
//   },
//   lineStyle: {
//     width: 20,
//     height: 1,
//     backgroundColor: Colors.BLACK,
//   },
//   SignWith: {
//     alignSelf: 'center',
//     color: Colors.lightBlack,
//     // fontFamily: Fonts.PoppinsBold,
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   forgotStyle: {
//     // fontFamily: Fonts.PoppinsMedium,
//     fontSize: 12,
//     fontWeight: '600',
//     color: Colors.BLACK,
//   },
//   BtnImgStyle: {
//     width: '40%',
//     height: 40,
//   },
//   SocialBtns: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '86%',
//     alignSelf: 'center',
//     marginTop: '8%',
//   },
//   dontAccount: {
//     width: '90%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//   },
//   errorText: {
//     color: Colors.ErrorText,
//     fontSize: 12,
//     textAlign: 'left',
//     width: '88%',
//     alignSelf: 'center',
//     // fontFamily: Fonts.PoppinsRegular,
//   },
// });
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Reuse_TextInput from '../components/Reuse_TextInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../Theme/Colors';
import Btn from '../components/Btn';
import {ScrollView} from 'react-native-gesture-handler';

const Sign_In = ({navigation}) => {
  const [secureTextEntry, setsecureTextEntry] = useState(true);

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <ScrollView style={{marginBottom: '5%'}}>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <Image
            source={require('../../assets/info.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.loginTxt}>Login to your Account</Text>
        <Reuse_TextInput placeholder={'Email'} />
        <Reuse_TextInput
          marginTop={'5%'}
          secureTextEntry={secureTextEntry}
          placeholder={'Password'}
          addIcon={
            <TouchableOpacity>
              <MaterialIcons
                name={secureTextEntry == true ? 'visibility-off' : 'visibility'}
                size={20}
                color={Colors.black}
                onPress={() => {
                  secureTextEntry == true
                    ? setsecureTextEntry(false)
                    : setsecureTextEntry(true);
                }}
              />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('Forgot_Password')}>
          <Text>Forgot Password!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnbox}
          onPress={() => navigation.navigate('BottomNavigation')}>
          <Btn
            title={'Sign In'}
            width={'90%'}
            backgroundColor={'#274997'}
            color={'white'}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Sign_In;

const styles = StyleSheet.create({
  loginTxt: {
    fontSize: 22,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 'bold',
  },
  forgot: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  btnbox: {
    marginTop: 15,
  },
  img: {
    height: 200,
    width: 200,
  },
});
