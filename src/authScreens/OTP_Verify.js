import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../Theme/Colors';
export default function OTP_Verify({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backICON}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={Colors.white} size={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.headbox}>
          <Text style={styles.head}>𝑽𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏</Text>
        </View>
        <View style={styles.imgbox}>
          <Image
            source={require('../../assets/lock1.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.txtbox}>
          <Text style={styles.txt}>
            Please enter your registered Mobile Number so that we can help you
            to recover your password
          </Text>
        </View>
      </View>
      <OTPTextInput
        inputCount={4}
        inputCellLength={1}
        containerStyle={styles.inputbox}
        textInputStyle={styles.input}
        tintColor="#274997"
        offTintColor="#e3f2f2"
      />
      <View style={styles.btnbox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create_Password');
          }}>
          <Text style={styles.btn}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputbox: {
    marginHorizontal: 40,
  },
  input: {
    // backgroundColor: 'lightgrey',
    // borderWidth: 1,
    height: 80,
    width: 65,
    borderRadius: 4,
    color: '#2353bf',
    fontSize: 30,
  },
  headbox: {
    marginVertical: 10,
  },
  head: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  imgbox: {
    marginVertical: 10,
  },
  img: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  txtbox: {
    alignItems: 'center',
    marginVertical: 20,
  },
  txt: {
    width: '80%',
    color: 'grey',
    // fontWeight: '500',
  },
  btn: {
    backgroundColor: '#274997',
    width: '40%',
    alignSelf: 'center',
    padding: 13,
    textAlign: 'center',
    marginVertical: 30,
    borderRadius: 7,
    color: 'white',
  },
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
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
