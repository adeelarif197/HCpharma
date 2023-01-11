import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Reuse_TextInput from '../components/Reuse_TextInput';
import Btn from '../components/Btn';
import {Colors} from '../Theme/Colors';
// import Fonts from '../Theme/Fonts';
import Feather from 'react-native-vector-icons';
// alert-triangle

const Forgot_Password = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [checkFun, setcheckFun] = useState(false);
  //   const isEmailValidation = item => {
  //     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  //     if (item == '') {
  //       setcheckFun(false);
  //       setEmailError('Email address is required!');
  //     } else if (!reg.test(item)) {
  //       setcheckFun(false);
  //       setEmailError('You must enter a valid email address');
  //     } else {
  //       setcheckFun(true);
  //       setEmailError('');
  //     }
  //   };
  //   const onSendPress = () => {
  //     if (email == '') {
  //       setEmailError('Email address is required!');
  //     }
  //     if (checkFun == true) {
  //       navigation.navigate('Email_Check');
  //     }
  //   };
  return (
    <View style={{flex: 1, backgroundColor: Colors}}>
      <View style={styles.backICON}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={Colors.white} size={15} />
        </TouchableOpacity>
      </View>
      <View style={[styles.backICON, {marginTop: '10%'}]}>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </View>
      <View style={[styles.backICON, {marginTop: '2%'}]}>
        <Text style={styles.enterEmail}>
          Enter The Email Address Associated With Your{'\n'}Account
        </Text>
      </View>
      <Reuse_TextInput
        placeholder={'Email ID'}
        keyboardType={'email-address'}
        // onChangeText={e => isEmailValidation(e) + setEmail(e)}
        CustomInputStyle={{marginBottom: '0%'}}
      />
      <Text style={styles.errorText}>{emailError}</Text>
      <TouchableOpacity
        style={{marginTop: '10%'}}
        onPress={() => navigation.navigate('Email_Check')}>
        <Btn
          width={'40%'}
          color={'white'}
          backgroundColor={'#274997'}
          title={'Send'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Forgot_Password;

const styles = StyleSheet.create({
  backBtn: {
    marginTop: '2%',
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.btnColor,
  },
  backICON: {
    width: '90%',
    alignSelf: 'center',
  },
  sendBTN: {
    width: '40%',
    marginTop: '14%',
  },
  forgotText: {
    fontSize: 27,
    color: Colors.black,
    // fontFamily: Fonts.NunitoMedium,
    fontWeight: '500',
  },
  enterEmail: {
    fontSize: 13,
    fontWeight: '500',
    // fontFamily: Fonts.NunitoRegular,
    color: '#56565691',
  },
  errorText: {
    color: Colors.red,
    fontSize: 12,
    textAlign: 'left',
    width: '88%',
    alignSelf: 'center',
    // fontFamily: Fonts.PoppinsRegular,
  },
});
