import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fonts from '../Theme/Fonts';
import {Colors} from '../Theme/Colors';
import Btn from '../components/Btn';
// import Reuse_Button from '../Components/Reuse_Button';

const Email_Check = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={styles.backICON}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={Colors.white} size={15} />
        </TouchableOpacity>
      </View>
      <View style={[styles.backICON, {marginTop: '10%'}]}>
        <Text style={styles.checkEmailText}>Check Your Email</Text>
      </View>
      <View style={[styles.backICON, {marginTop: '2%'}]}>
        <Text style={styles.subText}>
          Please Check Your Mail. We Have Sent You An Email That Contains A
          Verification Code.
        </Text>
      </View>
      <Image
        source={require('../../assets/email.png')}
        resizeMode={'contain'}
        style={styles.ImgStyle}
      />
      {/* <Reuse_Button
        CustomStyle={styles.verifyBTN}
        BtnText={'Verify Code'}
        // onPress={() => navigation.navigate('OTP_Verify')}
      /> */}
      <TouchableOpacity
        style={{marginTop: '10%'}}
        onPress={() => navigation.navigate('OTP_Verify')}>
        <Btn
          width={'40%'}
          color={'white'}
          backgroundColor={'#274997'}
          title={'Verify Code'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Email_Check;

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
  verifyBTN: {
    width: '40%',
    marginTop: '10%',
  },
  checkEmailText: {
    fontSize: 27,
    color: Colors.black,
    // fontFamily: Fonts.NunitoMedium,
    fontWeight: '500',
  },
  subText: {
    fontSize: 13,
    fontWeight: '500',
    // fontFamily: Fonts.NunitoRegular,
    color: '#56565691',
  },
  ImgStyle: {
    width: '80%',
    alignSelf: 'center',
    height: '40%',
  },
});
