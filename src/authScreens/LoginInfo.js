import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Btn from '../components/Btn';
import {Colors} from '../Theme/Colors';
const LoginInfo = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <Image
          source={require('../../assets/main.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={{marginTop: 40}}
        onPress={() => navigation.navigate('Sign_In')}>
        <Btn
          title={'Sign In'}
          width={'85%'}
          backgroundColor={'#274997'}
          color={'white'}
        />
      </TouchableOpacity>
      <Text style={styles.orTxt}>or</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sign_Up')}>
        <Btn
          title={'Sign Up'}
          width={'85%'}
          backgroundColor={'white'}
          color={'black'}
          borderWidth={1}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginInfo;

const styles = StyleSheet.create({
  orTxt: {
    marginVertical: 10,
    textAlign: 'center',
  },
  img: {
    height: 370,
    width: 370,
  },
});
