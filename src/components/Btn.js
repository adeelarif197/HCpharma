import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Btn = props => {
  return (
    <View style={{width: '100%'}}>
      <Text
        style={{
          width: props.width,
          alignSelf: 'center',
          backgroundColor: props.backgroundColor,
          textAlign: 'center',
          paddingVertical: 14,
          borderRadius: 5,
          color: props.color || 'grey',
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          //   fontFamily: 'Nunito-Bold',
          // fontWeight: '500',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({});
